"use client";

import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  getMyEnrollmentRequests,
  createEnrollmentRequest,
  cancelEnrollmentRequest,
} from "@/lib/api";
import { errorMessage, listFrom, normalizeEnrollmentRequest } from "@/lib/adapters";

// ======================================================
// Student-er nijer enrollment request list.
//   GET /enrollment-request/my
// ======================================================
export function useMyEnrollmentRequests() {
  const { token } = useAuth();
  const [state, setState] = useState({
    requests: [],
    loading: true,
    error: "",
  });

  const load = useCallback(() => {
    if (!token) return;
    setState((prev) => ({ ...prev, loading: true, error: "" }));

    getMyEnrollmentRequests()
      .then((res) => {
        setState({
          requests: listFrom(res, "requests").map(normalizeEnrollmentRequest),
          loading: false,
          error: "",
        });
      })
      .catch((err) => {
        setState({
          requests: [],
          loading: false,
          error: errorMessage(err, "Could not load your enrollment requests."),
        });
      });
  }, [token]);

  useEffect(() => {
    load();
  }, [load]);

  return { ...state, reload: load };
}

// course-e already pending/approved request ache kina check korar jonno
// (EnrollButton-e use hoy — duplicate request patha thekano)
export function findRequestForCourse(requests, courseId) {
  return requests.find((request) => request.course.id === courseId);
}

// ======================================================
// Notun enrollment request pathano
//   POST /enrollment-request  { courseId, note }
// ======================================================
export function useCreateEnrollmentRequest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const submit = async ({ courseId, note }) => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await createEnrollmentRequest({ courseId, note });
      setSuccess(true);
      return true;
    } catch (err) {
      setError(errorMessage(err, "Could not send the enrollment request."));
      return false;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setError("");
    setSuccess(false);
  };

  return { submit, loading, error, success, reset };
}

// ======================================================
// Nijer pending request cancel kora
//   DELETE /enrollment-request/:id
// ======================================================
export function useCancelEnrollmentRequest() {
  const [loadingId, setLoadingId] = useState(null);
  const [error, setError] = useState("");

  const submit = async (id) => {
    setLoadingId(id);
    setError("");

    try {
      await cancelEnrollmentRequest(id);
      return true;
    } catch (err) {
      setError(errorMessage(err, "Could not cancel the request."));
      return false;
    } finally {
      setLoadingId(null);
    }
  };

  return { submit, loadingId, error };
}
