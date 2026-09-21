"use client";

import { Check, Lock } from "lucide-react";
import { formatDuration } from "@/lib/format";

export default function LessonList({ lessons, activeId, completedIds, onSelect }) {
  return (
    <div className="rounded-2xl border border-(--border) bg-(--background-card) p-4">
      <h2 className="mb-3 px-1 text-sm font-bold text-(--text-primary)">
        Lessons ({lessons.length})
      </h2>

      <ul className="max-h-[70vh] space-y-1 overflow-y-auto">
        {lessons.map((lesson, index) => {
          const active = lesson.id === activeId;
          const done = completedIds.has(lesson.id);

          return (
            <li key={lesson.id}>
              <button
                type="button"
                onClick={() => onSelect(lesson.id)}
                aria-current={active ? "true" : undefined}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                  active ? "bg-(--stat-icon-bg)" : "hover:bg-background"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    done
                      ? "bg-(--accent) text-(--accent-text)"
                      : "border border-(--border) text-(--text-muted)"
                  }`}
                >
                  {done ? (
                    <Check size={13} strokeWidth={2.5} />
                  ) : lesson.locked ? (
                    <Lock size={12} />
                  ) : (
                    index + 1
                  )}
                </span>

                <span className="min-w-0 flex-1">
                  <span
                    className={`block truncate text-sm ${
                      active
                        ? "font-semibold text-(--text-primary)"
                        : "font-medium text-(--text-secondary)"
                    }`}
                  >
                    {lesson.title}
                  </span>
                  {lesson.duration > 0 && (
                    <span className="block text-xs text-(--text-muted)">
                      {formatDuration(lesson.duration)}
                    </span>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
