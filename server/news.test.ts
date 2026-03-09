import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock Chroma DB helpers so tests don't require a real Chroma Cloud connection
vi.mock("./chromaDb", () => ({
  getPublishedPosts: vi.fn().mockResolvedValue([
    {
      id: "post_1_abc123",
      contentZh: "这是测试动态内容",
      contentEn: "This is test post content",
      published: true,
      createdAt: 1735689600000,
    },
  ]),
  getAllPosts: vi.fn().mockResolvedValue([
    {
      id: "post_1_abc123",
      contentZh: "这是测试动态内容",
      contentEn: "This is test post content",
      published: true,
      createdAt: 1735689600000,
    },
    {
      id: "post_2_def456",
      contentZh: "草稿动态内容",
      contentEn: null,
      published: false,
      createdAt: 1735776000000,
    },
  ]),
  createPost: vi.fn().mockResolvedValue("post_3_ghi789"),
  updatePost: vi.fn().mockResolvedValue(undefined),
  deletePost: vi.fn().mockResolvedValue(undefined),
}));

// Mock LLM translation
vi.mock("./_core/llm", () => ({
  invokeLLM: vi.fn().mockResolvedValue({
    choices: [{ message: { content: "Translated text" } }],
  }),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

function createAdminContext(): TrpcContext {
  return {
    user: {
      id: 1,
      openId: "admin-user",
      email: "admin@imocfood.com",
      name: "Admin User",
      loginMethod: "admin_token",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

function createUserContext(): TrpcContext {
  return {
    user: {
      id: 2,
      openId: "regular-user",
      email: "user@example.com",
      name: "Regular User",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

describe("news.list (public, paginated)", () => {
  it("returns paginated published posts for public users", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.news.list({ page: 1 });
    expect(result.posts).toHaveLength(1);
    expect(result.posts[0].contentZh).toBe("这是测试动态内容");
    expect(result.posts[0].published).toBe(true);
    expect(result.total).toBe(1);
    expect(result.totalPages).toBe(1);
    expect(result.page).toBe(1);
  });

  it("returns page 1 by default", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.news.list({});
    expect(result.page).toBe(1);
  });
});

describe("news.adminList (admin only)", () => {
  it("returns all posts including drafts for admin", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const posts = await caller.news.adminList();
    expect(posts).toHaveLength(2);
    const published = posts.filter((p) => p.published);
    const drafts = posts.filter((p) => !p.published);
    expect(published).toHaveLength(1);
    expect(drafts).toHaveLength(1);
  });

  it("throws FORBIDDEN for regular users", async () => {
    const caller = appRouter.createCaller(createUserContext());
    await expect(caller.news.adminList()).rejects.toThrow();
  });

  it("throws UNAUTHORIZED for unauthenticated users", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(caller.news.adminList()).rejects.toThrow();
  });
});

describe("news.create (admin only)", () => {
  it("creates a post with auto-translation for admin", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const result = await caller.news.create({
      contentZh: "新动态内容",
      published: true,
    });
    expect(result.success).toBe(true);
  });

  it("throws FORBIDDEN for regular users", async () => {
    const caller = appRouter.createCaller(createUserContext());
    await expect(
      caller.news.create({ contentZh: "新动态", published: true })
    ).rejects.toThrow();
  });

  it("throws UNAUTHORIZED for unauthenticated users", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.news.create({ contentZh: "新动态", published: true })
    ).rejects.toThrow();
  });
});

describe("news.togglePublish (admin only)", () => {
  it("toggles publish status for admin", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const result = await caller.news.togglePublish({ id: "post_1_abc123", published: false });
    expect(result.success).toBe(true);
  });

  it("throws FORBIDDEN for regular users", async () => {
    const caller = appRouter.createCaller(createUserContext());
    await expect(
      caller.news.togglePublish({ id: "post_1_abc123", published: false })
    ).rejects.toThrow();
  });
});

describe("news.delete (admin only)", () => {
  it("deletes a post for admin", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const result = await caller.news.delete({ id: "post_1_abc123" });
    expect(result.success).toBe(true);
  });

  it("throws FORBIDDEN for regular users", async () => {
    const caller = appRouter.createCaller(createUserContext());
    await expect(caller.news.delete({ id: "post_1_abc123" })).rejects.toThrow();
  });
});

describe("news.bulkDelete (admin only)", () => {
  it("bulk deletes multiple posts for admin", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const result = await caller.news.bulkDelete({ ids: ["post_1_abc123", "post_2_def456"] });
    expect(result.success).toBe(true);
    expect(result.deleted).toBe(2);
  });

  it("throws FORBIDDEN for regular users", async () => {
    const caller = appRouter.createCaller(createUserContext());
    await expect(
      caller.news.bulkDelete({ ids: ["post_1_abc123"] })
    ).rejects.toThrow();
  });

  it("throws UNAUTHORIZED for unauthenticated users", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.news.bulkDelete({ ids: ["post_1_abc123"] })
    ).rejects.toThrow();
  });
});
