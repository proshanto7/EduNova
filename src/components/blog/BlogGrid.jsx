import { BLOG_POSTS_DATA } from "@/data/blog";
import BlogCard from "@/components/blog/BlogCard";

export default function BlogGrid() {
  const [firstPost, ...restPosts] = BLOG_POSTS_DATA;

  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <BlogCard post={firstPost} featured />

          {restPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}