import { createExpressMiddleware } from "@trpc/server/adapters/express";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import { appRouter } from "../../server/routers";
import { createContext } from "../../server/_core/context";

const app = express();
app.use(express.json({ limit: "10mb" }));

// Mount at root - Vercel already routes /api/trpc/* to this function
// so req.url will be something like /api/trpc/news.list?batch=1...
// We mount tRPC middleware at /api/trpc to match that path
app.use(
  "/api/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Do NOT rewrite req.url - Vercel already passes the full path including /api/trpc
  return app(req as any, res as any);
}
