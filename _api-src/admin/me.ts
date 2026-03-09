/**
 * Admin auth check API
 * GET /api/admin/me → returns { ok: true, username } if logged in, 401 if not
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET ?? "fallback-secret-change-me";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin ?? "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Parse cookie
  const cookieHeader = req.headers.cookie ?? "";
  const cookies = Object.fromEntries(
    cookieHeader.split(";").map((c) => {
      const [k, ...v] = c.trim().split("=");
      return [k, v.join("=")];
    })
  );

  const token = cookies["admin_token"];
  if (!token) {
    return res.status(401).json({ ok: false, error: "未登录" });
  }

  try {
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return res.status(200).json({ ok: true, username: payload.username, role: payload.role });
  } catch {
    return res.status(401).json({ ok: false, error: "登录已过期，请重新登录" });
  }
}
