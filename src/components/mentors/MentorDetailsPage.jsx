import Link from "next/link";
import Image from "next/image";
import { Star, Users, ChevronRight } from "lucide-react";

export default function MentorDetailsPage({ mentor }) {
  return (
    <main className="bg-(--background)">
      {/* Breadcrumb */}
      <section className="border-b border-(--border) px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-1.5 text-xs text-(--text-muted)">
            <Link
              href="/"
              className="transition-colors hover:text-(--text-primary)"
            >
              Home
            </Link>

            <ChevronRight size={12} />

            <Link
              href="/mentors"
              className="transition-colors hover:text-(--text-primary)"
            >
              Mentors
            </Link>

            <ChevronRight size={12} />

            <span className="text-(--text-primary)">
              {mentor.name}
            </span>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.6fr]">

          {/* Left — Photo & Socials */}
          <div>
            {/* Profile Image */}
            <div className="relative h-80 w-full overflow-hidden rounded-2xl">
              <Image
                src={mentor.image}
                alt={mentor.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-3">

              {/* LinkedIn */}
              {mentor.linkedin && (
                <a
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${mentor.name} on LinkedIn`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-(--border) text-(--text-muted) transition-colors hover:border-(--accent) hover:text-(--accent)"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.606 0 4.27 2.373 4.27 5.462v6.28zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 20.452h3.558V8.999H3.555v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              )}

              {/* Twitter / X */}
              {mentor.twitter && (
                <a
                  href={mentor.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${mentor.name} on Twitter`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-(--border) text-(--text-muted) transition-colors hover:border-(--accent) hover:text-(--accent)"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                  </svg>
                </a>
              )}

            </div>
          </div>

          {/* Right — Details */}
          <div>
            {/* Expertise */}
            <span className="inline-block rounded-full bg-(--stat-icon-bg) px-3 py-1 text-xs font-semibold uppercase tracking-wide text-(--stat-icon-color)">
              {mentor.expertise}
            </span>

            {/* Name */}
            <h1 className="mt-4 text-3xl font-bold text-(--text-primary) md:text-4xl">
              {mentor.name}
            </h1>

            {/* Title */}
            <p className="mt-1 text-(--text-secondary)">
              {mentor.title}
            </p>

            {/* Stats */}
            <div className="mt-4 flex items-center gap-5 text-sm text-(--text-muted)">
              {/* Rating */}
              <span className="flex items-center gap-1.5">
                <Star
                  size={16}
                  className="fill-current text-amber-400"
                />
                {mentor.rating} Rating
              </span>

              {/* Students */}
              <span className="flex items-center gap-1.5">
                <Users size={16} />
                {mentor.students} Students
              </span>
            </div>

            {/* About */}
            <div className="mt-8 border-t border-(--border) pt-8">
              <h2 className="text-lg font-bold text-(--text-primary)">
                About {mentor.name.split(" ")[0]}
              </h2>

              <p className="mt-3 leading-relaxed text-(--text-secondary)">
                {mentor.bio}
              </p>
            </div>

            {/* Related Courses */}
            <Link
              href="/courses"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold text-(--accent-text) transition-opacity hover:opacity-90"
            >
              View Related Courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}