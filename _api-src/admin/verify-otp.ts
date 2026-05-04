/**
 * Admin OTP verify API - step 2 of 2-step login.
 * POST /api/admin/verify-otp  { challenge, otp }
 * → verifies the 6-digit OTP against the signed challenge token and,
 *   if correct, sets the httpOnly "admin_token" session cookie.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { SignJWT, jwtVerify } from "jose";
import { createHash } from "crypto";

const ADMIN_USERNAME = "leedreamer";
const JWT_SECRET = process.env.JWT_SECRET ?? "fallback-secret-change-me";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function hashOTP(otp: string): string {
  return createHash("sha256").update(otp).digest("hex");
}

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

  const { challenge, otp } = req.body ?? {};

  if (!challenge || !otp) {
    return res.status(400).json({ error: "缺少验证参数" });
  }

  try {
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(challenge, secret);

    if (payload.purpose !== "admin-otp") {
      return res.status(401).json({ error: "无效的验证令牌" });
    }

    const expectedHash = payload.otpHash as string;
    const enteredHash = hashOTP(String(otp).trim());

    if (enteredHash !== expectedHash) {
      return res.status(401).json({ error: "验证码错误，请重试" });
    }

    // OTP is correct — issue the admin session JWT cookie
    const token = await new SignJWT({ role: "admin", username: ADMIN_USERNAME })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("30d")
      .sign(secret);

    res.setHeader(
      "Set-Cookie",
      `admin_token=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${COOKIE_MAX_AGE}`
    );

    return res.status(200).json({ ok: true, message: "登录成功" });
  } catch {
    return res.status(401).json({ error: "验证码已过期，请重新登录" });
  }
}
