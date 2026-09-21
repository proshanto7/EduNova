"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import CourseThumb from "@/components/dashboard/CourseThumb";
import { useMyCourses } from "@/hooks/useStudentData";

export default function MyCoursesGrid() {
  const { courses, loading, error } = useMyCourses();

  return (
    <div className="rounded-2xl border border-(--border) bg-(--background-card) p-5">
      <h1 className="mb-5 text-xl font-bold text-(--text-primary)">
        My Courses
      </h1>

      {loading && (
        <p className="py-10 text-center text-sm text-(--text-muted)">
          Loading your courses...
        </p>
      )}

      {error && (
        <p role="alert" className="py-10 text-center text-sm text-red-500">
          {error}
        </p>
      )}

      {!loading && !error && courses.length === 0 && (
        <div className="rounded-xl border border-dashed border-(--border) py-16 text-center">
          <BookOpen
            size={32}
            className="mx-auto text-(--text-muted)"
            strokeWidth={1.5}
          />
          <p className="mt-3 text-sm text-(--text-secondary)">
            You haven&apos;t been enrolled in any course yet.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="overflow-hidden rounded-xl border border-(--border)"
          >
            <div className="relative h-36 w-full">
              <CourseThumb
                src={course.image}
                alt={course.title}
                sizes="(max-width: 768px) 100vw, 50vw"
                width={800}
                iconSize={28}
              />
            </div>

            <div className="p-4">
              <p className="text-sm font-semibold text-(--text-primary)">
                {course.title}
              </p>
              {course.instructor && (
                <p className="mt-0.5 text-xs text-(--text-muted)">
                  By {course.instructor}
                </p>
              )}

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
                href={`/dashboard/courses/${course.id}`}
                className="mt-4 inline-block text-xs font-semibold text-(--accent) hover:text-(--accent-hover)"
              >
                {course.completed ? "Review Course →" : "Continue Learning →"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
