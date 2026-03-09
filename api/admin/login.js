// _api-src/admin/login.ts
import { SignJWT } from "jose";
var ADMIN_USERNAME = "leedreamer";
var JWT_SECRET = process.env.JWT_SECRET ?? "fallback-secret-change-me";
var COOKIE_MAX_AGE = 60 * 60 * 24 * 30;
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
  const secret = new TextEncoder().encode(JWT_SECRET);
  const token = await new SignJWT({ role: "admin", username }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("30d").sign(secret);
  res.setHeader(
    "Set-Cookie",
    `admin_token=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${COOKIE_MAX_AGE}`
  );
  return res.status(200).json({ ok: true, message: "\u767B\u5F55\u6210\u529F" });
}
export {
  handler as default
};
