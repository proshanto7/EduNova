import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";

export default function BlogCard({ post, featured = false }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block cursor-pointer overflow-hidden rounded-2xl border border-(--border) bg-(--background-card) transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          featured ? "h-64 lg:h-80" : "h-48"
        }`}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-(--accent) px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-(--accent-text)">
          {post.category}
        </span>
      </div>

      <div className="p-5">
        <h3
          className={`font-bold text-(--text-primary) ${
            featured ? "text-xl" : "text-base"
          }`}
        >
          {post.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-(--text-secondary)">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-4 border-t border-(--border) pt-4 text-xs text-(--text-muted)">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}