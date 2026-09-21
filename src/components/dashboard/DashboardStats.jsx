"use client";

import { BookOpen, Clock, TrendingUp, Trophy } from "lucide-react";
import { useMyCourses } from "@/hooks/useStudentData";

export default function DashboardStats() {
  const { courses, loading } = useMyCourses();

  const completed = courses.filter((course) => course.completed).length;
  const averageProgress = courses.length
    ? Math.round(
        courses.reduce((sum, course) => sum + course.progress, 0) /
          courses.length
      )
    : 0;

  const stats = [
    { label: "Enrolled Courses", value: courses.length, icon: BookOpen },
    { label: "In Progress", value: courses.length - completed, icon: Clock },
    { label: "Completed", value: completed, icon: Trophy },
    { label: "Average Progress", value: `${averageProgress}%`, icon: TrendingUp },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => {
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
              {loading ? "–" : stat.value}
            </p>
            <p className="mt-0.5 text-xs text-(--text-muted)">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
