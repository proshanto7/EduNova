import Image from "next/image";
import { TEAM_DATA } from "@/data/about";

export default function TeamSection() {
  return (
    <section className="border-t border-(--border) bg-(--background-card) px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-(--accent)">
            Meet The Team
          </p>

          <h2 className="text-3xl font-bold text-(--text-primary) md:text-4xl">
            The people behind the platform
          </h2>
        </div>

        {/* Team Members */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_DATA.map((member) => (
            <div key={member.name} className="text-center">

              {/* Profile Image */}
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 text-base font-bold text-(--text-primary)">
                {member.name}
              </h3>

              {/* Role */}
              <p className="mt-1 text-sm text-(--text-secondary)">
                {member.role}
              </p>

              {/* Social Links */}
              <div className="mt-3 flex items-center justify-center gap-3">

                {/* LinkedIn */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="text-(--text-muted) transition-colors hover:text-(--accent)"
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

                {/* Twitter */}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on Twitter`}
                    className="text-(--text-muted) transition-colors hover:text-(--accent)"
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
          ))}
        </div>
      </div>
    </section>
  );
}