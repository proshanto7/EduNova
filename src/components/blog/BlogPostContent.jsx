import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumb";
import BlogCard from "@/components/blog/BlogCard";
import { getRelatedPosts } from "@/data/blog";

export default function BlogPostContent({ post }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const relatedPosts = getRelatedPosts(post.slug, post.category);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-(--stat-icon-bg) px-3 py-1 text-xs font-semibold uppercase tracking-wide text-(--stat-icon-color)">
            {post.category}
          </span>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-(--text-primary) md:text-4xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-(--text-muted)">
            <span className="flex items-center gap-1.5">
              <User size={15} />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={15} />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={15} />
              {post.readTime}
            </span>
          </div>

          <div className="relative mt-8 h-72 w-full overflow-hidden rounded-2xl sm:h-96">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-8 leading-relaxed text-(--text-secondary)">
            <p className="text-base">{post.content}</p>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="border-t border-(--border) bg-(--background-card) px-6 py-14">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 text-2xl font-bold text-(--text-primary)">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}