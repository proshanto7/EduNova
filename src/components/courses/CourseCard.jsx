import Link from "next/link";
import Image from "next/image";
import { Star, Users } from "lucide-react";

export default function CourseCard({ course, accentColor }) {
  return (
   <Link
  href={`/course/${course.slug}`}
  className="group block cursor-pointer overflow-hidden rounded-2xl border border-(--border) bg-(--background-card) transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
>
      {/* Thumbnail */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-bold text-(--text-primary)">
          {course.title}
        </h3>
        <p className="mt-1 text-sm text-(--text-secondary)">
          By {course.instructor}
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs text-(--text-muted)">
          <span className="flex items-center gap-1">
            <Star size={14} className="fill-current text-amber-400" />
            {course.rating}
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} />
            {course.students}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-(--border) pt-4">
          <span className="text-lg font-bold" style={{ color: accentColor }}>
            {course.price}
          </span>
          <span
            className="rounded-full px-4 py-1.5 text-xs font-semibold text-white transition-opacity group-hover:opacity-90"
            style={{ backgroundColor: accentColor }}
          >
            Enroll Now
          </span>
        </div>
      </div>
    </Link>
  );
}