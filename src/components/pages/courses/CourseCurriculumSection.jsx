import CoursePreviewCurriculum from "./CoursePreviewCurriculum";

export default function CourseCurriculumSection({ lessons, hasPreview }) {
  if (!lessons.length) return null;

  return (
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
  );
}