import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock Chroma DB helpers so tests don't require a real Chroma Cloud connection
vi.mock("./chromaDb", () => ({
  getPublishedArticles: vi.fn().mockResolvedValue([
    {
      id: "article_1_abc123",
      titleZh: "测试文章",
      titleEn: "Test Article",
      contentZh: "这是测试内容",
      contentEn: "This is test content",
      summaryZh: "摘要",
      summaryEn: "Summary",
      author: "Test Author",
      category: "公司动态",
      published: true,
      coverImageUrl: null,
      createdAt: 1735689600000,
      updatedAt: 1735689600000,
    },
  ]),
  getAllArticles: vi.fn().mockResolvedValue([
    {
      id: "article_1_abc123",
      titleZh: "测试文章",
      titleEn: "Test Article",
      contentZh: "这是测试内容",
      contentEn: "This is test content",
      summaryZh: "摘要",
      summaryEn: "Summary",
      author: "Test Author",
      category: "公司动态",
      published: true,
      coverImageUrl: null,
      createdAt: 1735689600000,
      updatedAt: 1735689600000,
    },
    {
      id: "article_2_def456",
      titleZh: "草稿文章",
      titleEn: null,
      contentZh: "草稿内容",
      contentEn: null,
      summaryZh: null,
      summaryEn: null,
      author: null,
      category: null,
      published: false,
      coverImageUrl: null,
      createdAt: 1735776000000,
      updatedAt: 1735776000000,
    },
  ]),
  getArticleById: vi.fn().mockImplementation(async (id: string) => {
    if (id === "article_1_abc123") {
      return {
        id: "article_1_abc123",
        titleZh: "测试文章",
        titleEn: "Test Article",
        contentZh: "这是测试内容",
        contentEn: "This is test content",
        summaryZh: "摘要",
        summaryEn: "Summary",
        author: "Test Author",
        category: "公司动态",
        published: true,
        coverImageUrl: null,
        createdAt: 1735689600000,
        updatedAt: 1735689600000,
      };
    }
    return undefined;
  }),
  createArticle: vi.fn().mockResolvedValue("article_3_ghi789"),
  updateArticle: vi.fn().mockResolvedValue(undefined),
  deleteArticle: vi.fn().mockResolvedValue(undefined),
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
      loginMethod: "manus",
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

describe("news.list (public)", () => {
  it("returns published articles for public users", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const articles = await caller.news.list();
    expect(articles).toHaveLength(1);
    expect(articles[0].titleZh).toBe("测试文章");
    expect(articles[0].published).toBe(true);
  });
});

describe("news.getById (public)", () => {
  it("returns a published article by string ID", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const article = await caller.news.getById({ id: "article_1_abc123" });
    expect(article.id).toBe("article_1_abc123");
    expect(article.titleZh).toBe("测试文章");
  });

  it("throws NOT_FOUND for unknown article", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(caller.news.getById({ id: "nonexistent" })).rejects.toThrow();
  });
});

describe("news.adminList (admin only)", () => {
  it("returns all articles including drafts for admin", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const articles = await caller.news.adminList();
    expect(articles).toHaveLength(2);
    const published = articles.filter((a) => a.published);
    const drafts = articles.filter((a) => !a.published);
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
  it("creates an article with auto-translation for admin", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const result = await caller.news.create({
      titleZh: "新文章标题",
      contentZh: "新文章内容",
      summaryZh: "新文章摘要",
      author: "IMOC编辑部",
      category: "公司动态",
      published: false,
    });
    expect(result.success).toBe(true);
  });

  it("throws FORBIDDEN for regular users", async () => {
    const caller = appRouter.createCaller(createUserContext());
    await expect(
      caller.news.create({
        titleZh: "新文章",
        contentZh: "内容",
        published: false,
      })
    ).rejects.toThrow();
  });
});

describe("news.togglePublish (admin only)", () => {
  it("toggles publish status for admin", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const result = await caller.news.togglePublish({ id: "article_1_abc123", published: false });
    expect(result.success).toBe(true);
  });
});

describe("news.delete (admin only)", () => {
  it("deletes an article for admin", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const result = await caller.news.delete({ id: "article_1_abc123" });
    expect(result.success).toBe(true);
  });

  it("throws FORBIDDEN for regular users", async () => {
    const caller = appRouter.createCaller(createUserContext());
    await expect(caller.news.delete({ id: "article_1_abc123" })).rejects.toThrow();
  });
});
