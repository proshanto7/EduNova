import Image from "next/image";
import { Star, Users, Globe } from "lucide-react";

export default function CourseHero({ course, image, color }) {
  return (
    <>
      <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-(--background-input) sm:h-80">
        {image ? (
          <Image
            src={image}
            alt={course.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-(--text-muted)">
            No image
          </div>
        )}
      </div>

      <h1 className="mt-6 text-2xl font-bold text-(--text-primary) md:text-3xl">
        {course.title}
      </h1>

      {course.instructor && (
        <p className="mt-2 text-sm text-(--text-secondary)">
          By{" "}
          <span className="font-semibold text-(--text-primary)">
            {course.instructor}
          </span>
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-(--text-muted)">
        <span className="flex items-center gap-1.5">
          <Star size={16} className="fill-current text-amber-400" />
          {course.rating ? course.rating.toFixed(1) : "New"} Rating
        </span>
        <span className="flex items-center gap-1.5">
          <Users size={16} />
          {course.students.toLocaleString("en-US")} Students
        </span>
        {course.language && (
          <span className="flex items-center gap-1.5">
            <Globe size={16} />
            {course.language}
          </span>
        )}
        {course.category && (
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: `${course.category.color}1a`,
              color: course.category.color,
            }}
          >
            {course.category.name}
          </span>
        )}
      </div>
    </>
  );
}