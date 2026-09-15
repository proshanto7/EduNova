import { notFound } from "next/navigation";
import { BLOG_POSTS_DATA, getPostBySlug } from "@/data/blog";
import BlogPostContent from "@/components/blog/BlogPostContent";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!SLUG_PATTERN.test(slug)) return {};

  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  if (!SLUG_PATTERN.test(slug)) {
    notFound();
  }

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-background">
      <BlogPostContent post={post} />
    </main>
  );
}