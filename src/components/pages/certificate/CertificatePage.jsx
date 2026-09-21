"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Printer } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useMyCourses } from "@/hooks/useStudentData";
import { formatDate } from "@/lib/format";

// Print korar somoy site-er header/footer/sidebar lukiye dey
const PRINT_CSS = `
@media print {
  header, footer, nav, aside { display: none !important; }
  body { background: #fff !important; }
  @page { size: A4 landscape; margin: 10mm; }
}`;

function Shell({ children }) {
  return (
    <main className="bg-background px-6 py-10 print:bg-white print:p-0">
      <style>{PRINT_CSS}</style>
      <div className="mx-auto max-w-3xl">{children}</div>
    </main>
  );
}

function Notice({ text, href, linkLabel }) {
  return (
    <div className="rounded-2xl border border-(--border) bg-(--background-card) px-6 py-16 text-center">
      <p className="text-sm text-(--text-secondary)">{text}</p>
      <Link
        href={href}
        className="mt-4 inline-block text-sm font-semibold text-(--accent) hover:text-(--accent-hover)"
      >
        {linkLabel}
      </Link>
    </div>
  );
}

export default function CertificatePage() {
  const { courseId } = useParams();
  const { user } = useAuth();
  const { courses, loading, error } = useMyCourses();

  if (loading) {
    return (
      <Shell>
        <p className="py-24 text-center text-sm text-(--text-muted)">
          Loading certificate...
        </p>
      </Shell>
    );
  }

  if (error) {
    return (
      <Shell>
        <Notice text={error} href="/dashboard/certificates" linkLabel="Back to Certificates" />
      </Shell>
    );
  }

  const course = courses.find((item) => item.id === String(courseId));

  if (!course) {
    return (
      <Shell>
        <Notice
          text="You're not enrolled in this course."
          href="/dashboard/certificates"
          linkLabel="Back to Certificates"
        />
      </Shell>
    );
  }

  if (!course.completed) {
    return (
      <Shell>
        <Notice
          text="Finish all lessons to unlock this certificate."
          href={`/course/${course.id}`}
          linkLabel="Continue learning"
        />
      </Shell>
    );
  }

  const issuedOn = formatDate(course.completedAt);

  return (
    <Shell>
      <div className="mb-5 flex items-center justify-between print:hidden">
        <Link
          href="/dashboard/certificates"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-(--text-secondary) hover:text-(--text-primary)"
        >
          <ArrowLeft size={15} />
          Certificates
        </Link>

        <button
          type="button"
          onClick={() => window.print()}
          className="flex h-11 items-center gap-2 rounded-full bg-(--accent) px-6 text-sm font-bold text-(--accent-text) transition-all duration-200 hover:-translate-y-px hover:bg-(--accent-hover) active:translate-y-0"
        >
          <Printer size={16} />
          Print / Save as PDF
        </button>
      </div>

      {/* Certificate hamesha light rong-e, jate print-e thik thake */}
      <div className="rounded-2xl border-4 border-double border-neutral-300 bg-white px-8 py-14 text-center text-neutral-900 sm:px-16">
        <h1 className="font-serif text-3xl font-bold sm:text-4xl">
          Certificate of Completion
        </h1>

        <p className="mt-10 text-sm text-neutral-500">This certifies that</p>
        <p className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
          {user?.name || "Student"}
        </p>
        <div className="mx-auto mt-5 h-px w-24 bg-neutral-300" />

        <p className="mt-6 text-sm text-neutral-500">
          has successfully completed the course
        </p>
        <p className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">
          {course.title}
        </p>

        {course.instructor && (
          <p className="mt-3 text-sm text-neutral-500">
            Instructor: {course.instructor}
          </p>
        )}
        {issuedOn && (
          <p className="mt-10 text-sm text-neutral-500">Issued on {issuedOn}</p>
        )}
      </div>
    </Shell>
  );
}
