"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Award } from "lucide-react";
import LessonList from "@/components/learning/LessonList";
import LessonPlayer from "@/components/learning/LessonPlayer";
import { useCourseLearning } from "@/hooks/useCourseLearning";
import { formatTotalDuration } from "@/lib/format";

function Shell({ children }) {
  return (
    <main className="bg-background px-6 py-10">
      <div className="mx-auto max-w-7xl space-y-6">{children}</div>
    </main>
  );
}

function Notice({ text, isError = false }) {
  return (
    <div className="rounded-2xl border border-(--border) bg-(--background-card) px-6 py-16 text-center">
      <p
        role={isError ? "alert" : undefined}
        className={`text-sm ${isError ? "text-red-500" : "text-(--text-secondary)"}`}
      >
        {text}
      </p>
      <Link
        href="/dashboard/courses"
        className="mt-4 inline-block text-sm font-semibold text-(--accent) hover:text-(--accent-hover)"
      >
        Back to My Courses
      </Link>
    </div>
  );
}

export default function CourseLearningPage() {
  const { id } = useParams();
  const {
    status,
    error,
    course,
    lessons,
    completedIds,
    progress,
    totalSeconds,
    activeLesson,
    prevLesson,
    nextLesson,
    savingId,
    actionError,
    selectLesson,
    toggleComplete,
  } = useCourseLearning(id);

  if (status === "loading") {
    return (
      <Shell>
        <p className="py-24 text-center text-sm text-(--text-muted)">
          Loading course...
        </p>
      </Shell>
    );
  }

  if (status === "error") {
    return (
      <Shell>
        <Notice isError text={error || "Could not load this course."} />
      </Shell>
    );
  }

  if (status === "not-enrolled") {
    return (
      <Shell>
        <Notice text="You're not enrolled in this course." />
      </Shell>
    );
  }

  const duration = formatTotalDuration(totalSeconds);

  return (
    <Shell>
      <div>
        <Link
          href="/dashboard/courses"
          className="mb-3 inline-flex items-center gap-1.5 text-sm font-medium text-(--text-secondary) hover:text-(--text-primary)"
        >
          <ArrowLeft size={15} />
          My Courses
        </Link>

        <h1 className="text-2xl font-bold text-(--text-primary)">{course.title}</h1>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-(--text-muted)">
          {course.instructor && <span>By {course.instructor}</span>}
          {course.level && <span className="capitalize">{course.level}</span>}
          {lessons.length > 0 && <span>{lessons.length} lessons</span>}
          {duration && <span>{duration}</span>}
        </div>

        <div className="mt-4 flex max-w-md items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-(--border)">
            <div
              className="h-full rounded-full bg-(--accent) transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="shrink-0 text-xs font-medium text-(--text-muted)">
            {progress}%
          </span>
        </div>

        {progress >= 100 && (
          <Link
            href={`/certificate/${course.id}`}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-(--accent) hover:text-(--accent-hover)"
          >
            <Award size={15} />
            View your certificate
          </Link>
        )}
      </div>

      {lessons.length === 0 || !activeLesson ? (
        <div className="rounded-2xl border border-dashed border-(--border) py-16 text-center">
          <p className="text-sm text-(--text-secondary)">
            No lessons have been added to this course yet.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="min-w-0 flex-1">
            <LessonPlayer
              lesson={activeLesson}
              isDone={completedIds.has(activeLesson.id)}
              saving={savingId === activeLesson.id}
              actionError={actionError}
              hasPrev={Boolean(prevLesson)}
              hasNext={Boolean(nextLesson)}
              onPrev={() => prevLesson && selectLesson(prevLesson.id)}
              onNext={() => nextLesson && selectLesson(nextLesson.id)}
              onToggle={() => toggleComplete(activeLesson.id)}
              onEnded={() => {
                if (!completedIds.has(activeLesson.id)) {
                  toggleComplete(activeLesson.id);
                }
              }}
            />
          </div>

          <aside className="w-full shrink-0 lg:w-80">
            <LessonList
              lessons={lessons}
              activeId={activeLesson.id}
              completedIds={completedIds}
              onSelect={selectLesson}
            />
          </aside>
        </div>
      )}
    </Shell>
  );
}
