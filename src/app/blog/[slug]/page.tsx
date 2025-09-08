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
    <div className="blog-article">
      <div className="blog-article-header">
        <Link href="/blog" className="back-link">← Back to Blog</Link>
        <h1 className="blog-article-title">{post!.title}</h1>
        {post!.date && <p className="blog-article-meta">{post!.date}</p>}
      </div>
      <article
        className="blog-article-content"
        dangerouslySetInnerHTML={{ __html: post!.contentHtml }}
      />
    </div>
  );
}

