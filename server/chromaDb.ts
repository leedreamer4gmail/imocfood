/**
 * Chroma Cloud v2 REST API helper for news posts.
 * Simplified: each post has only a content field (Chinese) + translated English content.
 * Chroma v2 requires embeddings - we use a dummy single-dimension embedding [0.0].
 */

const CHROMA_API_KEY = process.env.CHROMA_API_KEY ?? "";
const CHROMA_TENANT = process.env.CHROMA_TENANT ?? "";
const CHROMA_DATABASE = "imocfood";
const COLLECTION_NAME = "news_posts";
const BASE_URL = "https://api.trychroma.com/api/v2";

// Chroma v2 requires embeddings. We use a dummy 1-dim embedding since we don't need vector search.
const DUMMY_EMBEDDING = [0.0];

function headers() {
  return {
    "x-chroma-token": CHROMA_API_KEY,
    "Content-Type": "application/json",
  };
}

function collectionBase() {
  return `${BASE_URL}/tenants/${CHROMA_TENANT}/databases/${CHROMA_DATABASE}/collections`;
}

/** Get or create the news_posts collection, return its ID */
async function getCollectionId(): Promise<string> {
  const listRes = await fetch(collectionBase(), { headers: headers() });
  if (!listRes.ok) {
    const err = await listRes.text();
    throw new Error(`Chroma list collections failed: ${listRes.status} ${err}`);
  }
  const collections: Array<{ id: string; name: string }> = await listRes.json();
  const existing = collections.find((c) => c.name === COLLECTION_NAME);
  if (existing) return existing.id;

  // Create collection with dummy embedding function config
  const createRes = await fetch(collectionBase(), {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      name: COLLECTION_NAME,
      get_or_create: true,
      configuration: {
        hnsw: { space: "cosine" },
      },
    }),
  });
  if (!createRes.ok) {
    const err = await createRes.text();
    throw new Error(`Chroma create collection failed: ${createRes.status} ${err}`);
  }
  const created: { id: string } = await createRes.json();
  return created.id;
}

export type NewsPost = {
  id: string;
  contentZh: string;
  contentEn: string | null;
  published: boolean;
  createdAt: number; // Unix timestamp ms
};

type ChromaMeta = {
  contentZh: string;
  contentEn: string;
  published: boolean;
  createdAt: number;
};

function metaToPost(id: string, meta: ChromaMeta): NewsPost {
  return {
    id,
    contentZh: meta.contentZh ?? "",
    contentEn: meta.contentEn || null,
    published: Boolean(meta.published),
    createdAt: meta.createdAt ?? Date.now(),
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

export async function getPublishedPosts(): Promise<NewsPost[]> {
  const result = await getAllRecords({ published: { $eq: true } });
  const posts: NewsPost[] = [];
  for (let i = 0; i < result.ids.length; i++) {
    const id = result.ids[i];
    const meta = result.metadatas?.[i];
    if (id && meta) posts.push(metaToPost(id, meta));
  }
  return posts.sort((a, b) => b.createdAt - a.createdAt);
}

export async function getAllPosts(): Promise<NewsPost[]> {
  const result = await getAllRecords();
  const posts: NewsPost[] = [];
  for (let i = 0; i < result.ids.length; i++) {
    const id = result.ids[i];
    const meta = result.metadatas?.[i];
    if (id && meta) posts.push(metaToPost(id, meta));
  }
  return posts.sort((a, b) => b.createdAt - a.createdAt);
}

export async function getPostById(id: string): Promise<NewsPost | undefined> {
  const colId = await getCollectionId();
  const res = await fetch(`${collectionBase()}/${colId}/get`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ ids: [id], include: ["metadatas"] }),
  });
  if (!res.ok) return undefined;
  const result: ChromaGetResult = await res.json();
  if (!result.ids[0] || !result.metadatas?.[0]) return undefined;
  return metaToPost(result.ids[0], result.metadatas[0]);
}

export async function createPost(data: {
  contentZh: string;
  contentEn?: string | null;
  published?: boolean;
}): Promise<string> {
  const colId = await getCollectionId();
  const id = `post_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const now = Date.now();
  const meta: ChromaMeta = {
    contentZh: data.contentZh,
    contentEn: data.contentEn ?? "",
    published: data.published ?? true,
    createdAt: now,
  };

  const res = await fetch(`${collectionBase()}/${colId}/add`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      ids: [id],
      embeddings: [DUMMY_EMBEDDING],
      documents: [data.contentZh.slice(0, 200)],
      metadatas: [meta],
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Chroma add failed: ${res.status} ${err}`);
  }
  return id;
}

export async function updatePost(
  id: string,
  data: Partial<Omit<NewsPost, "id" | "createdAt">>
): Promise<void> {
  const existing = await getPostById(id);
  if (!existing) throw new Error(`Post ${id} not found`);
  const colId = await getCollectionId();

  const meta: ChromaMeta = {
    contentZh: data.contentZh ?? existing.contentZh,
    contentEn: data.contentEn ?? existing.contentEn ?? "",
    published: data.published ?? existing.published,
    createdAt: existing.createdAt,
  };

  const res = await fetch(`${collectionBase()}/${colId}/update`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      ids: [id],
      embeddings: [DUMMY_EMBEDDING],
      documents: [meta.contentZh.slice(0, 200)],
      metadatas: [meta],
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Chroma update failed: ${res.status} ${err}`);
  }
}

export async function deletePost(id: string): Promise<void> {
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
