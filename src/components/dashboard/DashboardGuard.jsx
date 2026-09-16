"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function DashboardGuard({ children }) {
  const { isLoggedIn, mounted } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (mounted && !isLoggedIn) {
      router.push("/login");
    }
  }, [mounted, isLoggedIn, router]);

  if (!mounted || !isLoggedIn) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-background">
        <p className="text-sm text-(--text-muted)">Loading...</p>
      </div>
    );
  }

  return children;
}