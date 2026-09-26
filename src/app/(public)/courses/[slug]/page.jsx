import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { getCategoryBySlug, getCourses } from "@/lib/api";
import { unwrap } from "@/lib/auth-utils";
import { normalizeCategory, normalizeCourse } from "@/lib/adapters";
import { getCategoryIcon } from "@/lib/categoryIcons";
import CourseCard from "@/components/courses/CourseCard";

export const dynamic = "force-dynamic";

async function fetchCategory(slug) {
  try {
    const res = await getCategoryBySlug(slug);
    const data = unwrap(res);
    return data?.category ? normalizeCategory(data.category) : null;
  } catch {
    return null;
  }
}

async function fetchCoursesForCategory(categoryId) {
  try {
    const res = await getCourses({
      category: categoryId,
      isPublished: true,
      limit: 60,
    });
    const data = unwrap(res);
    return (Array.isArray(data?.courses) ? data.courses : []).map(
      normalizeCourse,
    );
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = await fetchCategory(slug);
  if (!category) return {};

  return {
    title: `${category.name} Courses`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = await fetchCategory(slug);

  if (!category) {
    notFound();
  }

  const Icon = getCategoryIcon(category.slug);
  const courses = await fetchCoursesForCategory(category.id);

  return (
    <main className="bg-background">
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
