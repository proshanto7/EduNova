"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { FOOTER_DATA } from "@/data/footer";

export default function FooterBottomBar({ year }) {
  const pathname = usePathname();
  const { isLoggedIn, mounted } = useAuth();
  const isDashboard = pathname?.startsWith("/dashboard");

  // DashboardBottomNav sudhu logged-in + non-dashboard page e dekhay,
  // tai extra bottom padding-o sudhu tokhoni lagbe
  const needsExtraPadding = mounted && isLoggedIn && !isDashboard;

  return (
    <div
      className={`border-t border-(--border) px-6 py-6 lg:pb-6 ${
        needsExtraPadding ? "pb-20" : "pb-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-xs text-(--text-muted)">
          © {year} {FOOTER_DATA.brand.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {FOOTER_DATA.legal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs text-(--text-muted) transition-colors hover:text-(--accent)"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}