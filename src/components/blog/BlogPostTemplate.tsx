/**
 * BlogPostTemplate - SEO-optimized blog post structure
 *
 * This template enforces SEO best practices for all blog posts:
 * - Single H1 (post title)
 * - Meta description (via generateMetadata in page.tsx)
 * - Article schema (BlogPosting JSON-LD)
 * - Author info section
 * - Published/updated dates
 * - RelatedContent component at bottom
 * - ArticleCTA component slot
 * - Breadcrumbs (Blog > Post Title)
 * - Internal links section
 *
 * USAGE:
 *
 * In your blog post page (app/blog/[slug]/page.tsx):
 *
 * ```tsx
 * import BlogPostTemplate from '@/components/blog/BlogPostTemplate';
 * import { getPost, getAllPosts } from '@/lib/posts';
 *
 * // Required: Generate static params for all posts
 * export async function generateStaticParams() {
 *   const posts = await getAllPosts();
 *   return posts.map((p) => ({ slug: p.slug }));
 * }
 *
 * // Required: Generate metadata for SEO
 * export async function generateMetadata({ params }: Props) {
 *   const { slug } = await params;
 *   const post = await getPost(slug);
 *   return {
 *     title: `${post.title} - AssetStage Blog`,
 *     description: post.description,
 *     openGraph: { ... },
 *     twitter: { ... },
 *     alternates: { canonical: `https://assetstage.io/blog/${slug}` },
 *   };
 * }
 *
 * export default async function BlogPostPage({ params }: Props) {
 *   const { slug } = await params;
 *   const post = await getPost(slug);
 *
 *   const relatedPosts = [
 *     { title: 'Related Post 1', url: '/blog/related-1', description: '...' },
 *     { title: 'Related Post 2', url: '/blog/related-2', description: '...' },
 *   ];
 *
 *   return (
 *     <BlogPostTemplate
 *       title={post.title}
 *       description={post.description}
 *       content={post.contentHtml}
 *       datePublished={post.date}
 *       dateModified={post.dateModified}
 *       slug={slug}
 *       category={post.category}
 *       readingTime={post.readingTime}
 *       relatedPosts={relatedPosts}
 *       showMidArticleCTA={true}
 *     />
 *   );
 * }
 * ```
 *
 * INTERNAL LINKING GUIDELINES:
 *
 * 1. Each blog post should link to 2-3 related articles
 * 2. Include at least one link to a product/service page where relevant
 * 3. Use descriptive anchor text (not "click here")
 * 4. The RelatedContent component automatically renders links at the bottom
 * 5. Use ArticleCTA mid-article for conversion opportunities
 *
 * CONTENT STRUCTURE:
 *
 * Blog posts should follow this structure:
 * - H1: Post title (rendered by template)
 * - Introduction paragraph
 * - H2: First major section
 *   - H3: Subsections as needed
 *   - [ArticleCTA after 2-3 H2 sections]
 * - H2: Additional sections
 * - Conclusion
 * - [RelatedContent - auto-rendered]
 * - [Final CTA - auto-rendered]
 */

import Link from 'next/link';
import JsonLd, { generateArticleSchema, generateBreadcrumbSchema } from '@/components/seo/JsonLd';
import RelatedContent, { RelatedPost } from './RelatedContent';
import ArticleCTA from './ArticleCTA';
import StickyCTA from '@/components/StickyCTA';

interface BlogPostTemplateProps {
  title: string;
  description?: string;
  content: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
  category?: string;
  readingTime?: number;
  author?: {
    name: string;
    role?: string;
  };
  relatedPosts?: RelatedPost[];
  showMidArticleCTA?: boolean;
  midArticleCTAPosition?: 'early' | 'middle' | 'late';
}

