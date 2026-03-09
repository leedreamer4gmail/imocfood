// _api-src/admin/me.ts
import { jwtVerify } from "jose";
var JWT_SECRET = process.env.JWT_SECRET ?? "fallback-secret-change-me";
async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin ?? "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  const cookieHeader = req.headers.cookie ?? "";
  const cookies = Object.fromEntries(
    cookieHeader.split(";").map((c) => {
      const [k, ...v] = c.trim().split("=");
      return [k, v.join("=")];
    })
  );
  const token = cookies["admin_token"];
  if (!token) {
    return res.status(401).json({ ok: false, error: "\u672A\u767B\u5F55" });
  }
  try {
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return res.status(200).json({ ok: true, username: payload.username, role: payload.role });
  } catch {
    return res.status(401).json({ ok: false, error: "\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55" });
  }
}
export {
  handler as default
};
