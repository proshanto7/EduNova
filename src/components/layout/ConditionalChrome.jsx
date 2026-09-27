"use client";

import { usePathname } from "next/navigation";
import DashboardBottomNav from "@/components/dashboard/DashboardBottomNav";
import { useAuth } from "@/context/AuthContext";

export default function ConditionalChrome({ navbar, footer, children }) {
  const pathname = usePathname();
  const { isLoggedIn, mounted } = useAuth();
  const isDashboard = pathname?.startsWith("/dashboard");

  const showPublicBottomNav = mounted && isLoggedIn && !isDashboard;

  return (
    <>
      {navbar}
      {children}
      {footer}
      {showPublicBottomNav && <DashboardBottomNav />}
    </>
  );
}