export default function BlogPostTemplate({
  title,
  description,
  content,
  datePublished,
  dateModified,
  slug,
  category,
  readingTime,
  author = { name: 'AssetStage', role: 'CMMS Data Experts' },
  relatedPosts = [],
  showMidArticleCTA = true,
}: BlogPostTemplateProps) {
  const url = `https://assetstage.io/blog/${slug}`;

  // Generate structured data
  const articleSchema = generateArticleSchema({
    headline: title,
    description: description || title,
    datePublished,
    dateModified,
    url,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://assetstage.io' },
    { name: 'Blog', url: 'https://assetstage.io/blog' },
    { name: title },
  ]);

  // Format dates
  const publishedDate = new Date(datePublished).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const modifiedDate = dateModified
    ? new Date(dateModified).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  // Auto-categorize if not provided
  const displayCategory = category || (
    title.includes('CMMS') ? '📊 CMMS' :
    title.includes('Maritime') || title.includes('Ship') || title.includes('SFI') ? '⚓ Maritime' :
    title.includes('Data') ? '🔧 Data Quality' :
    title.includes('Maximo') || title.includes('SAP') ? '⚙️ Software' :
    '📋 Standards'
  );

  return (
    <>
      {/* Structured Data */}
      <JsonLd data={[articleSchema, breadcrumbSchema]} />

      <main className="blog-post-container">
        <article className="blog-post">
          {/* Breadcrumb Navigation */}
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <ol style={{
              display: 'flex',
              listStyle: 'none',
              padding: 0,
              margin: '0 0 20px 0',
              fontSize: '14px',
              color: 'var(--text-light)',
            }}>
              <li>
                <Link href="/" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>
                  Home
                </Link>
                <span style={{ margin: '0 8px' }}>/</span>
              </li>
              <li>
                <Link href="/blog" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>
                  Blog
                </Link>
                <span style={{ margin: '0 8px' }}>/</span>
              </li>
              <li style={{ color: 'var(--text-dark)' }}>
                {title.length > 50 ? `${title.substring(0, 50)}...` : title}
              </li>
            </ol>
          </nav>

          {/* Post Header */}
          <header className="blog-post-header">
            <nav className="blog-navigation">
              <Link href="/blog" className="back-to-blog">← Back to Blog</Link>
            </nav>

            <div className="blog-post-meta-top">
              <span className="blog-post-category">{displayCategory}</span>
              <span className="blog-post-date">{publishedDate}</span>
              {readingTime && (
                <span className="blog-post-reading-time">{readingTime} min read</span>
              )}
            </div>

            {/* H1 - Single heading for SEO */}
            <h1 className="blog-post-title">{title}</h1>

            {description && (
              <p className="blog-post-description">{description}</p>
            )}

            {/* Author Info */}
            <div className="blog-post-author" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '24px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-light)',
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'var(--primary-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '16px',
              }}>
                {author.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-dark)' }}>
                  {author.name}
                </div>
                {author.role && (
                  <div style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                    {author.role}
                  </div>
                )}
              </div>
            </div>

            <div className="blog-post-divider"></div>
          </header>

          {/* Post Content */}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Mid-Article CTA (optional) */}
          {showMidArticleCTA && (
            <ArticleCTA variant="default" />
          )}

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <RelatedContent posts={relatedPosts} />
          )}

          {/* Post Footer */}
          <footer className="blog-post-footer">
            <div className="blog-post-divider"></div>

            {/* Updated Date */}
            {modifiedDate && modifiedDate !== publishedDate && (
              <p style={{
                fontSize: '14px',
                color: 'var(--text-light)',
                marginBottom: '20px'
              }}>
                Last updated: {modifiedDate}
              </p>
            )}

            {/* Internal Links Section */}
            <div style={{
              background: 'var(--bg-light)',
              padding: '24px',
              borderRadius: '8px',
              marginBottom: '24px',
            }}>
              <h3 style={{
                fontSize: '18px',
                marginBottom: '16px',
                color: 'var(--text-dark)'
              }}>
                Explore More
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <li>
                  <Link href="/services" style={{
                    color: 'var(--accent-blue)',
                    textDecoration: 'none',
                    fontSize: '15px',
                  }}>
                    Our Services →
                  </Link>
                </li>
                <li>
                  <Link href="/resources" style={{
                    color: 'var(--accent-blue)',
                    textDecoration: 'none',
                    fontSize: '15px',
                  }}>
                    Free Resources →
                  </Link>
                </li>
                <li>
                  <Link href="/blog" style={{
                    color: 'var(--accent-blue)',
                    textDecoration: 'none',
                    fontSize: '15px',
                  }}>
                    More Articles →
                  </Link>
                </li>
              </ul>
            </div>

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
