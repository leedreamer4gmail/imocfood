// _api-src/test/debug-env.ts
function handler(req, res) {
  const adminUser = process.env.ADMIN_USERNAME;
  return res.status(200).json({
    hasAdminUsername: !!adminUser,
    adminUsernameLength: adminUser?.length ?? 0,
    adminUsernameFirst3: adminUser?.substring(0, 3) ?? "none",
    adminUsernameIsLeedreamer: adminUser === "leedreamer"
  });
}
export {
  handler as default
};
