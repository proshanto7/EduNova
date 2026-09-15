export default function BlogHero() {
  return (
    <section className="border-b border-(--border) px-6 py-14">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-(--accent)">
          Our Blog
        </p>
        <h1 className="text-3xl font-bold text-(--text-primary) md:text-4xl">
          Insights, Tips & Stories
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-(--text-secondary)">
          Practical articles on development, design, marketing, and career
          growth — written by our mentors and team.
        </p>
      </div>
    </section>
  );
}