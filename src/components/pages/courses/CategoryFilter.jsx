"use client";

import Link from "next/link";

export default function CategoryFilter({ categories, activeSlug }) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      <Link
        href="/courses"
        className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
          !activeSlug
            ? "border-(--accent) bg-(--accent) text-(--accent-text)"
            : "border-(--border) text-(--text-secondary) hover:border-(--accent)"
        }`}
      >
        All
      </Link>

      {categories.map((category) => {
        const isActive = activeSlug === category.slug;

        return (
          <Link
            key={category.slug}
            href={`/courses?category=${category.slug}`}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              isActive
                ? "border-transparent text-white"
                : "border-(--border) text-(--text-secondary) hover:border-(--accent)"
            }`}
            style={isActive ? { backgroundColor: category.color } : undefined}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}