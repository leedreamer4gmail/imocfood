/**
 * Admin login API - username only, no password.
 * POST /api/admin/login  { username }
 * → sets httpOnly JWT cookie "admin_token" if username === ADMIN_USERNAME
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { SignJWT } from "jose";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME ?? "leedreamer";
const JWT_SECRET = process.env.JWT_SECRET ?? "fallback-secret-change-me";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin ?? "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { username } = req.body ?? {};

  if (!username) {
    return res.status(400).json({ error: "请输入用户名" });
  }

  if (username !== ADMIN_USERNAME) {
    return res.status(401).json({ error: "用户名不正确" });
  }

  // Issue JWT
  const secret = new TextEncoder().encode(JWT_SECRET);
  const token = await new SignJWT({ role: "admin", username })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secret);

  // Set httpOnly cookie
  res.setHeader(
    "Set-Cookie",
    `admin_token=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${COOKIE_MAX_AGE}`
  );

  return res.status(200).json({ ok: true, message: "登录成功" });
}
