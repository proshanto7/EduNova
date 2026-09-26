import Link from "next/link";
import CourseCard from "@/components/pages/courses/CourseCard";
import CategoryFilter from "@/components/pages/courses/CategoryFilter";

export default function CoursesCatalogGrid({
  categories,
  activeCategorySlug,
  courses,
  error,
}) {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {categories.length > 0 && (
          <CategoryFilter
            categories={categories.map(({ slug, name, color }) => ({
              slug,
              name,
              color,
            }))}
            activeSlug={activeCategorySlug}
          />
        )}

        {error ? (
          <div className="rounded-2xl border border-dashed border-(--border) py-16 text-center">
            <p className="text-(--text-secondary)">{error}</p>
            <p className="mt-1 text-sm text-(--text-muted)">
              Please check the API server and try again.
            </p>
          </div>
        ) : (
          <>
            <p className="mb-6 text-sm text-(--text-muted)">
              {courses.length} {courses.length === 1 ? "course" : "courses"}{" "}
              found
            </p>

            {courses.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    accentColor={course.category?.color || "#7c6fe8"}
                  />
                ))}
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
          </>
        )}
      </div>
    </section>
  );
}