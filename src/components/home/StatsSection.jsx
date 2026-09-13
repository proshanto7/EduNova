"use client";

import { useEffect, useRef, useState } from "react";
import { Users, BookOpen, GraduationCap, Star } from "lucide-react";

const STATS_DATA = [
  { icon: Users, value: 50000, suffix: "+", label: "Active Students" },
  { icon: BookOpen, value: 1200, suffix: "+", label: "Online Courses" },
  { icon: GraduationCap, value: 300, suffix: "+", label: "Expert Instructors" },
  { icon: Star, value: 4.8, suffix: "/5", decimals: 1, label: "Student Rating" },
];

export default function StatsSection() {
  return (
    <section className="bg-background px-6 py-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-(--border) bg-(--background-card) shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS_DATA.map((stat, index) => {
            const total = STATS_DATA.length;
            const isLastOverall = index === total - 1;
            const isLeftColumnMobile = index % 2 === 0;
            const isTopRowMobile = index < total - (total % 2 === 0 ? 2 : 1);

            return (
              <StatCard
                key={stat.label}
                stat={stat}
                className={`
                  ${isLeftColumnMobile ? "border-r border-(--border)" : ""}
                  ${isTopRowMobile ? "border-b border-(--border)" : ""}
                  lg:border-b-0
                  ${!isLastOverall ? "lg:border-r lg:border-(--border)" : "lg:border-r-0"}
                `}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, className }) {
  const Icon = stat.icon;

  return (
    <div className={`flex flex-col items-center gap-3 px-6 py-8 text-center ${className}`}>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-(--stat-icon-bg)">
        <Icon size={24} className="text-(--stat-icon-color)" strokeWidth={1.75} />
      </div>

      <div>
        <p className="text-2xl font-bold text-(--text-primary)">
          <CountUp end={stat.value} decimals={stat.decimals ?? 0} suffix={stat.suffix} />
        </p>
        <p className="mt-1 text-sm text-(--text-secondary)">{stat.label}</p>
      </div>
    </div>
  );
}

function CountUp({ end, decimals = 0, suffix = "", duration = 1800 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const animate = () => {
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };

    requestAnimationFrame(step);
  };

  const formatted =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString("en-US");

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}