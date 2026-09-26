"use client";

import Link from "next/link";
import { ClipboardList } from "lucide-react";
import CourseThumb from "@/components/dashboard/CourseThumb";
import { formatDate, formatPrice } from "@/lib/format";
import {
  useMyEnrollmentRequests,
  useCancelEnrollmentRequest,
} from "@/hooks/useEnrollmentRequests";

const STATUS_STYLE = {
  pending: "bg-amber-500/10 text-amber-600",
  approved: "bg-emerald-500/10 text-emerald-600",
  rejected: "bg-red-500/10 text-red-600",
};

export default function RequestsGrid() {
  const { requests, loading, error, reload } = useMyEnrollmentRequests();
  const { submit: cancelRequest, loadingId, error: cancelError } =
    useCancelEnrollmentRequest();

  const handleCancel = async (id) => {
    const ok = await cancelRequest(id);
    if (ok) reload();
  };

  return (
    <div className="rounded-2xl border border-(--border) bg-(--background-card) p-5">
      <h1 className="mb-5 text-xl font-bold text-(--text-primary)">
        Enrollment Requests
      </h1>

      {loading && (
        <p className="py-10 text-center text-sm text-(--text-muted)">
          Loading your requests...
        </p>
      )}

      {error && (
        <p role="alert" className="py-10 text-center text-sm text-red-500">
          {error}
        </p>
      )}

      {!loading && !error && requests.length === 0 && (
        <div className="rounded-xl border border-dashed border-(--border) py-16 text-center">
          <ClipboardList
            size={32}
            className="mx-auto text-(--text-muted)"
            strokeWidth={1.5}
          />
          <p className="mt-3 text-sm text-(--text-secondary)">
            You haven&apos;t sent any enrollment requests yet.
          </p>
          <Link
            href="/courses"
            className="mt-3 inline-block text-xs font-semibold text-(--accent) hover:text-(--accent-hover)"
          >
            Browse courses →
          </Link>
        </div>
      )}

      {cancelError && (
        <p role="alert" className="mb-3 text-xs text-red-500">
          {cancelError}
        </p>
      )}

      <div className="space-y-3">
        {requests.map((request) => (
          <div
            key={request.id}
            className="flex flex-col gap-3 rounded-xl border border-(--border) p-4 sm:flex-row sm:items-center"
          >
            <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg">
              <CourseThumb
                src={request.course.image}
                alt={request.course.title}
                sizes="96px"
                width={200}
                iconSize={20}
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-(--text-primary)">
                {request.course.title}
              </p>
              <p className="mt-0.5 text-xs text-(--text-muted)">
                Requested {formatDate(request.createdAt)} ·{" "}
                {formatPrice(request.course)}
              </p>
              {request.status === "rejected" && request.reviewNote && (
                <p className="mt-1 text-xs text-red-500">
                  Reason: {request.reviewNote}
                </p>
              )}
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                  STATUS_STYLE[request.status] || STATUS_STYLE.pending
                }`}
              >
                {request.status}
              </span>

              {request.status === "pending" && (
                <button
                  type="button"
                  onClick={() => handleCancel(request.id)}
                  disabled={loadingId === request.id}
                  className="text-xs font-semibold text-(--text-muted) transition-colors hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loadingId === request.id ? "Cancelling..." : "Cancel"}
                </button>
              )}

              {request.status === "approved" && (
                <Link
                  href={`/dashboard/courses/${request.course.id}`}
                  className="text-xs font-semibold text-(--accent) hover:text-(--accent-hover)"
                >
                  Go to course →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
