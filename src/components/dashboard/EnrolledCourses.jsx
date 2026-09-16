import Link from "next/link";
import Image from "next/image";
import { ENROLLED_COURSES_DATA } from "@/data/dashboard";

export default function EnrolledCourses() {
  return (
    <div className="rounded-2xl border border-(--border) bg-(--background-card) p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-(--text-primary)">
          Continue Learning
        </h2>
        <Link
          href="/courses"
          className="text-sm font-semibold text-(--accent) hover:text-(--accent-hover)"
        >
          Browse more
        </Link>
      </div>

      <div className="space-y-4">
        {ENROLLED_COURSES_DATA.map((course) => (
          <div
            key={course.id}
            className="flex flex-col gap-4 rounded-xl border border-(--border) p-3 sm:flex-row sm:items-center"
          >
            <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-24">
              <Image
                src={course.image}
                alt={course.title}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-(--text-primary)">
                {course.title}
              </p>
              <p className="mt-0.5 text-xs text-(--text-muted)">
                By {course.instructor}
              </p>

              <div className="mt-2 flex items-center gap-2">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}