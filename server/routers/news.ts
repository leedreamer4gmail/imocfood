import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  createArticle,
  deleteArticle,
  getAllArticles,
  getArticleById,
  getPublishedArticles,
  updateArticle,
} from "../chromaDb";
import { invokeLLM } from "../_core/llm";
import { adminProcedure, publicProcedure, router } from "../_core/trpc";

/**
 * Use LLM to translate Chinese text to English.
 * Returns the translated string, or null if translation fails.
 */
async function translateToEnglish(chineseText: string): Promise<string | null> {
  try {
    const response = await invokeLLM({
      messages: [
        {
          role: "system",
          content:
            "You are a professional translator specializing in Chinese to English translation for a food/meat products company. Translate the provided Chinese text to natural, professional English. Return ONLY the translated text, no explanations or extra content.",
        },
        {
          role: "user",
          content: chineseText,
        },
      ],
    });
    const content = response?.choices?.[0]?.message?.content;
    return typeof content === "string" ? content.trim() : null;
  } catch (err) {
    console.error("[Translation] Failed to translate:", err);
    return null;
  }
}

export const newsRouter = router({
  /** Public: list all published articles */
  list: publicProcedure.query(async () => {
    return getPublishedArticles();
  }),

  /** Public: get a single published article by string ID */
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const article = await getArticleById(input.id);
      if (!article || !article.published) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Article not found" });
      }
      return article;
    }),

  /** Admin: list all articles (including drafts) */
  adminList: adminProcedure.query(async () => {
    return getAllArticles();
  }),

  /** Admin: get any article by ID */
  adminGetById: adminProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const article = await getArticleById(input.id);
      if (!article) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Article not found" });
      }
      return article;
    }),

  /** Admin: create a new article with auto-translation */
  create: adminProcedure
    .input(
      z.object({
        titleZh: z.string().min(1, "Title is required"),
        contentZh: z.string().min(1, "Content is required"),
        summaryZh: z.string().optional(),
        author: z.string().optional(),
        category: z.string().optional(),
        coverImageUrl: z.string().url().optional().or(z.literal("")),
        published: z.boolean().default(false),
      })
    )
    .mutation(async ({ input }) => {
      // Auto-translate title and content
      const [titleEn, contentEn, summaryEn] = await Promise.all([
        translateToEnglish(input.titleZh),
        translateToEnglish(input.contentZh),
        input.summaryZh ? translateToEnglish(input.summaryZh) : Promise.resolve(null),
      ]);

      await createArticle({
        titleZh: input.titleZh,
        titleEn: titleEn,
        contentZh: input.contentZh,
        contentEn: contentEn,
        summaryZh: input.summaryZh ?? null,
        summaryEn: summaryEn,
        author: input.author ?? null,
        category: input.category ?? null,
        coverImageUrl: input.coverImageUrl || null,
        published: input.published,
      });

      return { success: true };
    }),

  /** Admin: update an article (re-translate if Chinese content changed) */
  update: adminProcedure
    .input(
      z.object({
        id: z.string(),
        titleZh: z.string().min(1).optional(),
        contentZh: z.string().min(1).optional(),
        summaryZh: z.string().optional(),
        author: z.string().optional(),
        category: z.string().optional(),
        coverImageUrl: z.string().url().optional().or(z.literal("")),
        published: z.boolean().optional(),
        retranslate: z.boolean().default(false),
      })
    )
    .mutation(async ({ input }) => {
      const { id, retranslate, ...fields } = input;

      const updateData: Record<string, unknown> = { ...fields };

      // Re-translate if Chinese content changed or retranslate flag set
      if (retranslate || fields.titleZh || fields.contentZh || fields.summaryZh) {
        const [titleEn, contentEn, summaryEn] = await Promise.all([
          fields.titleZh ? translateToEnglish(fields.titleZh) : Promise.resolve(undefined),
          fields.contentZh ? translateToEnglish(fields.contentZh) : Promise.resolve(undefined),
          fields.summaryZh ? translateToEnglish(fields.summaryZh) : Promise.resolve(undefined),
        ]);
        if (titleEn !== undefined) updateData.titleEn = titleEn;
        if (contentEn !== undefined) updateData.contentEn = contentEn;
        if (summaryEn !== undefined) updateData.summaryEn = summaryEn;
      }

      await updateArticle(id, updateData);
      return { success: true };
    }),

  /** Admin: toggle publish status */
  togglePublish: adminProcedure
    .input(z.object({ id: z.string(), published: z.boolean() }))
    .mutation(async ({ input }) => {
      await updateArticle(input.id, { published: input.published });
      return { success: true };
    }),

  /** Admin: delete an article */
  delete: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      await deleteArticle(input.id);
      return { success: true };
    }),
});
