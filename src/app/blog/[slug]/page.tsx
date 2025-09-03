import { getAllPosts, getPost } from "@/lib/posts";

type Params = { slug: string };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const post = await getPost(params.slug);
  return {
    title: `${post.title} — AssetStage`,
    description: post.description || "",
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const post = await getPost(params.slug);
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description || "",
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "AssetStage"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AssetStage",
      "url": "https://assetstage.io"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://assetstage.io/blog/${params.slug}`
    },
    "url": `https://assetstage.io/blog/${params.slug}`,
    "articleSection": "Industrial Engineering"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="blog-post-container">
        <article className="blog-post">
          <div className="blog-post-header">
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <span className="blog-post-date">{post.date}</span>
            </div>
            {post.description && (
              <p className="blog-post-description">{post.description}</p>
            )}
          </div>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
        <div className="blog-post-footer">
          <a href="/blog" className="back-to-blog">← Back to Blog</a>
        </div>
      </div>
    </>
  );
}
