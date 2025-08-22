import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = { title: "Blog — AssetStage" };

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <section>
      <h1>Blog</h1>
      <div className="post-list">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`}>
            <div>
              <h3>{p.title}</h3>
              <div style={{ color: "#6b7280", fontSize: 14 }}>{p.date}</div>
              {p.description && <p>{p.description}</p>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
