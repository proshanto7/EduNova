import { MILESTONES_DATA } from "@/data/about";

export default function Milestones() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-(--text-primary) md:text-4xl">
            Our journey so far
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {MILESTONES_DATA.map((milestone) => (
            <div key={milestone.year} className="text-center">
              <p className="text-3xl font-bold text-(--accent)">
                {milestone.year}
              </p>
              <p className="mt-2 text-sm text-(--text-secondary)">
                {milestone.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}