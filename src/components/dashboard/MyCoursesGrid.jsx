import Link from "next/link";
import Image from "next/image";
import { ENROLLED_COURSES_DATA } from "@/data/dashboard";

export default function MyCoursesGrid() {
  return (
    <div className="rounded-2xl border border-(--border) bg-(--background-card) p-5">
      <h1 className="mb-5 text-xl font-bold text-(--text-primary)">
        My Courses
      </h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {ENROLLED_COURSES_DATA.map((course) => (
          <div
            key={course.id}
            className="overflow-hidden rounded-xl border border-(--border)"
          >
            <div className="relative h-36 w-full">
              <Image
                src={course.image}
                alt={course.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <p className="text-sm font-semibold text-(--text-primary)">
                {course.title}
              </p>
              <p className="mt-0.5 text-xs text-(--text-muted)">
                By {course.instructor}
              </p>

              <div className="mt-3 flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-(--border)">
                  <div
                    className="h-full rounded-full bg-(--accent)"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <span className="shrink-0 text-xs font-medium text-(--text-muted)">
                  {course.progress}%
                </span>
              </div>

              <Link
                href={`/course/${course.id}`}
                className="mt-4 inline-block text-xs font-semibold text-(--accent) hover:text-(--accent-hover)"
              >
                Continue Learning →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}