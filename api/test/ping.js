// _api-src/test/ping.ts
function handler(req, res) {
  res.status(200).json({ ok: true, url: req.url, env: !!process.env.CHROMA_API_KEY });
}
export {
  handler as default
};
