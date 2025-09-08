import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import BlogCTA from "@/components/BlogCTA";

export const metadata = { 
  title: "CMMS & Engineering Standards Blog - AssetStage", 
  description: "Expert insights on CMMS implementation, data quality, RDS-PS, RDS-PP, ISO 14224, KKS, SFI standards, and industrial asset management best practices."
};

export default async function BlogIndex() {
  const posts = await getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1 className="blog-title">AssetStage Blog</h1>
        <p className="blog-subtitle">CMMS implementation, data quality, and engineering standards</p>
      </div>
      
      {/* Featured article */}
      {featured && (
        <div style={{ maxWidth: '1000px', margin: '0 auto 40px', padding: '0 20px' }}>
          <Link href={`/blog/${featured.slug}`} className="blog-list-item">
            <article className="blog-card-list" style={{ padding: 36 }}>
              <div className="blog-card-header">
                <h3 className="blog-card-title" style={{ fontSize: 28 }}>{featured.title}</h3>
                <div className="blog-card-meta">
                  <span className="blog-card-date">{featured.date}</span>
                  {featured.readingTime && <span className="blog-card-date">{featured.readingTime}</span>}
                </div>
              </div>
              {featured.description && (
                <p className="blog-card-description">{featured.description}</p>
              )}
              <span className="blog-read-more">Read article →</span>
            </article>
          </Link>
        </div>
      )}

      <div className="container" style={{ marginTop: 10 }}>
        <div className="blog-grid">
          {rest.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-list-item">
              <article className="blog-card">
                <div className="blog-image">Article</div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>{p.date}</span>
                    {p.readingTime && <span>{p.readingTime}</span>}
                  </div>
                  <h3>{p.title}</h3>
                  {p.description && <p>{p.description}</p>}
                  <span className="read-more">Read article →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div style={{ maxWidth: '800px', margin: '50px auto', padding: '0 20px' }}>
        <BlogCTA variant="inline" />
      </div>
    </div>
  );
}

