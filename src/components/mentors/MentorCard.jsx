import Link from "next/link";
import Image from "next/image";
import { Star, Users } from "lucide-react";

export default function MentorCard({ mentor }) {
  return (
    <Link
      href={`/mentors/${mentor.slug}`}
      className="group block cursor-pointer overflow-hidden rounded-2xl border border-(--border) bg-(--background-card) transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)]"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={mentor.image}
          alt={mentor.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <span className="inline-block rounded-full bg-(--stat-icon-bg) px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-(--stat-icon-color)">
          {mentor.expertise}
        </span>

        <h3 className="mt-3 text-base font-bold text-(--text-primary)">
          {mentor.name}
        </h3>
        <p className="mt-0.5 text-sm text-(--text-secondary)">
          {mentor.title}
        </p>

        <div className="mt-4 flex items-center gap-4 border-t border-(--border) pt-4 text-xs text-(--text-muted)">
          <span className="flex items-center gap-1">
            <Star size={14} className="fill-current text-amber-400" />
            {mentor.rating}
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} />
            {mentor.students} students
          </span>
        </div>
      </div>
    </Link>
  );
}