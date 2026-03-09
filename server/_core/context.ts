import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../drizzle/schema";
import { jwtVerify } from "jose";
import { sdk } from "./sdk";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

const JWT_SECRET = process.env.JWT_SECRET ?? "fallback-secret-change-me";

/**
 * Try to authenticate via admin_token cookie (our own simple auth).
 * Returns a synthetic User object with role='admin' if valid.
 */
async function authenticateAdminToken(req: CreateExpressContextOptions["req"]): Promise<User | null> {
  try {
    const cookieHeader = req.headers.cookie ?? "";
    const match = cookieHeader.match(/(?:^|;\s*)admin_token=([^;]+)/);
    if (!match) return null;

    const token = match[1];
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    if (payload.role !== "admin") return null;

    // Return a synthetic User object that satisfies the User type
    return {
      id: 0,
      openId: String(payload.username ?? "admin"),
      name: String(payload.username ?? "admin"),
      email: null,
      loginMethod: "admin_token",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    } as User;
  } catch {
    return null;
  }
}

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  let user: User | null = null;

  // First try our own admin_token cookie (works without manus.im)
  user = await authenticateAdminToken(opts.req);

  // Fall back to Manus OAuth if no admin_token
  if (!user) {
    try {
      user = await sdk.authenticateRequest(opts.req);
    } catch {
      user = null;
    }
  }

  return {
    req: opts.req,
    res: opts.res,
    user,
  };
}
