import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import BlogCTA from "@/components/BlogCTA";

export const metadata = {
  title: "CMMS Data Quality Blog | AssetStage Insights",
  description: "Expert insights on CMMS implementation, data quality, RDS-PS, RDS-PP, ISO 14224, KKS, SFI standards, and industrial asset management best practices.",
  openGraph: {
    title: "CMMS Data Quality Blog | AssetStage Insights",
    description: "Expert insights on CMMS implementation, data quality, and engineering standards.",
    url: "https://assetstage.io/blog",
    siteName: "AssetStage",
    type: "website",
    images: [
      {
        url: "https://assetstage.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "AssetStage Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CMMS Data Quality Blog | AssetStage Insights",
    description: "Expert insights on CMMS implementation and data quality.",
    images: ["https://assetstage.io/og-image.png"],
  },
  alternates: {
    canonical: "https://assetstage.io/blog",
  },
};

export default async function BlogIndex() {
  const posts = await getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <main className="blog-page">
      <div className="blog-header">
        <Link href="/" className="blog-home-link">← Back to Home</Link>
        <h1 className="blog-title">AssetStage Blog</h1>
        <p className="blog-subtitle">CMMS implementation, data quality, and engineering standards</p>
      </div>
      
      {/* Featured article */}
      {featured && (
        <div className="featured-post-container">
          <div className="featured-label">
            <span className="featured-icon">⭐</span>
            Featured Article
          </div>
          <Link href={`/blog/${featured.slug}`} className="blog-list-item">
            <article className="featured-card">
              <div className="featured-content">
                <div className="featured-meta">
                  <span className="featured-category">
                    {featured.title.includes('CMMS') ? '📊 CMMS' : 
                     featured.title.includes('Maritime') || featured.title.includes('Ship') || featured.title.includes('SFI') ? '⚓ Maritime' : 
                     featured.title.includes('Data') ? '🔧 Data Quality' : 
                     featured.title.includes('Maximo') || featured.title.includes('SAP') ? '⚙️ Software' :
                     '📋 Standards'}
                  </span>
                  <div className="featured-date-reading">
                    <span className="featured-date">{new Date(featured.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</span>
                    {featured.readingTime && <span className="featured-reading-time">• {featured.readingTime}</span>}
                  </div>
                </div>
                <h2 className="featured-title">{featured.title}</h2>
                {featured.description && (
                  <p className="featured-description">{featured.description}</p>
                )}
                <div className="featured-cta">
                  <span className="featured-read-more">Read full article →</span>
                </div>
              </div>
              <div className="featured-visual">
                <div className="featured-badge">01</div>
              </div>
            </article>
          </Link>
        </div>
      )}

      <div className="container">
        <div className="blog-grid">
          {rest.map((p, index) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-list-item">
              <article className="blog-card">
                <div className="blog-image">
                  <div className="blog-category">
                    {p.title.includes('CMMS') ? '📊 CMMS' : 
                     p.title.includes('Maritime') || p.title.includes('Ship') || p.title.includes('SFI') ? '⚓ Maritime' : 
                     p.title.includes('Data') ? '🔧 Data Quality' : 
                     p.title.includes('Maximo') || p.title.includes('SAP') ? '⚙️ Software' :
                     '📋 Standards'}
                  </div>
                  <div className="blog-number">{String(index + 2).padStart(2, '0')}</div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{new Date(p.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</span>
                    {p.readingTime && <span className="blog-reading-time">• {p.readingTime}</span>}
                  </div>
                  <h3 className="blog-card-title">{p.title}</h3>
                  {p.description && <p className="blog-excerpt">{p.description}</p>}
                  <div className="blog-footer">
                    <span className="read-more">Read full article →</span>
                  </div>
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
    </main>
  );
}

