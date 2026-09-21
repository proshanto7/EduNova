"use client";

import { useAuth } from "@/context/AuthContext";
import { pickUserAvatar } from "@/lib/image-utils";
import UserAvatar from "@/components/dashboard/UserAvatar";

export default function ProfileCard() {
  const { user } = useAuth();

  const firstName = String(user?.name ?? "").trim().split(" ")[0];

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-(--border) bg-(--background-card) p-5">
      <UserAvatar src={pickUserAvatar(user)} size={56} iconSize={24} />

      <div className="min-w-0">
        <p className="truncate text-base font-bold text-(--text-primary)">
          {firstName ? `Welcome back, ${firstName}!` : "Welcome back!"}
        </p>
        <p className="truncate text-sm text-(--text-secondary)">
          {user?.email || "Continue where you left off."}
        </p>
      </div>
    </div>
  );
}
