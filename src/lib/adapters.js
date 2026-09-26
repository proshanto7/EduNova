import { unwrap } from "@/lib/auth-utils";
import { pickCourseImage, resolveImageUrl } from "@/lib/image-utils";

// ======================================================
// ADAPTERS
// Backend-er response -> frontend-er shape.
//
// Backend contract (apiResponse -> { success, message, data }):
//   GET /enrollment/my         data: { enrollments: [{ course: { _id, title, slug, image, price, level }, status }] }
//   GET /progress/my-overview  data: { overview: [{ courseId, totalLessons, completedCount, percentage, completedLessons: [{ lessonId, completedAt }] }] }
//   GET /progress/course/:id   data: { courseId, totalLessons, completedCount, percentage, completedLessons }
//   GET /lesson/course/:id     data: { lessons: [{ _id, title, description, order, isPreview, duration, video | null, locked }] }
//   POST /progress/complete    body: { lessonId }
// ======================================================

export const idOf = (value) =>
  value && typeof value === "object"
    ? String(value._id ?? value.id ?? "")
    : String(value ?? "");

export const errorMessage = (err, fallback) =>
  err?.response?.data?.message || err?.data?.message || err?.message || fallback;

export const toPercent = (value) => {
  const n = Number(value);
  return Number.isFinite(n) ? Math.min(100, Math.max(0, Math.round(n))) : 0;
};

// { data: { enrollments: [...] } } ba direct array, dui-ta-i handle kore
export const listFrom = (res, key) => {
  const data = unwrap(res);
  const list = data?.[key] ?? data;
  return Array.isArray(list) ? list : [];
};

// ---------- Progress ----------

// Course-er shesh lesson complete korar somoy (certificate-er "Issued on")
const latestCompletedAt = (progress) => {
  const times = (progress?.completedLessons ?? [])
    .map((item) => new Date(item?.completedAt).getTime())
    .filter(Number.isFinite);

  return times.length ? new Date(Math.max(...times)).toISOString() : null;
};

// overview response -> Map(courseId -> progress)
export const progressMapFrom = (res) => {
  const map = new Map();
  listFrom(res, "overview").forEach((entry) => {
    const id = idOf(entry?.courseId);
    if (id) map.set(id, entry);
  });
  return map;
};

// course progress response -> Set(lessonId)
export const completedIdsFrom = (res) => {
  const data = unwrap(res);
  const ids = new Set();

  (Array.isArray(data?.completedLessons) ? data.completedLessons : []).forEach(
    (item) => {
      const id = idOf(item?.lessonId ?? item);
      if (id) ids.add(id);
    }
  );

  return ids;
};

// ---------- Enrollment -> student-er course ----------

export const normalizeEnrollment = (enrollment, progressByCourse) => {
  const course =
    enrollment?.course && typeof enrollment.course === "object"
      ? enrollment.course
      : {};

  const id = idOf(enrollment?.course);
  const progress = progressByCourse.get(id);
  const percentage = toPercent(progress?.percentage);
  const instructor = course.instructor;

  return {
    id,
    slug: course.slug ?? "",
    title: course.title ?? "Untitled course",
    level: course.level ?? "",
    // Backend instructor populate korle nam ashe, na korle khali thake
    instructor: typeof instructor === "object" ? instructor?.name ?? "" : "",
    image: pickCourseImage(course),
    progress: percentage,
    totalLessons: Number(progress?.totalLessons) || 0,
    completedCount: Number(progress?.completedCount) || 0,
    completed: percentage >= 100,
    completedAt: percentage >= 100 ? latestCompletedAt(progress) : null,
  };
};

// ---------- Public catalog: Category / Course ----------

// GET /categories, /categories/slug/:slug -> { _id, name, slug, description, icon:{url}, color, courseCount }
export const normalizeCategory = (category) => ({
  id: idOf(category),
  slug: category?.slug ?? "",
  name: category?.name ?? "",
  description: category?.description ?? "",
  color: category?.color || "#7d7f4c",
  iconUrl: resolveImageUrl(category?.icon),
  courseCount: Number(category?.courseCount) || 0,
  href: category?.slug ? `/courses/${category.slug}` : "/courses",
});

// GET /courses, /courses/slug/:slug -> populated category + instructor
export const normalizeCourse = (course) => {
  const category =
    course?.category && typeof course.category === "object"
      ? course.category
      : null;
  const instructor = course?.instructor;

  return {
    id: idOf(course),
    slug: course?.slug ?? "",
    title: course?.title ?? "Untitled course",
    description: course?.description ?? "",
    instructor: typeof instructor === "object" ? instructor?.name ?? "" : "",
    instructorAvatar:
      typeof instructor === "object" ? resolveImageUrl(instructor?.avatar) : "",
    level: course?.level ?? "beginner",
    language: course?.language ?? "",
    price: Number(course?.price) || 0,
    discountPrice:
      course?.discountPrice != null ? Number(course.discountPrice) : null,
    isFree: Boolean(course?.isFree),
    rating: Number(course?.rating) || 0,
    students: Number(course?.students) || 0,
    totalDuration: Number(course?.totalDuration) || 0,
    totalLectures: Number(course?.totalLectures) || 0,
    requirements: Array.isArray(course?.requirements)
      ? course.requirements
      : [],
    whatYouWillLearn: Array.isArray(course?.whatYouWillLearn)
      ? course.whatYouWillLearn
      : [],
    image: pickCourseImage(course),
    category: category
      ? {
          id: idOf(category),
          name: category.name ?? "",
          slug: category.slug ?? "",
          color: category.color || "#7d7f4c",
          iconUrl: resolveImageUrl(category.icon),
        }
      : null,
  };
};

// ---------- Lesson ----------

// Access na thakle backend video: null ar locked: true pathay
export const normalizeLesson = (lesson, index = 0) => ({
  id: idOf(lesson),
  title: lesson?.title || `Lesson ${index + 1}`,
  description: lesson?.description || "",
  order: Number(lesson?.order) || index + 1,
  duration: Number(lesson?.duration ?? lesson?.video?.duration) || 0, // seconds
  videoUrl: resolveImageUrl(lesson?.video?.url ?? ""),
  isPreview: Boolean(lesson?.isPreview),
  locked: Boolean(lesson?.locked),
});
