/**
 * Admin login API - step 1 of 2-step login.
 * POST /api/admin/login  { username }
 * → generates a 6-digit OTP, logs it to console (check Vercel function logs),
 *   and returns a signed challenge token. The final JWT cookie is issued only
 *   after OTP verification via POST /api/admin/verify-otp.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { SignJWT } from "jose";
import { createHash, randomInt } from "crypto";

// Hardcoded admin username - not using env var to avoid Vercel BYOK override
const ADMIN_USERNAME = "leedreamer";
const JWT_SECRET = process.env.JWT_SECRET ?? "fallback-secret-change-me";
const OTP_EXPIRY_SEC = 5 * 60; // 5 minutes

function generateOTP(): string {
  return randomInt(100000, 1000000).toString();
}

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

  const { username } = req.body ?? {};

  if (!username) {
    return res.status(400).json({ error: "请输入用户名" });
  }

  if (username !== ADMIN_USERNAME) {
    return res.status(401).json({ error: "用户名不正确" });
  }

  // Generate a 6-digit OTP and log it to console (admin checks Vercel function logs)
  const otp = generateOTP();
  console.log(`[Admin OTP] 验证码 for ${username}: ${otp} (5分钟内有效)`);

  // Build a signed challenge JWT that encodes the hashed OTP (not the OTP itself)
  const secret = new TextEncoder().encode(JWT_SECRET);
  const challenge = await new SignJWT({ otpHash: hashOTP(otp), purpose: "admin-otp" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${OTP_EXPIRY_SEC}s`)
    .sign(secret);

  // Mask the configured admin phone for display (e.g. 138****8888)
  const adminPhone = process.env.ADMIN_PHONE ?? "";
  const maskedPhone = adminPhone.length >= 8
    ? adminPhone.slice(0, 3) + "****" + adminPhone.slice(-4)
    : "";

  return res.status(200).json({ ok: true, challenge, maskedPhone });
}
