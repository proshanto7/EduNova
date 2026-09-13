import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIES_DATA } from "@/data/categories";
import CategoryCard from "./CategoryCard";

export default function CategoriesSection() {
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
          {CATEGORIES_DATA.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}