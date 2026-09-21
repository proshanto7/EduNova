"use client";

import Link from "next/link";
import CourseThumb from "@/components/dashboard/CourseThumb";
import { useMyCourses } from "@/hooks/useStudentData";

export default function EnrolledCourses() {
  const { courses, loading, error } = useMyCourses();

  // Je course gulo ekhono shesh hoyni, prothom 3-ta
  const inProgress = courses.filter((course) => !course.completed).slice(0, 3);

  return (
    <div className="rounded-2xl border border-(--border) bg-(--background-card) p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-(--text-primary)">
          Continue Learning
        </h2>
        <Link
          href="/dashboard/courses"
          className="text-sm font-semibold text-(--accent) hover:text-(--accent-hover)"
        >
          View all
        </Link>
      </div>

      {loading && (
        <p className="py-6 text-center text-sm text-(--text-muted)">
          Loading your courses...
        </p>
      )}

      {error && (
        <p role="alert" className="py-6 text-center text-sm text-red-500">
          {error}
        </p>
      )}

      {!loading && !error && inProgress.length === 0 && (
        <p className="py-6 text-center text-sm text-(--text-secondary)">
          {courses.length === 0
            ? "You haven't been enrolled in any course yet."
            : "You've finished all your courses."}
        </p>
      )}

      <div className="space-y-4">
        {inProgress.map((course) => (
          <Link
  key={course.id}
  href={`/dashboard/courses/${course.id}`}
  className="flex flex-col gap-4 rounded-xl border border-(--border) p-3 transition-colors hover:border-(--accent)/45 sm:flex-row sm:items-center"
>
            <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-24">
              <CourseThumb
                src={course.image}
                alt={course.title}
                sizes="96px"
                width={200}
                iconSize={20}
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-(--text-primary)">
                {course.title}
              </p>
              {course.instructor && (
                <p className="mt-0.5 text-xs text-(--text-muted)">
                  By {course.instructor}
                </p>
              )}

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
          </Link>
        ))}
      </div>
    </div>
  );
}
