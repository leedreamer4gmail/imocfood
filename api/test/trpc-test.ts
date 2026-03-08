import type { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { initTRPC } from "@trpc/server";

const t = initTRPC.create();
const router = t.router({
  ping: t.procedure.query(() => ({ pong: true })),
});

const app = express();
app.use(express.json());
app.use("/api/test/trpc-test", createExpressMiddleware({ router, createContext: () => ({}) }));

export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req as any, res as any);
}
