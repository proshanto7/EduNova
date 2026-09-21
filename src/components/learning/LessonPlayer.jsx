"use client";

import { Check, ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { getVideoPoster, optimizeVideo } from "@/lib/image-utils";

export default function LessonPlayer({
  lesson,
  isDone,
  saving,
  actionError,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
  onToggle,
  onEnded,
}) {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-2xl border border-(--border) bg-black">
        {lesson.locked ? (
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 px-6 text-center text-sm text-white/70">
            <Lock size={20} />
            This lesson is locked. Contact support about your course access.
          </div>
        ) : lesson.videoUrl ? (
          <video
            key={lesson.id}
            src={optimizeVideo(lesson.videoUrl)}
            poster={getVideoPoster(lesson.videoUrl)}
            controls
            controlsList="nodownload"
            playsInline
            preload="metadata"
            onEnded={onEnded}
            className="aspect-video w-full"
          />
        ) : (
          <div className="flex aspect-video w-full items-center justify-center px-6 text-center text-sm text-white/70">
            This lesson doesn&apos;t have a video yet.
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-(--border) bg-(--background-card) p-5">
        <h2 className="text-lg font-bold text-(--text-primary)">{lesson.title}</h2>
        {lesson.description && (
          <p className="mt-1.5 text-sm leading-relaxed text-(--text-secondary)">
            {lesson.description}
          </p>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onToggle}
            disabled={saving || lesson.locked}
            className={`flex h-11 items-center gap-2 rounded-full px-6 text-sm font-bold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${
              isDone
                ? "border border-(--border) text-(--text-secondary) hover:bg-background"
                : "bg-(--accent) text-(--accent-text) hover:-translate-y-px hover:bg-(--accent-hover) active:translate-y-0"
            }`}
          >
            {isDone && <Check size={16} strokeWidth={2.5} />}
            {saving ? "Saving..." : isDone ? "Completed (undo)" : "Mark as complete"}
          </button>

          <div className="ml-auto flex items-center gap-4">
            <button
              type="button"
              onClick={onPrev}
              disabled={!hasPrev}
              className="flex items-center gap-1 text-sm font-semibold text-(--accent) hover:text-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={16} />
              Previous
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={!hasNext}
              className="flex items-center gap-1 text-sm font-semibold text-(--accent) hover:text-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {actionError && (
          <p role="alert" className="mt-3 text-xs text-red-500">
            {actionError}
          </p>
        )}
      </div>
    </div>
  );
}
