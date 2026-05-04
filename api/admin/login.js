// _api-src/admin/login.ts
import { SignJWT } from "jose";
import { createHash, randomInt } from "crypto";
var ADMIN_USERNAME = "leedreamer";
var JWT_SECRET = process.env.JWT_SECRET ?? "fallback-secret-change-me";
var OTP_EXPIRY_SEC = 5 * 60;
function generateOTP() {
  return randomInt(1e5, 1e6).toString();
}
function hashOTP(otp) {
  return createHash("sha256").update(otp).digest("hex");
}
async function handler(req, res) {
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
    return res.status(400).json({ error: "\u8BF7\u8F93\u5165\u7528\u6237\u540D" });
  }
  if (username !== ADMIN_USERNAME) {
    return res.status(401).json({ error: "\u7528\u6237\u540D\u4E0D\u6B63\u786E" });
  }
  const otp = generateOTP();
  console.log(`[Admin OTP] \u9A8C\u8BC1\u7801 for ${username}: ${otp} (5\u5206\u949F\u5185\u6709\u6548)`);
  const secret = new TextEncoder().encode(JWT_SECRET);
  const challenge = await new SignJWT({ otpHash: hashOTP(otp), purpose: "admin-otp" }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime(`${OTP_EXPIRY_SEC}s`).sign(secret);
  const adminPhone = process.env.ADMIN_PHONE ?? "";
  const maskedPhone = adminPhone.length >= 8 ? adminPhone.slice(0, 3) + "****" + adminPhone.slice(-4) : "";
  return res.status(200).json({ ok: true, challenge, maskedPhone });
}
export {
  handler as default
};
