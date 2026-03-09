import type { VercelRequest, VercelResponse } from "@vercel/node";
export default function handler(req: VercelRequest, res: VercelResponse) {
  const adminUser = process.env.ADMIN_USERNAME;
  return res.status(200).json({ 
    hasAdminUsername: !!adminUser,
    adminUsernameLength: adminUser?.length ?? 0,
    adminUsernameFirst3: adminUser?.substring(0, 3) ?? "none",
    adminUsernameIsLeedreamer: adminUser === "leedreamer",
  });
}
