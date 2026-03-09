import { z } from "zod";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPublishedPosts,
  updatePost,
} from "../chromaDb";
import { invokeLLM } from "../_core/llm";
import { adminProcedure, publicProcedure, router } from "../_core/trpc";

const PAGE_SIZE = 20;

/**
 * Use LLM to translate Chinese text to English.
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
  /** Public: list published posts with pagination (20 per page) */
  list: publicProcedure
    .input(
      z.object({
        page: z.number().int().min(1).default(1),
      }).default({ page: 1 })
    )
    .query(async ({ input }) => {
      const allPosts = await getPublishedPosts();
      const total = allPosts.length;
      const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
      const page = Math.min(input.page, totalPages);
      const start = (page - 1) * PAGE_SIZE;
      const posts = allPosts.slice(start, start + PAGE_SIZE);
      return { posts, total, totalPages, page };
    }),

  /** Admin: list all posts (including unpublished) */
  adminList: adminProcedure.query(async () => {
    return getAllPosts();
  }),

  /** Admin: create a new post with auto-translation */
  create: adminProcedure
    .input(
      z.object({
        contentZh: z.string().min(1, "内容不能为空"),
        published: z.boolean().default(true),
      })
    )
    .mutation(async ({ input }) => {
      // Auto-translate content to English
      const contentEn = await translateToEnglish(input.contentZh);

      await createPost({
        contentZh: input.contentZh,
        contentEn: contentEn,
        published: input.published,
      });

      return { success: true };
    }),

  /** Admin: toggle publish status */
  togglePublish: adminProcedure
    .input(z.object({ id: z.string(), published: z.boolean() }))
    .mutation(async ({ input }) => {
      await updatePost(input.id, { published: input.published });
      return { success: true };
    }),

  /** Admin: delete a single post */
  delete: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      await deletePost(input.id);
      return { success: true };
    }),

  /** Admin: bulk delete multiple posts */
  bulkDelete: adminProcedure
    .input(z.object({ ids: z.array(z.string()).min(1) }))
    .mutation(async ({ input }) => {
      await Promise.all(input.ids.map((id) => deletePost(id)));
      return { success: true, deleted: input.ids.length };
    }),
});
