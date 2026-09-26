import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getCategoryIcon } from "@/lib/categoryIcons";

export default function CategoryCard({ category }) {
  const Icon = getCategoryIcon(category.slug);
  const countLabel =
    category.courseCount === 1
      ? "1 Course"
      : `${category.courseCount} Courses`;

  return (
    <Link
      href={category.href}
      className="group relative flex h-full flex-col gap-4 rounded-2xl border border-(--border) bg-(--background-card) p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)]"
    >
      {/* Icon */}
      <div
        className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${category.color}1a` }}
      >
        {category.iconUrl ? (
          <Image
            src={category.iconUrl}
            alt={category.name}
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
        ) : (
          <Icon size={26} style={{ color: category.color }} strokeWidth={1.75} />
        )}
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className="text-base font-bold text-(--text-primary)">
          {category.name}
        </h3>
        <p className="mt-1 text-xs text-(--text-muted)">{countLabel}</p>
        <p className="mt-3 text-sm leading-relaxed text-(--text-secondary)">
          {category.description}
        </p>
      </div>

      {/* Explore Link */}
      <div
        className="mt-1 flex items-center gap-1.5 text-sm font-semibold transition-colors"
        style={{ color: category.color }}
      >
        Explore
        <ArrowRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-1.5"
        />
      </div>

      {/* Bottom accent line on hover */}
      <span
        className="absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
        style={{ backgroundColor: category.color }}
      />
    </Link>
  );
}