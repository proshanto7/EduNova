import { DASHBOARD_STATS } from "@/data/dashboard";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {DASHBOARD_STATS.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-(--border) bg-(--background-card) p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--stat-icon-bg)">
              <Icon size={18} className="text-(--stat-icon-color)" strokeWidth={1.75} />
            </div>
            <p className="mt-3 text-2xl font-bold text-(--text-primary)">
              {stat.value}
            </p>
            <p className="mt-0.5 text-xs text-(--text-muted)">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}