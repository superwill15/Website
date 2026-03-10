import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/posts";
import StickyCTA from "@/components/StickyCTA";
import JsonLd, { generateArticleSchema } from "@/components/seo/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    return {
      title: `${post.title} - AssetStage Blog`,
      description: post.description || undefined,
      openGraph: {
        title: `${post.title} - AssetStage Blog`,
        description: post.description || post.title,
        url: `https://assetstage.io/blog/${slug}`,
        siteName: "AssetStage",
        type: "article",
        publishedTime: post.date,
        authors: ["AssetStage"],
        images: [
          {
            url: "https://assetstage.io/og-image.png",
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${post.title} - AssetStage Blog`,
        description: post.description || post.title,
        images: ["https://assetstage.io/og-image.png"],
      },
      alternates: {
        canonical: `https://assetstage.io/blog/${slug}`,
      },
    };
  } catch {
    return { title: "Post - AssetStage Blog" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `https://assetstage.io/blog/${slug}`,
  });

  return (
    <>
      <JsonLd data={articleSchema} />
      <main className="blog-post-container">
        <article className="blog-post">
          <header className="blog-post-header">
            <nav className="blog-navigation">
              <Link href="/blog" className="back-to-blog">← Back to Blog</Link>
            </nav>

            <div className="blog-post-meta-top">
              <span className="blog-post-category">
                {post!.title.includes('CMMS') ? '📊 CMMS' :
                 post!.title.includes('Maritime') || post!.title.includes('Ship') || post!.title.includes('SFI') ? '⚓ Maritime' :
                 post!.title.includes('Data') ? '🔧 Data Quality' :
                 post!.title.includes('Maximo') || post!.title.includes('SAP') ? '⚙️ Software' :
                 '📋 Standards'}
              </span>
              {post!.date && (
                <span className="blog-post-date">{new Date(post!.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}</span>
              )}
            </div>

            <h1 className="blog-post-title">{post!.title}</h1>

            {post!.description && (
              <p className="blog-post-description">{post!.description}</p>
            )}

            <div className="blog-post-divider"></div>
          </header>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post!.contentHtml }}
          />

          <footer className="blog-post-footer">
            <div className="blog-post-divider"></div>
            <nav className="blog-post-nav-bottom">
              <Link href="/blog" className="back-to-blog-bottom">← Back to all articles</Link>
            </nav>
          </footer>
        </article>
      </main>
      <StickyCTA />
    </>
  );
}
