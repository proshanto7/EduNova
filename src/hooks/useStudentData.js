"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getMyEnrollments, getMyOverallProgress } from "@/lib/api";
import {
  errorMessage,
  idOf,
  listFrom,
  normalizeEnrollment,
  progressMapFrom,
} from "@/lib/adapters";

// ======================================================
// Student-er nijer enrolled course + progress.
// Shudhu duto "my" endpoint use kore:
//   GET /enrollment/my        (token-er student-er enrollment)
//   GET /progress/my-overview (token-er student-er progress)
// ======================================================

// 15 second cache, jate dashboard-e ekadhik component thakleo ekbar-i API call hoy
const CACHE_MS = 15_000;
let cache = { token: null, promise: null, time: 0 };

const loadMyCourses = (token) => {
  const isFresh =
    cache.promise && cache.token === token && Date.now() - cache.time < CACHE_MS;
  if (isFresh) return cache.promise;

  const promise = Promise.all([
    getMyEnrollments(),
    // Progress load na hole-o course gulo dekhabe (progress 0%)
    getMyOverallProgress().catch(() => null),
  ]).then(([enrollmentsRes, overviewRes]) => {
    const progressByCourse = progressMapFrom(overviewRes);

    return listFrom(enrollmentsRes, "enrollments")
      .filter((enrollment) => idOf(enrollment.course)) // course delete hoye gele bad
      .map((enrollment) => normalizeEnrollment(enrollment, progressByCourse));
  });

  cache = { token, promise, time: Date.now() };

  // Fail korle cache rakhbo na
  promise.catch(() => {
    if (cache.promise === promise) {
      cache = { token: null, promise: null, time: 0 };
    }
  });

  return promise;
};

// Lesson complete/incomplete korar por eta call korle notun data ashbe
export const invalidateMyCourses = () => {
  cache = { token: null, promise: null, time: 0 };
};

// const { courses, loading, error } = useMyCourses();
export function useMyCourses() {
  const { token } = useAuth();
  const [state, setState] = useState({ courses: [], loading: true, error: "" });

  useEffect(() => {
    if (!token) return;
    let ignore = false;

    loadMyCourses(token)
      .then((courses) => {
        if (!ignore) setState({ courses, loading: false, error: "" });
      })
      .catch((err) => {
        if (ignore) return;
        setState({
          courses: [],
          loading: false,
          error: errorMessage(err, "Could not load your courses. Try again."),
        });
      });

    return () => {
      ignore = true;
    };
  }, [token]);

  return state;
}
