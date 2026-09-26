import { notFound } from "next/navigation";
import { getCourseBySlug, getLessonsForCourse } from "@/lib/api";
import { unwrap } from "@/lib/auth-utils";
import { normalizeCourse, normalizeLesson, listFrom } from "@/lib/adapters";
import { optimizeImage } from "@/lib/image-utils";
import Breadcrumb from "@/components/common/Breadcrumb";
import CourseHero from "@/components/pages/courses/CourseHero";
import {
  CourseAbout,
  CourseLearningPoints,
  CourseRequirements,
} from "@/components/pages/courses/CourseDetailsSections";
import CourseCurriculumSection from "@/components/pages/courses/CourseCurriculumSection";
import CourseSidebar from "@/components/pages/courses/CourseSidebar";

export const dynamic = "force-dynamic";

//valid slug format allow — lowercase letters, numbers, hyphen
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

async function fetchCourse(slug) {
  try {
    const res = await getCourseBySlug(slug);
    const data = unwrap(res);
    return data?.course ? normalizeCourse(data.course) : null;
  } catch {
    return null;
  }
}

async function fetchLessons(courseId) {
  try {
    const res = await getLessonsForCourse(courseId);
    return listFrom(res, "lessons").map((lesson, index) =>
      normalizeLesson(lesson, index),
    );
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!SLUG_PATTERN.test(slug)) return {};

  const course = await fetchCourse(slug);
  if (!course) return {};

  return {
    title: course.title,
    description: course.instructor
      ? `Learn from ${course.instructor} — ${course.title}`
      : course.title,
  };
}

export default async function CourseDetailsPage({ params }) {
  const { slug } = await params;

  // 1. Validate the slug
  if (!SLUG_PATTERN.test(slug)) {
    notFound();
  }

  // 2. Real data lookup from the backend
  const course = await fetchCourse(slug);

  if (!course) {
    notFound();
  }

  const lessons = await fetchLessons(course.id);
  const hasPreview = lessons.some((lesson) => lesson.isPreview);
  const color = course.category?.color || "var(--accent)";
  const image = optimizeImage(course.image, { width: 900 });

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    ...(course.category
      ? [{ label: course.category.name, href: `/courses/${course.category.slug}` }]
      : []),
    { label: course.title },
  ];

  return (
    <main className="bg-background">
      <Breadcrumb items={breadcrumbItems} />

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <CourseHero course={course} image={image} color={color} />
            <CourseAbout description={course.description} />
            <CourseLearningPoints items={course.whatYouWillLearn} color={color} />
            <CourseRequirements items={course.requirements} color={color} />
            <CourseCurriculumSection lessons={lessons} hasPreview={hasPreview} />
          </div>

          <div>
            <CourseSidebar course={course} color={color} />
          </div>
        </div>
      </section>
    </main>
  );
}