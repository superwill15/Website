import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import BlogCTA from "@/components/BlogCTA";

export const metadata = { 
  title: "CMMS & Engineering Standards Blog - AssetStage", 
  description: "Expert insights on CMMS implementation, data quality, RDS-PS, RDS-PP, ISO 14224, KKS, SFI standards, and industrial asset management best practices."
};

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1 className="blog-title">AssetStage Blog</h1>
        <p className="blog-subtitle">Insights on CMMS, data quality, and engineering standards</p>
      </div>
      
      {/* Top CTA - Compact version */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        <BlogCTA variant="compact" />
      </div>

      <div className="blog-list">
        {posts.slice(0, 3).map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-list-item">
            <article className="blog-card-list">
              <div className="blog-card-header">
                <h3 className="blog-card-title">{p.title}</h3>
                <div className="blog-card-meta">
                  <span className="blog-card-date">{p.date}</span>
                </div>
              </div>
              {p.description && (
                <p className="blog-card-description">{p.description}</p>
              )}
              <span className="blog-read-more">Read article →</span>
            </article>
          </Link>
        ))}
        
        {/* Mid-list CTA - Full version */}
        {posts.length > 3 && <BlogCTA />}
        
        {posts.slice(3).map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-list-item">
            <article className="blog-card-list">
              <div className="blog-card-header">
                <h3 className="blog-card-title">{p.title}</h3>
                <div className="blog-card-meta">
                  <span className="blog-card-date">{p.date}</span>
                </div>
              </div>
              {p.description && (
                <p className="blog-card-description">{p.description}</p>
              )}
              <span className="blog-read-more">Read article →</span>
            </article>
          </Link>
        ))}
      </div>
      
      {/* Bottom CTA - Inline version */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        <BlogCTA variant="inline" />
      </div>
    </div>
  );
}
