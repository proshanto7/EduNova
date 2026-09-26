export function CourseAbout({ description }) {
  return (
    <div className="mt-8 border-t border-(--border) pt-8">
      <h2 className="text-lg font-bold text-(--text-primary)">
        About this course
      </h2>
      <p className="mt-3 whitespace-pre-line leading-relaxed text-(--text-secondary)">
        {description ||
          "This course is designed to take you from fundamentals to advanced concepts through hands-on projects and real-world examples."}
      </p>
    </div>
  );
}

export function CourseLearningPoints({ items, color }) {
  if (!items.length) return null;
  return (
    <div className="mt-8 border-t border-(--border) pt-8">
      <h2 className="text-lg font-bold text-(--text-primary)">
        What you&apos;ll learn
      </h2>
      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {items.map((item, index) => (
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
  );
}

export function CourseRequirements({ items, color }) {
  if (!items.length) return null;
  return (
    <div className="mt-8 border-t border-(--border) pt-8">
      <h2 className="text-lg font-bold text-(--text-primary)">
        Requirements
      </h2>
      <ul className="mt-4 space-y-2">
        {items.map((item, index) => (
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
  );
}