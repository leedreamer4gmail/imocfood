import "dotenv/config";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import * as db from "../../server/db";
import { getSessionCookieOptions } from "../../server/_core/cookies";
import { sdk } from "../../server/_core/sdk";
import { COOKIE_NAME, ONE_YEAR_MS } from "../../shared/const";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const code = req.query["code"];
  const state = req.query["state"];

  if (typeof code !== "string" || typeof state !== "string") {
    res.status(400).json({ error: "code and state are required" });
    return;
  }

  try {
    const tokenResponse = await sdk.exchangeCodeForToken(code, state);
    const userInfo = await sdk.getUserInfo(tokenResponse.accessToken);

    if (!userInfo.openId) {
      res.status(400).json({ error: "openId missing from user info" });
      return;
    }

    await db.upsertUser({
      openId: userInfo.openId,
      name: userInfo.name || null,
      email: userInfo.email ?? null,
      loginMethod: userInfo.loginMethod ?? userInfo.platform ?? null,
      lastSignedIn: new Date(),
    });

    const sessionToken = await sdk.createSessionToken(userInfo.openId, {
      name: userInfo.name || "",
      expiresInMs: ONE_YEAR_MS,
    });

    // Build cookie options compatible with Vercel (req is VercelRequest, not Express Request)
    const cookieOptions = getSessionCookieOptions(req as any);
    const cookieStr = serializeCookie(COOKIE_NAME, sessionToken, {
      ...cookieOptions,
      maxAge: ONE_YEAR_MS,
    });
    res.setHeader("Set-Cookie", cookieStr);
    res.redirect(302, "/");
  } catch (error) {
    console.error("[OAuth] Callback failed", error);
    res.status(500).json({ error: "OAuth callback failed" });
  }
}

function serializeCookie(
  name: string,
  value: string,
  options: Record<string, unknown>
): string {
  let str = `${name}=${encodeURIComponent(value)}`;
  if (options.maxAge) str += `; Max-Age=${Math.floor((options.maxAge as number) / 1000)}`;
  if (options.path) str += `; Path=${options.path}`;
  if (options.domain) str += `; Domain=${options.domain}`;
  if (options.secure) str += "; Secure";
  if (options.httpOnly) str += "; HttpOnly";
  if (options.sameSite) str += `; SameSite=${options.sameSite}`;
  return str;
}
