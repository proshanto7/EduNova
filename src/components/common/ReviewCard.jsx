import Image from "next/image";
import { Star } from "lucide-react";

export default function ReviewCard({ review }) {
  return (
    <article className="flex h-37.5 w-full flex-col items-center rounded-xl border border-white/10 bg-white/6 px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl backdrop-saturate-150">
      {/* Avatar */}
      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/15 bg-(--secondary-dark)">
        <Image
          src={review.avatar}
          alt={review.name}
          fill
          sizes="36px"
          className="object-cover"
        />
      </div>

      {/* Rating */}
      <div className="mt-1.5 flex gap-0.5">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star
            key={index}
            size={8}
            strokeWidth={1}
            fill="var(--accent)"
            color="var(--accent)"
          />
        ))}
      </div>

      {/* Review */}
      <p className="mt-2.5 line-clamp-3 max-w-57.5 text-center text-[8px] leading-[1.55] text-(--text-muted)">
        "{review.review}"
      </p>

      {/* User */}
      <div className="mt-auto text-center">
        <p className="text-[8px] font-medium text-(--secondary-light)">
          {review.name}
        </p>

        <p className="mt-0.5 text-[7px] text-(--text-placeholder)">
          {review.role}
        </p>
      </div>
    </article>
  );
}