import type { VercelRequest, VercelResponse } from "@vercel/node";

let _handler: ((req: any, res: any) => void) | null = null;
let _initError: string | null = null;

async function getHandler() {
  if (_handler) return _handler;
  if (_initError) return null;
  
  try {
    const { createExpressMiddleware } = await import("@trpc/server/adapters/express");
    const express = (await import("express")).default;
    // Explicitly import from routers/index.ts (not the directory) to avoid ESM directory import error
    const { appRouter } = await import("../../server/routers/index.js");
    const { createContext } = await import("../../server/_core/context.js");

    const app = express();
    app.use(express.json({ limit: "10mb" }));
    app.use(
      "/api/trpc",
      createExpressMiddleware({
        router: appRouter,
        createContext,
      })
    );
    _handler = (req: any, res: any) => app(req, res);
    return _handler;
  } catch (err: any) {
    _initError = err?.message || String(err);
    console.error("[tRPC init error]", err);
    return null;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const h = await getHandler();
  if (!h) {
    res.status(500).json({ error: "tRPC init failed", detail: _initError });
    return;
  }
  return h(req, res);
}
