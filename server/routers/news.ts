import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  getPublishedPosts,
  updatePost,
} from "../chromaDb";
import { invokeLLM } from "../_core/llm";
import { adminProcedure, publicProcedure, router } from "../_core/trpc";

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
  /** Public: list all published posts */
  list: publicProcedure.query(async () => {
    return getPublishedPosts();
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

  /** Admin: delete a post */
  delete: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      await deletePost(input.id);
      return { success: true };
    }),
});
