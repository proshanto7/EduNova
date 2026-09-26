import { getCourses, getCategories } from "@/lib/api";
import { unwrap } from "@/lib/auth-utils";
import { normalizeCourse, normalizeCategory } from "@/lib/adapters";
import CoursesPageHeader from "@/components/pages/courses/CoursesPageHeader";
import CoursesCatalogGrid from "@/components/pages/courses/CoursesCatalogGrid";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "All Courses",
  description:
    "Browse our complete collection of courses across all categories.",
};

async function fetchCatalog() {
  try {
    const [coursesRes, categoriesRes] = await Promise.all([
      getCourses({ limit: 60, isPublished: true }),
      getCategories({ limit: 50 }),
    ]);

    const coursesData = unwrap(coursesRes);
    const categoriesData = unwrap(categoriesRes);

    const courses = (
      Array.isArray(coursesData?.courses) ? coursesData.courses : []
    ).map(normalizeCourse);

    const categories = (
      Array.isArray(categoriesData?.categories) ? categoriesData.categories : []
    ).map(normalizeCategory);

    return { courses, categories, error: null };
  } catch (error) {
    return {
      courses: [],
      categories: [],
      error: error?.message || "Could not load courses right now.",
    };
  }
}

export default async function CoursesPage({ searchParams }) {
  const { category: activeCategorySlug } = await searchParams;
  const { courses: allCourses, categories, error } = await fetchCatalog();

  const courses = activeCategorySlug
    ? allCourses.filter((course) => course.category?.slug === activeCategorySlug)
    : allCourses;

  const activeCategory = activeCategorySlug
    ? categories.find((category) => category.slug === activeCategorySlug)
    : null;

  return (
    <main className="bg-background">
      <CoursesPageHeader activeCategory={activeCategory} />
      <CoursesCatalogGrid
        categories={categories}
        activeCategorySlug={activeCategorySlug}
        courses={courses}
        error={error}
      />
    </main>
  );
}