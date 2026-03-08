#!/usr/bin/env node
/**
 * Build script for Vercel API functions.
 * Bundles TypeScript API handlers with esbuild, resolving @shared/* path aliases
 * that Vercel's @vercel/node TypeScript compiler cannot handle natively.
 * 
 * Outputs bundled .js files alongside the .ts source files in api/ directory.
 * Vercel will use the pre-built .js files instead of trying to compile .ts files.
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

// Build each API entry point - output .js files in the same api/ directory
// Vercel prioritizes .js over .ts files, so these pre-bundled files will be used
const entryPoints = [
  { in: "api/trpc/[...trpc].ts", out: "api/trpc/[...trpc].js" },
  { in: "api/oauth/callback.ts", out: "api/oauth/callback.js" },
  { in: "api/test/ping.ts", out: "api/test/ping.js" },
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
