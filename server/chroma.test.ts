import { describe, it, expect } from "vitest";
import { config } from "dotenv";

config();

describe("Chroma Cloud v2 connection", () => {
  it("should connect to Chroma Cloud v2 and list collections", async () => {
    const apiKey = process.env.CHROMA_API_KEY;
    const tenant = process.env.CHROMA_TENANT;

    expect(apiKey, "CHROMA_API_KEY must be set").toBeTruthy();
    expect(tenant, "CHROMA_TENANT must be set").toBeTruthy();

    // Test connection via v2 HTTP API
    const response = await fetch(
      `https://api.trychroma.com/api/v2/tenants/${tenant}/databases/imocfood/collections`,
      {
        headers: {
          "x-chroma-token": apiKey!,
        },
      }
    );

    expect(response.ok, `Chroma API returned ${response.status}`).toBe(true);
    const collections = await response.json();
    expect(Array.isArray(collections)).toBe(true);
    console.log(`✓ Connected to Chroma Cloud v2. Collections: ${JSON.stringify(collections.map((c: any) => c.name))}`);
  });
});
