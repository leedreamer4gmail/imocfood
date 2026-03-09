// _api-src/admin/logout.ts
function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin ?? "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  res.setHeader(
    "Set-Cookie",
    "admin_token=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0"
  );
  return res.status(200).json({ ok: true });
}
export {
  handler as default
};
