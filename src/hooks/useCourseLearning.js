"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  getLessonsForCourse,
  getMyCourseProgress,
  markLessonComplete,
  markLessonIncomplete,
} from "@/lib/api";
import {
  completedIdsFrom,
  errorMessage,
  listFrom,
  normalizeLesson,
} from "@/lib/adapters";
import { invalidateMyCourses, useMyCourses } from "@/hooks/useStudentData";

// ======================================================
// Ekta course-er lesson, progress ar "complete" toggle.
//
// Student shudhu nijer enrolled course-i dekhte pabe:
// enrolled na hole status = "not-enrolled" hoy, lesson API call-i hoy na.
// (Backend-o alada kore check kore: video URL ashe shudhu access thakle.)
//
// status: "loading" | "error" | "not-enrolled" | "ready"
// ======================================================

export function useCourseLearning(courseId) {
  const { courses, loading: listLoading, error: listError } = useMyCourses();

  const enrolled = useMemo(
    () => courses.find((course) => course.id === String(courseId)) ?? null,
    [courses, courseId]
  );
  const enrolledId = enrolled?.id;

  const [lessons, setLessons] = useState([]);
  const [completedIds, setCompletedIds] = useState(() => new Set());
  const [activeId, setActiveId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [savingId, setSavingId] = useState(null);
  const [actionError, setActionError] = useState("");

  useEffect(() => {
    if (!enrolledId) return;
    let ignore = false;

    Promise.all([
      getLessonsForCourse(enrolledId),
      getMyCourseProgress(enrolledId).catch(() => null),
    ])
      .then(([lessonsRes, progressRes]) => {
        if (ignore) return;

        const list = listFrom(lessonsRes, "lessons")
          .map(normalizeLesson)
          .sort((a, b) => a.order - b.order);
        const done = completedIdsFrom(progressRes);
        const start =
          list.find((lesson) => !lesson.locked && !done.has(lesson.id)) ?? list[0];

        setLessons(list);
        setCompletedIds(done);
        setActiveId(start?.id ?? null);
        setLoading(false);
      })
      .catch((err) => {
        if (ignore) return;
        setError(errorMessage(err, "Could not load the lessons. Try again."));
        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [enrolledId]);

  // Complete / undo. Optimistic update, fail korle ager obostha-y ferot.
  const toggleComplete = useCallback(
    async (lessonId) => {
      const lesson = lessons.find((item) => item.id === lessonId);
      if (!lesson || lesson.locked || savingId) return;

      const wasDone = completedIds.has(lessonId);
      const apply = (done) =>
        setCompletedIds((prev) => {
          const next = new Set(prev);
          if (done) next.add(lessonId);
          else next.delete(lessonId);
          return next;
        });

      setActionError("");
      setSavingId(lessonId);
      apply(!wasDone);

      try {
        if (wasDone) {
          await markLessonIncomplete(lessonId); // DELETE /progress/:lessonId
        } else {
          await markLessonComplete({ lessonId }); // POST /progress/complete { lessonId }
        }
        invalidateMyCourses(); // dashboard-e notun progress dekhabe
      } catch (err) {
        apply(wasDone);
        setActionError(errorMessage(err, "Could not update your progress. Try again."));
      } finally {
        setSavingId(null);
      }
    },
    [lessons, completedIds, savingId]
  );

  let status = "ready";
  if (listLoading) status = "loading";
  else if (listError) status = "error";
  else if (!enrolled) status = "not-enrolled";
  else if (loading) status = "loading";
  else if (error) status = "error";

  const activeIndex = lessons.findIndex((lesson) => lesson.id === activeId);
  const completedCount = lessons.filter((lesson) => completedIds.has(lesson.id)).length;

  return {
    status,
    error: listError || error,
    course: enrolled,
    lessons,
    completedIds,
    progress: lessons.length ? Math.round((completedCount / lessons.length) * 100) : 0,
    totalSeconds: lessons.reduce((sum, lesson) => sum + lesson.duration, 0),
    activeLesson: activeIndex >= 0 ? lessons[activeIndex] : null,
    prevLesson: activeIndex > 0 ? lessons[activeIndex - 1] : null,
    nextLesson:
      activeIndex >= 0 && activeIndex < lessons.length - 1
        ? lessons[activeIndex + 1]
        : null,
    savingId,
    actionError,
    selectLesson: setActiveId,
    toggleComplete,
  };
}
