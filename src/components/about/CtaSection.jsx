import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-(--border) bg-(--background-card) px-8 py-14 text-center">
        <Users size={32} className="mx-auto text-(--accent)" strokeWidth={1.75} />
        <h2 className="mt-5 text-3xl font-bold text-(--text-primary) md:text-4xl">
          Ready to start learning?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-(--text-secondary)">
          Join thousands of students already building real skills on our
          platform.
        </p>

        <Link
          href="/courses"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-(--accent) px-7 py-3 text-sm font-semibold text-(--accent-text) transition-opacity hover:opacity-90"
        >
          Browse Courses
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}