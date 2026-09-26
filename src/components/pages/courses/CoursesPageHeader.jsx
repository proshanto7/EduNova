export default function CoursesPageHeader({ activeCategory }) {
  return (
    <section className="border-b border-(--border) px-6 py-14">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-(--accent)">
          Browse Our Catalog
        </p>
        <h1 className="text-3xl font-bold text-(--text-primary) md:text-4xl">
          {activeCategory ? activeCategory.name : "All Courses"}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-(--text-secondary)">
          {activeCategory
            ? activeCategory.description
            : "Explore our full range of courses taught by expert instructors."}
        </p>
      </div>
    </section>
  );
}
