/**
 * Chroma Cloud v2 REST API helper for news articles.
 * Uses Chroma's metadata storage (no embeddings needed) to store and retrieve articles.
 * This works with Vercel's free tier via HTTP API calls to api.trychroma.com
 */

const CHROMA_API_KEY = process.env.CHROMA_API_KEY ?? "";
const CHROMA_TENANT = process.env.CHROMA_TENANT ?? "";
const CHROMA_DATABASE = "imocfood";
const COLLECTION_NAME = "news_articles";
const BASE_URL = "https://api.trychroma.com/api/v2";

function headers() {
  return {
    "x-chroma-token": CHROMA_API_KEY,
    "Content-Type": "application/json",
  };
}

function collectionBase() {
  return `${BASE_URL}/tenants/${CHROMA_TENANT}/databases/${CHROMA_DATABASE}/collections`;
}

/** Get or create the news_articles collection, return its ID */
async function getCollectionId(): Promise<string> {
  // Try to get existing collection
  const listRes = await fetch(collectionBase(), { headers: headers() });
  if (!listRes.ok) {
    const err = await listRes.text();
    throw new Error(`Chroma list collections failed: ${listRes.status} ${err}`);
  }
  const collections: Array<{ id: string; name: string }> = await listRes.json();
  const existing = collections.find((c) => c.name === COLLECTION_NAME);
  if (existing) return existing.id;

  // Create collection
  const createRes = await fetch(collectionBase(), {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ name: COLLECTION_NAME, get_or_create: true }),
  });
  if (!createRes.ok) {
    const err = await createRes.text();
    throw new Error(`Chroma create collection failed: ${createRes.status} ${err}`);
  }
  const created: { id: string } = await createRes.json();
  return created.id;
}

export type NewsArticle = {
  id: string;
  titleZh: string;
  titleEn: string | null;
  contentZh: string;
  contentEn: string | null;
  summaryZh: string | null;
  summaryEn: string | null;
  author: string | null;
  category: string | null;
  published: boolean;
  coverImageUrl: string | null;
  createdAt: number; // Unix timestamp ms
  updatedAt: number; // Unix timestamp ms
};

type ChromaMeta = {
  titleZh: string;
  titleEn: string;
  contentZh: string;
  contentEn: string;
  summaryZh: string;
  summaryEn: string;
  author: string;
  category: string;
  published: boolean;
  coverImageUrl: string;
  createdAt: number;
  updatedAt: number;
};

function metaToArticle(id: string, meta: ChromaMeta): NewsArticle {
  return {
    id,
    titleZh: meta.titleZh ?? "",
    titleEn: meta.titleEn || null,
    contentZh: meta.contentZh ?? "",
    contentEn: meta.contentEn || null,
    summaryZh: meta.summaryZh || null,
    summaryEn: meta.summaryEn || null,
    author: meta.author || null,
    category: meta.category || null,
    published: Boolean(meta.published),
    coverImageUrl: meta.coverImageUrl || null,
    createdAt: meta.createdAt ?? Date.now(),
    updatedAt: meta.updatedAt ?? Date.now(),
  };
}

type ChromaGetResult = {
  ids: string[];
  metadatas: (ChromaMeta | null)[];
};

async function getAllRecords(where?: Record<string, unknown>): Promise<ChromaGetResult> {
  const colId = await getCollectionId();
  const body: Record<string, unknown> = {
    include: ["metadatas"],
    limit: 300,
  };
  if (where) body.where = where;

  const res = await fetch(`${collectionBase()}/${colId}/get`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Chroma get failed: ${res.status} ${err}`);
  }
  return res.json();
}

export async function getPublishedArticles(): Promise<NewsArticle[]> {
  const result = await getAllRecords({ published: { $eq: true } });
  const articles: NewsArticle[] = [];
  for (let i = 0; i < result.ids.length; i++) {
    const id = result.ids[i];
    const meta = result.metadatas?.[i];
    if (id && meta) articles.push(metaToArticle(id, meta));
  }
  return articles.sort((a, b) => b.createdAt - a.createdAt);
}

export async function getAllArticles(): Promise<NewsArticle[]> {
  const result = await getAllRecords();
  const articles: NewsArticle[] = [];
  for (let i = 0; i < result.ids.length; i++) {
    const id = result.ids[i];
    const meta = result.metadatas?.[i];
    if (id && meta) articles.push(metaToArticle(id, meta));
  }
  return articles.sort((a, b) => b.createdAt - a.createdAt);
}

export async function getArticleById(id: string): Promise<NewsArticle | undefined> {
  const colId = await getCollectionId();
  const res = await fetch(`${collectionBase()}/${colId}/get`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ ids: [id], include: ["metadatas"] }),
  });
  if (!res.ok) return undefined;
  const result: ChromaGetResult = await res.json();
  if (!result.ids[0] || !result.metadatas?.[0]) return undefined;
  return metaToArticle(result.ids[0], result.metadatas[0]);
}

export async function createArticle(
  data: Omit<NewsArticle, "id" | "createdAt" | "updatedAt">
): Promise<string> {
  const colId = await getCollectionId();
  const id = `article_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const now = Date.now();
  const meta: ChromaMeta = {
    titleZh: data.titleZh,
    titleEn: data.titleEn ?? "",
    contentZh: data.contentZh,
    contentEn: data.contentEn ?? "",
    summaryZh: data.summaryZh ?? "",
    summaryEn: data.summaryEn ?? "",
    author: data.author ?? "",
    category: data.category ?? "",
    published: data.published,
    coverImageUrl: data.coverImageUrl ?? "",
    createdAt: now,
    updatedAt: now,
  };

  const res = await fetch(`${collectionBase()}/${colId}/add`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      ids: [id],
      documents: [data.titleZh],
      metadatas: [meta],
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Chroma add failed: ${res.status} ${err}`);
  }
  return id;
}

export async function updateArticle(
  id: string,
  data: Partial<Omit<NewsArticle, "id" | "createdAt">>
): Promise<void> {
  const existing = await getArticleById(id);
  if (!existing) throw new Error(`Article ${id} not found`);
  const colId = await getCollectionId();

  const meta: ChromaMeta = {
    titleZh: data.titleZh ?? existing.titleZh,
    titleEn: data.titleEn ?? existing.titleEn ?? "",
    contentZh: data.contentZh ?? existing.contentZh,
    contentEn: data.contentEn ?? existing.contentEn ?? "",
    summaryZh: data.summaryZh ?? existing.summaryZh ?? "",
    summaryEn: data.summaryEn ?? existing.summaryEn ?? "",
    author: data.author ?? existing.author ?? "",
    category: data.category ?? existing.category ?? "",
    published: data.published ?? existing.published,
    coverImageUrl: data.coverImageUrl ?? existing.coverImageUrl ?? "",
    createdAt: existing.createdAt,
    updatedAt: Date.now(),
  };

  const res = await fetch(`${collectionBase()}/${colId}/update`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      ids: [id],
      documents: [meta.titleZh],
      metadatas: [meta],
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Chroma update failed: ${res.status} ${err}`);
  }
}

export async function deleteArticle(id: string): Promise<void> {
  const colId = await getCollectionId();
  const res = await fetch(`${collectionBase()}/${colId}/delete`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ ids: [id] }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Chroma delete failed: ${res.status} ${err}`);
  }
}
