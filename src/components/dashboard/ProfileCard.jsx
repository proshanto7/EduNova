import { User } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-(--border) bg-(--background-card) p-5">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-(--stat-icon-bg)">
        <User size={24} className="text-(--stat-icon-color)" strokeWidth={1.75} />
      </div>

      <div>
        <p className="text-base font-bold text-(--text-primary)">
          Welcome back!
        </p>
        <p className="text-sm text-(--text-secondary)">
          Continue where you left off.
        </p>
      </div>
    </div>
  );
}