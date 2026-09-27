"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, User } from "lucide-react";

const BOTTOM_NAV_ITEMS = [
  { key: "home", label: "Home", href: "/", icon: Home },
  { key: "courses", label: "My Course", href: "/dashboard/courses", icon: BookOpen },
  { key: "profile", label: "Profile", href: "/dashboard/settings", icon: User },
];

export default function DashboardBottomNav() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-(--border) bg-(--background-card) pb-[env(safe-area-inset-bottom)] lg:hidden"
      aria-label="Dashboard bottom navigation"
    >
      <div className="flex items-stretch justify-around">
        {BOTTOM_NAV_ITEMS.map(({ key, label, href, icon: Icon }) => {
          const active = isActive(href);

          return (
            <Link
              key={key}
              href={href}
              className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-medium transition-colors ${
                active
                  ? "text-(--accent)"
                  : "text-(--text-secondary) hover:text-(--text-primary)"
              }`}
            >
              <Icon size={20} strokeWidth={active ? 2.25 : 1.75} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}