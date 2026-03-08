import type { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";

const t = initTRPC.create({ transformer: superjson });
const router = t.router({
  ping: t.procedure.query(() => ({ pong: true, env: !!process.env.CHROMA_API_KEY })),
});

const app = express();
app.use(express.json());
app.use("/api/test/trpc2", createExpressMiddleware({ router, createContext: () => ({}) }));

export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req as any, res as any);
}
