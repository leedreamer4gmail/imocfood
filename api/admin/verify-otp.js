// _api-src/admin/verify-otp.ts
import { SignJWT, jwtVerify } from "jose";
import { createHash } from "crypto";
var ADMIN_USERNAME = "leedreamer";
var JWT_SECRET = process.env.JWT_SECRET ?? "fallback-secret-change-me";
var COOKIE_MAX_AGE = 60 * 60 * 24 * 30;
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
  const { challenge, otp } = req.body ?? {};
  if (!challenge || !otp) {
    return res.status(400).json({ error: "\u7F3A\u5C11\u9A8C\u8BC1\u53C2\u6570" });
  }
  try {
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(challenge, secret);
    if (payload.purpose !== "admin-otp") {
      return res.status(401).json({ error: "\u65E0\u6548\u7684\u9A8C\u8BC1\u4EE4\u724C" });
    }
    const expectedHash = payload.otpHash;
    const enteredHash = hashOTP(String(otp).trim());
    if (enteredHash !== expectedHash) {
      return res.status(401).json({ error: "\u9A8C\u8BC1\u7801\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5" });
    }
    const token = await new SignJWT({ role: "admin", username: ADMIN_USERNAME }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("30d").sign(secret);
    res.setHeader(
      "Set-Cookie",
      `admin_token=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${COOKIE_MAX_AGE}`
    );
    return res.status(200).json({ ok: true, message: "\u767B\u5F55\u6210\u529F" });
  } catch {
    return res.status(401).json({ error: "\u9A8C\u8BC1\u7801\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55" });
  }
}
export {
  handler as default
};
