import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({ category }) {
  const Icon = category.icon;

  return (
    <Link
      href={category.href}
      className="group relative flex flex-col gap-4 rounded-2xl border border-(--border) bg-(--background-card) p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)]"
    >
      {/* Icon */}
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${category.color}1a` }}
      >
        <Icon size={26} style={{ color: category.color }} strokeWidth={1.75} />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-base font-bold text-(--text-primary)">
          {category.name}
        </h3>
        <p className="mt-1 text-xs text-(--text-muted)">{category.count}</p>
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