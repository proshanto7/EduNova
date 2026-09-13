import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { CATEGORIES_DATA, getCategoryBySlug } from "@/data/categories";
import { getCoursesByCategory } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";

export function generateStaticParams() {
  return CATEGORIES_DATA.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: `${category.name} Courses`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const Icon = category.icon;
  const courses = getCoursesByCategory(category.slug);

  return (
    <main className="bg-(--background)">
      {/* Header */}
      <section className="border-b border-(--border) px-6 py-14">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-1.5 text-xs text-(--text-muted)">
            <Link href="/" className="hover:text-(--text-primary)">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/courses" className="hover:text-(--text-primary)">
              Courses
            </Link>
            <ChevronRight size={12} />
            <span className="text-(--text-primary)">{category.name}</span>
          </div>

          <div className="flex items-center gap-5">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{ backgroundColor: `${category.color}1a` }}
            >
              <Icon size={30} style={{ color: category.color }} strokeWidth={1.75} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-(--text-primary) md:text-4xl">
                {category.name}
              </h1>
              <p className="mt-2 text-(--text-secondary)">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm text-(--text-muted)">
            {courses.length} {courses.length === 1 ? "course" : "courses"} found
          </p>

          {courses.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  accentColor={category.color}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-(--border) py-16 text-center">
              <p className="text-(--text-secondary)">
                No courses available in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}