import Link from 'next/link';

export interface RelatedPost {
  title: string;
  url: string;
  description?: string;
  category?: string;
}

interface RelatedContentProps {
  posts: RelatedPost[];
  title?: string;
}

export default function RelatedContent({
  posts,
  title = "Related Articles"
}: RelatedContentProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <aside className="related-content">
      <h3 className="related-content-title">{title}</h3>
      <div className="related-content-grid">
        {posts.map((post, index) => (
          <Link
            key={index}
            href={post.url}
            className="related-content-card"
          >
            {post.category && (
              <span className="related-content-category">{post.category}</span>
            )}
            <h4 className="related-content-card-title">{post.title}</h4>
            {post.description && (
              <p className="related-content-description">{post.description}</p>
            )}
            <span className="related-content-link">Read more →</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
