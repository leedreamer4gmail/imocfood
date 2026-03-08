#!/usr/bin/env node
/**
 * Build script for Vercel API functions.
 * 
 * TypeScript source files live in _api-src/ (underscore prefix = not a Vercel function).
 * This script bundles them with esbuild into api/ directory as .js files.
 * 
 * esbuild resolves @shared/* path aliases that Vercel's TS compiler cannot handle.
 * Vercel auto-discovers the .js files in api/ as serverless functions.
 */
import { build } from "esbuild";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sharedAliases = {
  "@shared/const": path.resolve(__dirname, "shared/const.ts"),
  "@shared/_core/errors": path.resolve(__dirname, "shared/_core/errors.ts"),
  "@shared/types": path.resolve(__dirname, "shared/types.ts"),
};

// Source files in _api-src/ → bundled output in api/
const entryPoints = [
  { in: "_api-src/trpc/[...trpc].ts", out: "api/trpc/[...trpc].js" },
  { in: "_api-src/oauth/callback.ts", out: "api/oauth/callback.js" },
  { in: "_api-src/test/ping.ts", out: "api/test/ping.js" },
];

console.log("Building API functions...");

for (const { in: entry, out: outFile } of entryPoints) {
  await build({
    entryPoints: [entry],
    outfile: outFile,
    platform: "node",
    bundle: true,
    format: "esm",
    packages: "external",
    alias: sharedAliases,
    sourcemap: false,
    minify: false,
  });
  
  console.log(`  ✓ ${entry} → ${outFile}`);
}

console.log("API build complete.");
