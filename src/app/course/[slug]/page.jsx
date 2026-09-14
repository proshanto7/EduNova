import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Star, Users, ChevronRight, Clock, BarChart3 } from "lucide-react";
import { getCourseBySlug, COURSES_DATA } from "@/data/courses";
import { getCategoryBySlug } from "@/data/categories";

// শুধু valid slug format allow — lowercase letters, numbers, hyphen
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function generateStaticParams() {
  return COURSES_DATA.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  if (!SLUG_PATTERN.test(slug)) return {};

  const course = getCourseBySlug(slug);
  if (!course) return {};

  return {
    title: course.title,
    description: `Learn from ${course.instructor} — ${course.title}`,
  };
}

export default async function CourseDetailsPage({ params }) {
  const { slug } = await params;

  // 1. Format validate করলাম — malformed/malicious input সরাসরি reject
  if (!SLUG_PATTERN.test(slug)) {
    notFound();
  }

  // 2. Data lookup — কোনো user input সরাসরি query/render এ যাচ্ছে না,
  //    শুধু predefined array থেকে match খোঁজা হচ্ছে
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const category = getCategoryBySlug(course.categorySlug);

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
            {category && (
              <>
                <ChevronRight size={12} />
                <Link
                  href={category.href}
                  className="hover:text-(--text-primary)"
                >
                  {category.name}
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
            <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80">
              <Image
                src={course.image}
                alt={course.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
            </div>

            <h1 className="mt-6 text-2xl font-bold text-(--text-primary) md:text-3xl">
              {course.title}
            </h1>

            <p className="mt-2 text-sm text-(--text-secondary)">
              By <span className="font-semibold text-(--text-primary)">{course.instructor}</span>
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-(--text-muted)">
              <span className="flex items-center gap-1.5">
                <Star size={16} className="fill-current text-amber-400" />
                {course.rating} Rating
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={16} />
                {course.students} Students
              </span>
              {category && (
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: `${category.color}1a`,
                    color: category.color,
                  }}
                >
                  {category.name}
                </span>
              )}
            </div>

            <div className="mt-8 border-t border-(--border) pt-8">
              <h2 className="text-lg font-bold text-(--text-primary)">
                About this course
              </h2>
              <p className="mt-3 leading-relaxed text-(--text-secondary)">
                {category?.description ||
                  "This course is designed to take you from fundamentals to advanced concepts through hands-on projects and real-world examples."}{" "}
                You&apos;ll learn practical skills taught by an experienced
                instructor, with lifetime access to all course materials.
              </p>
            </div>
          </div>

          {/* Right — Sticky Enroll Card */}
          <div>
            <div className="sticky top-24 rounded-2xl border border-(--border) bg-(--background-card) p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <p
                className="text-3xl font-bold"
                style={{ color: category?.color || "var(--accent)" }}
              >
                {course.price}
              </p>

              <button
                type="button"
                className="mt-5 w-full rounded-full py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: category?.color || "var(--accent)" }}
              >
                Enroll Now
              </button>

              <div className="mt-6 space-y-3 border-t border-(--border) pt-6 text-sm text-(--text-secondary)">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-(--text-muted)" />
                  Lifetime access
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 size={16} className="text-(--text-muted)" />
                  All skill levels
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-(--text-muted)" />
                  {course.students} students enrolled
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}