import { Award, Download } from "lucide-react";
import { CERTIFICATES_DATA } from "@/data/dashboard";

export default function CertificatesGrid() {
  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="rounded-2xl border border-(--border) bg-(--background-card) p-5">
      <h1 className="mb-5 text-xl font-bold text-(--text-primary)">
        Certificates
      </h1>

      {CERTIFICATES_DATA.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CERTIFICATES_DATA.map((cert) => (
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
                  {cert.courseTitle}
                </p>
                <p className="mt-0.5 text-xs text-(--text-muted)">
                  By {cert.instructor}
                </p>
                <p className="mt-1 text-xs text-(--text-muted)">
                  Issued on {formatDate(cert.issuedDate)}
                </p>

                <button
                  type="button"
                  className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-(--accent) hover:text-(--accent-hover)"
                >
                  <Download size={13} />
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
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