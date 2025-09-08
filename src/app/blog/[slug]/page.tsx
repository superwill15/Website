import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  try {
    const post = await getPost(slug);
    return {
      title: `${post.title} - AssetStage Blog`,
      description: post.description || undefined,
    };
  } catch {
    return { title: "Post - AssetStage Blog" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = params;
  let post;
  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  return (
    <div className="blog-post-container">
      <article className="blog-post">
        <header className="blog-post-header">
          <Link href="/blog" className="back-to-blog">← Back to Blog</Link>
          <h1 className="blog-post-title">{post!.title}</h1>
          {post!.date && (
            <div className="blog-post-meta">
              <span className="blog-post-date">{post!.date}</span>
            </div>
          )}
          {post!.description && (
            <p className="blog-post-description">{post!.description}</p>
          )}
        </header>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post!.contentHtml }}
        />
      </article>
    </div>
  );
}
