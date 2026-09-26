import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCategories } from "@/lib/api";
import { unwrap } from "@/lib/auth-utils";
import { normalizeCategory } from "@/lib/adapters";
import CategoryCard from "./CategoryCard";

async function fetchCategories() {
  try {
    const res = await getCategories({ limit: 5 });
    const data = unwrap(res);
    const list = Array.isArray(data?.categories) ? data.categories : [];
    return list.map(normalizeCategory);
  } catch {
    // Backend na thakle/error hole section ta chup-chap hide hoye jabe
    return [];
  }
}

export default async function CategoriesSection() {
  const categories = await fetchCategories();

  if (categories.length === 0) return null;

  return (
    <section className="bg-(--background) px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-(--accent)">
              Explore Top Courses
            </p>
            <h2 className="text-3xl font-bold text-(--text-primary) md:text-4xl">
              Popular Categories
            </h2>
          </div>

          <Link
            href="/courses"
            className="group flex items-center gap-1.5 text-sm font-semibold text-(--accent) transition-colors hover:text-(--accent-hover)"
          >
            View all courses
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.id || category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
