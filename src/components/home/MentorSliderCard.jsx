import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

export default function MentorSliderCard({ mentor }) {
  return (
    <Link
      href={`/mentors/${mentor.slug}`}
      className="group flex h-72.5 w-full flex-col items-center rounded-xl border border-(--border) bg-(--background-card) px-5 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.15)]"
    >
      {/* Avatar */}
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-(--border)">
        <Image
          src={mentor.image}
          alt={mentor.name}
          fill
          sizes="80px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Expertise Badge */}
      <span className="mt-3 rounded-full bg-(--stat-icon-bg) px-3 py-1 text-[9px] font-semibold uppercase tracking-wide text-(--stat-icon-color)">
        {mentor.expertise}
      </span>

      {/* Name & Title */}
      <p className="mt-3 text-sm font-bold text-(--text-primary)">
        {mentor.name}
      </p>
      <p className="mt-0.5 text-xs text-(--text-secondary)">{mentor.title}</p>

      {/* Rating */}
      <div className="mt-2 flex items-center gap-1">
        <Star size={11} className="fill-current text-amber-400" />
        <span className="text-xs text-(--text-muted)">{mentor.rating}</span>
      </div>

      {/* Students */}
      <p className="mt-auto text-[10px] text-(--text-placeholder)">
        {mentor.students} students
      </p>
    </Link>
  );
}