import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Star,
  Users,
  ChevronRight,
  Clock,
  BarChart3,
  Globe,
} from "lucide-react";
import { getCourseBySlug, getLessonsForCourse } from "@/lib/api";
import { unwrap } from "@/lib/auth-utils";
import { normalizeCourse, normalizeLesson, listFrom } from "@/lib/adapters";
import { formatPrice, formatTotalDuration } from "@/lib/format";
import { optimizeImage } from "@/lib/image-utils";
import CoursePreviewCurriculum from "@/components/pages/courses/CoursePreviewCurriculum";
import EnrollButton from "@/components/courses/EnrollButton";

export const dynamic = "force-dynamic";

// শুধু valid slug format allow — lowercase letters, numbers, hyphen
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

  return (
    <main className="bg-background">
      {/* Header */}
      <section className="border-b border-(--border) px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-1.5 text-xs text-(--text-muted)">
            <Link href="/" className="hover:text-(--text-primary)">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/courses" className="hover:text-(--text-primary)">
              Courses
            </Link>
            {course.category && (
              <>
                <ChevronRight size={12} />
                <Link
                  href={`/courses/${course.category.slug}`}
                  className="hover:text-(--text-primary)"
                >
                  {course.category.name}
                </Link>
              </>
            )}
            <ChevronRight size={12} />
            <span className="text-(--text-primary)">{course.title}</span>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.6fr_1fr]">
          {/* Left */}
          <div>
            <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-(--background-input) sm:h-80">
              {image ? (
                <Image
                  src={image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-(--text-muted)">
                  No image
                </div>
              )}
            </div>

            <h1 className="mt-6 text-2xl font-bold text-(--text-primary) md:text-3xl">
              {course.title}
            </h1>

            {course.instructor && (
              <p className="mt-2 text-sm text-(--text-secondary)">
                By{" "}
                <span className="font-semibold text-(--text-primary)">
                  {course.instructor}
                </span>
              </p>
            )}

            <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-(--text-muted)">
              <span className="flex items-center gap-1.5">
                <Star size={16} className="fill-current text-amber-400" />
                {course.rating ? course.rating.toFixed(1) : "New"} Rating
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={16} />
                {course.students.toLocaleString("en-US")} Students
              </span>
              {course.language && (
                <span className="flex items-center gap-1.5">
                  <Globe size={16} />
                  {course.language}
                </span>
              )}
              {course.category && (
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: `${course.category.color}1a`,
                    color: course.category.color,
                  }}
                >
                  {course.category.name}
                </span>
              )}
            </div>

            <div className="mt-8 border-t border-(--border) pt-8">
              <h2 className="text-lg font-bold text-(--text-primary)">
                About this course
              </h2>
              <p className="mt-3 whitespace-pre-line leading-relaxed text-(--text-secondary)">
                {course.description ||
                  "This course is designed to take you from fundamentals to advanced concepts through hands-on projects and real-world examples."}
              </p>
            </div>

            {course.whatYouWillLearn.length > 0 && (
              <div className="mt-8 border-t border-(--border) pt-8">
                <h2 className="text-lg font-bold text-(--text-primary)">
                  What you&apos;ll learn
                </h2>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {course.whatYouWillLearn.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-(--text-secondary)"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {course.requirements.length > 0 && (
              <div className="mt-8 border-t border-(--border) pt-8">
                <h2 className="text-lg font-bold text-(--text-primary)">
                  Requirements
                </h2>
                <ul className="mt-4 space-y-2">
                  {course.requirements.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-(--text-secondary)"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {lessons.length > 0 && (
              <div className="mt-8 border-t border-(--border) pt-8">
                <h2 className="text-lg font-bold text-(--text-primary)">
                  Course Curriculum
                </h2>
                <p className="mt-1 text-sm text-(--text-muted)">
                  {lessons.length} {lessons.length === 1 ? "lesson" : "lessons"}
                  {hasPreview && " · Free preview available"}
                </p>

                {/* Preview lesson thakle login chara-i play kora jay */}
                <CoursePreviewCurriculum lessons={lessons} />
              </div>
            )}
          </div>

          {/* Right — Sticky Enroll Card */}
          <div>
            <div className="sticky top-24 rounded-2xl border border-(--border) bg-(--background-card) p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <p className="text-3xl font-bold" style={{ color }}>
                {formatPrice(course)}
              </p>
              {course.discountPrice != null && !course.isFree && (
                <p className="mt-1 text-sm text-(--text-muted) line-through">
                  ${course.price}
                </p>
              )}

              <EnrollButton courseId={course.id} color={color} />

              <div className="mt-6 space-y-3 border-t border-(--border) pt-6 text-sm text-(--text-secondary)">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-(--text-muted)" />
                  {course.totalDuration
                    ? formatTotalDuration(course.totalDuration * 60)
                    : "Lifetime access"}
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 size={16} className="text-(--text-muted)" />
                  {course.level
                    ? `${course.level[0].toUpperCase()}${course.level.slice(1)} level`
                    : "All skill levels"}
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-(--text-muted)" />
                  {course.students.toLocaleString("en-US")} students enrolled
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}