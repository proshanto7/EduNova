export default function GalleryHero() {
  return (
    <section className="border-b border-(--border) px-6 py-14">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-(--accent)">
          Our Moments
        </p>
        <h1 className="text-3xl font-bold text-(--text-primary) md:text-4xl">
          Gallery
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-(--text-secondary)">
          A glimpse into our classrooms, workshops, events, and the community
          we&apos;re building together.
        </p>
      </div>
    </section>
  );
}