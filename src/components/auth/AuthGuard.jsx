"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  getSafeNextPath,
  isAuthRoute,
  isPublicRoute,
  isStudent,
} from "@/lib/auth-utils";

export default function AuthGuard({ children }) {
  const { user, token, loading, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const isPublic = isPublicRoute(pathname);
  const isAuthPage = isAuthRoute(pathname);
  const allowed = Boolean(token) && isStudent(user);

  useEffect(() => {
    if (loading) return;

    // Purano admin/teacher data localStorage-e thakle clear kore dao
    if (token && !isStudent(user)) {
      logout();
      return;
    }

    // Login kora student login/register page-e thakbe na
    if (allowed && isAuthPage) {
      router.replace(getSafeNextPath());
      return;
    }

    if (!isPublic && !allowed) {
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
    }
  }, [loading, token, user, isPublic, isAuthPage, allowed, pathname, router, logout]);

  if (loading) return null;
  if (!isPublic && !allowed) return null;
  if (isAuthPage && allowed) return null; // login form-er flash jate na hoy

  return children;
}
