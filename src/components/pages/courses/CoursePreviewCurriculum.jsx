"use client";

import { useState } from "react";
import { PlayCircle, Lock } from "lucide-react";
import LessonPlayer from "@/components/learning/LessonPlayer";
import { formatDuration } from "@/lib/format";

/**
 * Public course details page-er curriculum section.
 * Kono lesson `isPreview` hole login chara-i video play kora jay (LessonPlayer diye).
 * Preview lesson na thakle age-r moto shudhu static list dekhabe (video chara).
 */
export default function CoursePreviewCurriculum({ lessons }) {
  const hasPreview = lessons.some((lesson) => lesson.isPreview);

  const firstPreviewIndex = lessons.findIndex((lesson) => lesson.isPreview);
  const [activeIndex, setActiveIndex] = useState(
    firstPreviewIndex >= 0 ? firstPreviewIndex : 0,
  );

  if (!hasPreview) {
    return (
      <ul className="mt-4 divide-y divide-(--border) overflow-hidden rounded-2xl border border-(--border)">
        {lessons.map((lesson, index) => (
          <li
            key={lesson.id || index}
            className="flex items-center justify-between gap-4 bg-(--background-card) px-4 py-3.5"
          >
            <div className="flex items-center gap-3">
              <Lock size={16} className="shrink-0 text-(--text-muted)" />
              <span className="text-sm text-(--text-primary)">
                {lesson.order}. {lesson.title}
              </span>
            </div>
            {lesson.duration > 0 && (
              <span className="shrink-0 text-xs text-(--text-muted)">
                {formatDuration(lesson.duration)}
              </span>
            )}
          </li>
        ))}
      </ul>
    );
  }

  const activeLesson = lessons[activeIndex];

  return (
    <div className="mt-4 flex flex-col gap-6 lg:flex-row">
      <div className="min-w-0 flex-1">
        <LessonPlayer
          lesson={activeLesson}
          isDone={false}
          saving={false}
          actionError=""
          hasPrev={activeIndex > 0}
          hasNext={activeIndex < lessons.length - 1}
          onPrev={() => setActiveIndex((i) => Math.max(i - 1, 0))}
          onNext={() => setActiveIndex((i) => Math.min(i + 1, lessons.length - 1))}
          onToggle={() => {}}
          onEnded={() => {}}
          hideComplete
        />
      </div>

      <ul className="w-full shrink-0 divide-y divide-(--border) overflow-hidden rounded-2xl border border-(--border) lg:w-80">
        {lessons.map((lesson, index) => {
          const isActive = index === activeIndex;
          const canPlay = lesson.isPreview || !lesson.locked;

          return (
            <li key={lesson.id || index}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-current={isActive ? "true" : undefined}
                className={`flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors ${
                  isActive
                    ? "bg-(--accent)/10"
                    : "bg-(--background-card) hover:bg-(--border-light)"
                }`}
              >
                <span className="flex min-w-0 items-center gap-3">
                  {canPlay ? (
                    <PlayCircle size={18} className="shrink-0 text-(--accent)" />
                  ) : (
                    <Lock size={16} className="shrink-0 text-(--text-muted)" />
                  )}
                  <span className="truncate text-sm text-(--text-primary)">
                    {lesson.order}. {lesson.title}
                  </span>
                  {lesson.isPreview && (
                    <span className="shrink-0 rounded-full bg-(--accent)/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-(--accent)">
                      Preview
                    </span>
                  )}
                </span>
                {lesson.duration > 0 && (
                  <span className="shrink-0 text-xs text-(--text-muted)">
                    {formatDuration(lesson.duration)}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
