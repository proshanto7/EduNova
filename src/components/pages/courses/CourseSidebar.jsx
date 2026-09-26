import { Clock, BarChart3, Users } from "lucide-react";
import { formatPrice, formatTotalDuration } from "@/lib/format";
import EnrollButton from "@/components/pages/courses/EnrollButton";

export default function CourseSidebar({ course, color }) {
  return (
    <div className="sticky top-24 rounded-2xl border border-(--border) bg-(--background-card) p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
      <p className="text-3xl font-bold" style={{ color }}>
        {formatPrice(course)}
      </p>
      {course.discountPrice != null && !course.isFree && (
        <p className="mt-1 text-sm text-(--text-muted) line-through">
          TK.{course.price}
        </p>
      )}

      <EnrollButton courseId={course.id} color={color} />

      <div className="mt-6 space-y-3 border-t border-(--border) pt-6 text-sm text-(--text-secondary)">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-(--text-muted)" />
          {course.totalDuration
            ? formatTotalDuration(course.totalDuration * 60)
            : "Lifetime access"}
        </div>
        <div className="flex items-center gap-2">
          <BarChart3 size={16} className="text-(--text-muted)" />
          {course.level
            ? `${course.level[0].toUpperCase()}${course.level.slice(1)} level`
            : "All skill levels"}
        </div>
        <div className="flex items-center gap-2">
          <Users size={16} className="text-(--text-muted)" />
          {course.students.toLocaleString("en-US")} students enrolled
        </div>
      </div>
    </div>
  );
}