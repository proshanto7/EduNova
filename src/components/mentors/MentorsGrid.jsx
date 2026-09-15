import { MENTORS_DATA } from "@/data/mentors";
import MentorCard from "@/components/mentors/MentorCard";

export default function MentorsGrid() {
  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MENTORS_DATA.map((mentor) => (
            <MentorCard key={mentor.slug} mentor={mentor} />
          ))}
        </div>
      </div>
    </section>
  );
}