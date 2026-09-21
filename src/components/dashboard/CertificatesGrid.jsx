"use client";

import Link from "next/link";
import { Award, Download } from "lucide-react";
import { useMyCourses } from "@/hooks/useStudentData";
import { formatDate } from "@/lib/format";

export default function CertificatesGrid() {
  const { courses, loading, error } = useMyCourses();

  // Certificate = 100% shesh kora course
  const certificates = courses.filter((course) => course.completed);

  return (
    <div className="rounded-2xl border border-(--border) bg-(--background-card) p-5">
      <h1 className="mb-5 text-xl font-bold text-(--text-primary)">
        Certificates
      </h1>

      {loading && (
        <p className="py-10 text-center text-sm text-(--text-muted)">
          Loading certificates...
        </p>
      )}

      {error && (
        <p role="alert" className="py-10 text-center text-sm text-red-500">
          {error}
        </p>
      )}

      {!loading && !error && certificates.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certificates.map((cert) => {
            const issuedOn = formatDate(cert.completedAt);

            return (
              <div
                key={cert.id}
                className="flex items-start gap-4 rounded-xl border border-(--border) p-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-(--stat-icon-bg)">
                  <Award
                    size={22}
                    className="text-(--stat-icon-color)"
                    strokeWidth={1.75}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-(--text-primary)">
                    {cert.title}
                  </p>
                  {cert.instructor && (
                    <p className="mt-0.5 text-xs text-(--text-muted)">
                      By {cert.instructor}
                    </p>
                  )}
                  {issuedOn && (
                    <p className="mt-1 text-xs text-(--text-muted)">
                      Issued on {issuedOn}
                    </p>
                  )}

                  <Link
                    href={`/certificate/${cert.id}`}
                    className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-(--accent) hover:text-(--accent-hover)"
                  >
                    <Download size={13} />
                    View & download PDF
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!loading && !error && certificates.length === 0 && (
        <div className="rounded-xl border border-dashed border-(--border) py-16 text-center">
          <Award size={32} className="mx-auto text-(--text-muted)" strokeWidth={1.5} />
          <p className="mt-3 text-sm text-(--text-secondary)">
            Complete a course to earn your first certificate.
          </p>
        </div>
      )}
    </div>
  );
}
