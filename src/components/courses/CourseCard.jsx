import { Star, Users } from "lucide-react";

export default function CourseCard({ course, accentColor }) {
  return (
    <div className="group rounded-2xl border border-(--border) bg-(--background-card) p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
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
        <button
          type="button"
          className="rounded-full px-4 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: accentColor }}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}