"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { useLogout } from "@/hooks/useAuthApi";
import { DASHBOARD_NAV } from "@/data/dashboard";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { submit: handleLogout, loading } = useLogout();

  return (
    <aside className="w-full shrink-0 lg:w-64">
      <nav className="rounded-2xl border border-(--border) bg-(--background-card) p-4">
        <div className="flex flex-row gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
          {DASHBOARD_NAV.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.key}
                href={item.href}
                className={`shrink-0 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-(--accent) text-(--accent-text)"
                    : "text-(--text-secondary) hover:bg-background"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-4 border-t border-(--border) pt-4 lg:mt-2">
          <button
            type="button"
            onClick={handleLogout}
            disabled={loading}
            className="flex w-full items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-(--text-secondary) transition-colors hover:bg-background hover:text-red-500 disabled:opacity-60"
          >
            <LogOut size={16} />
            Log Out
          </button>
        </div>
      </nav>
    </aside>
  );
}
