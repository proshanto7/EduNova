"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { isStudent } from "@/lib/auth-utils";
import {
  useMyEnrollmentRequests,
  useCreateEnrollmentRequest,
  findRequestForCourse,
} from "@/hooks/useEnrollmentRequests";

const BUTTON_CLASS =
  "mt-5 block w-full rounded-full py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90";

export default function EnrollButton({ courseId, color = "var(--accent)" }) {
  const { isAuthenticated, loading: authLoading, user } = useAuth();
  const { requests, loading: requestsLoading, reload } = useMyEnrollmentRequests();
  const { submit, loading, error, success, reset } = useCreateEnrollmentRequest();
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");

  // Auth session check hocche
  if (authLoading) {
    return (
      <div className="mt-5 h-12 w-full animate-pulse rounded-full bg-(--background-input)" />
    );
  }

  // Login na thakle -> login page-e pathiye dao
  if (!isAuthenticated) {
    return (
      <Link href="/login" className={BUTTON_CLASS} style={{ backgroundColor: color }}>
        Log in to Enroll
      </Link>
    );
  }

  // Admin/instructor account diye kew course dekhle enroll flow lagbe na
  // (case-insensitive check — "Student"/"student" duto-i handle kore)
  if (user && !isStudent(user)) {
    return null;
  }

  const existing = requestsLoading
    ? null
    : findRequestForCourse(requests, courseId);

  // Age theke approved (mane enrolled) -> shorasori course-e niye jao
  if (existing?.status === "approved") {
    return (
      <Link
        href={`/dashboard/courses/${existing.course.id}`}
        className={BUTTON_CLASS}
        style={{ backgroundColor: color }}
      >
        Go to Course
      </Link>
    );
  }

  // Age theke pending request ache -> notun request patano jabe na
  if (existing?.status === "pending") {
    return (
      <div className="mt-5 rounded-xl border border-(--border) bg-background px-4 py-3 text-center text-sm text-(--text-secondary)">
        Request sent — waiting for admin approval.
      </div>
    );
  }

  // Ei mattro request success hoyeche
  if (success) {
    return (
      <div className="mt-5 rounded-xl border border-(--border) bg-background px-4 py-3 text-center text-sm text-(--text-secondary)">
        Request sent! We&apos;ll notify you once it&apos;s reviewed.
      </div>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={BUTTON_CLASS}
        style={{ backgroundColor: color }}
      >
        Enroll Now
      </button>
    );
  }

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const ok = await submit({ courseId, note });
        if (ok) reload();
      }}
      className="mt-5 space-y-3"
    >
      <textarea
        value={note}
        onChange={(event) => setNote(event.target.value)}
        maxLength={500}
        rows={3}
        placeholder="Add a note for the admin (optional)"
        className="w-full rounded-xl border border-(--border) bg-(--background-card) p-3 text-sm text-(--text-primary) outline-none focus:border-(--accent)"
      />

      {error && (
        <p role="alert" className="text-xs text-red-500">
          {error}
        </p>
      )}

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 rounded-full py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          style={{ backgroundColor: color }}
        >
          {loading ? "Sending..." : "Send Request"}
        </button>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            reset();
          }}
          className="rounded-full border border-(--border) px-5 text-sm font-semibold text-(--text-secondary) transition-colors hover:bg-background"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}