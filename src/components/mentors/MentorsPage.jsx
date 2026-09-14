import { MENTORS_DATA } from "@/data/mentors";
import MentorCard from "@/components/mentors/MentorCard";

export default function MentorsPage() {
  return (
    <main className="bg-(--background)">
      {/* Header */}
      <section className="border-b border-(--border) px-6 py-14">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-(--accent)">
            Meet The Experts
          </p>
          <h1 className="text-3xl font-bold text-(--text-primary) md:text-4xl">
            Our Mentors
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-(--text-secondary)">
            Learn directly from industry professionals who bring real-world
            experience to every session.
          </p>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MENTORS_DATA.map((mentor) => (
              <MentorCard key={mentor.slug} mentor={mentor} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}