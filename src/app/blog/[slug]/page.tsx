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
  return (
    <article>
      <h1>{post.title}</h1>
      <div className="meta">{post.date}</div>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
