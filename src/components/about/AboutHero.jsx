export default function AboutHero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
          About Us
        </p>
        <h1 className="text-4xl font-bold leading-tight text-(--text-primary) md:text-5xl">
          Empowering learners to build the skills of tomorrow
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-(--text-secondary)">
          We&apos;re on a mission to make world-class education accessible,
          affordable, and genuinely enjoyable for everyone — no matter where
          they start.
        </p>
      </div>
    </section>
  );
}