import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  readingTime?: string;
};

// Simple in-memory cache
let postsCache: PostMeta[] | null = null;
let cacheTime = 0;
const CACHE_DURATION = 60000; // 1 minute in development, could be longer in production

export async function getAllPosts(): Promise<PostMeta[]> {
  // Check cache first
  const now = Date.now();
  if (postsCache && (now - cacheTime) < CACHE_DURATION) {
    return postsCache;
  }

  try {
    const files = await fs.readdir(postsDirectory);
    const mdFiles = files.filter((f) => f.endsWith(".md"));
    
    const posts = await Promise.all(
      mdFiles.map(async (file) => {
        const slug = file.replace(/\.md$/, "");
        const filePath = path.join(postsDirectory, file);
        const fileContents = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(fileContents);
        const words = content.trim().split(/\s+/).filter(Boolean).length;
        const minutes = Math.max(1, Math.ceil(words / 200));
        return {
          slug,
          title: data.title ?? slug,
          date: data.date ?? "",
          description: data.description ?? "",
          readingTime: `${minutes} min read`,
        } as PostMeta;
      })
    );
    
    // Sort newest first
    const sortedPosts = posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    
    // Update cache
    postsCache = sortedPosts;
    cacheTime = now;
    
    return sortedPosts;
  } catch (error) {
    console.error("Error loading posts:", error);
    return [];
  }
}

export async function getPost(slug: string) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const processed = await remark().use(html).process(content);
    const contentHtml = processed.toString();
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      description: data.description ?? "",
      contentHtml,
    };
  } catch (error) {
    throw new Error(`Post not found: ${slug}`);
  }
}
