import { boolean, int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * News articles table for CMS.
 * Admin writes in Chinese; English content is auto-translated via LLM.
 */
export const newsArticles = mysqlTable("news_articles", {
  id: int("id").autoincrement().primaryKey(),
  /** Chinese title */
  titleZh: varchar("titleZh", { length: 500 }).notNull(),
  /** English title (auto-translated) */
  titleEn: varchar("titleEn", { length: 500 }),
  /** Chinese content (Markdown supported) */
  contentZh: text("contentZh").notNull(),
  /** English content (auto-translated) */
  contentEn: text("contentEn"),
  /** Short summary in Chinese */
  summaryZh: varchar("summaryZh", { length: 500 }),
  /** Short summary in English */
  summaryEn: varchar("summaryEn", { length: 500 }),
  /** Author name */
  author: varchar("author", { length: 100 }),
  /** Whether the article is published (visible to public) */
  published: boolean("published").default(false).notNull(),
  /** Cover image URL */
  coverImageUrl: text("coverImageUrl"),
  /** Category tag */
  category: varchar("category", { length: 100 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type NewsArticle = typeof newsArticles.$inferSelect;
export type InsertNewsArticle = typeof newsArticles.$inferInsert;
