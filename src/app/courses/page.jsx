import Link from "next/link";
import { COURSES_DATA } from "@/data/courses";
import { CATEGORIES_DATA, getCategoryBySlug } from "@/data/categories";
import CourseCard from "@/components/courses/CourseCard";
import CategoryFilter from "@/components/courses/CategoryFilter";

export const metadata = {
  title: "All Courses",
  description:
    "Browse our complete collection of courses across all categories.",
};

export default async function CoursesPage({ searchParams }) {
  const { category: activeCategorySlug } = await searchParams;

  const courses = activeCategorySlug
    ? COURSES_DATA.filter(
        (course) => course.categorySlug === activeCategorySlug,
      )
    : COURSES_DATA;

  const activeCategory = activeCategorySlug
    ? getCategoryBySlug(activeCategorySlug)
    : null;

  return (
    <main className="bg-background">
      {/* Header */}
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

      {/* Filter + Grid */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <CategoryFilter
            categories={CATEGORIES_DATA.map(({ slug, name, color }) => ({
              slug,
              name,
              color,
            }))}
            activeSlug={activeCategorySlug}
          />

          <p className="mb-6 text-sm text-(--text-muted)">
            {courses.length} {courses.length === 1 ? "course" : "courses"} found
          </p>

          {courses.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => {
                const category = getCategoryBySlug(course.categorySlug);
                return (
                  <CourseCard
                    key={course.id}
                    course={course}
                    accentColor={category?.color || "#7c6fe8"}
                  />
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-(--border) py-16 text-center">
              <p className="text-(--text-secondary)">
                No courses found in this category.
              </p>
              <Link
                href="/courses"
                className="mt-4 inline-block text-sm font-semibold text-(--accent) hover:text-(--accent-hover)"
              >
                View all courses
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
