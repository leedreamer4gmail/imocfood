/**
 * Admin logout API
 * POST /api/admin/logout → clears admin_token cookie
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin ?? "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Clear the cookie
  res.setHeader(
    "Set-Cookie",
    "admin_token=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0"
  );

  return res.status(200).json({ ok: true });
}
