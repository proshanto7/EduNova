// ======================================================
// PUBLIC ROUTES
// Ei route gulo login chhara-i dekha jabe. Baki shob route protected.
// ======================================================

const PUBLIC_PATHS = [
  "/",
  "/courses",
  "/login",
  "/register",
  "/forgot-password",
  "/verify-email",
];

// /courses/<slug> public, kintu /courses/<slug>/anything protected
const PUBLIC_PATTERNS = [/^\/courses\/[^/]+$/];

export const isPublicRoute = (pathname = "/") => {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  return (
    PUBLIC_PATHS.includes(path) ||
    PUBLIC_PATTERNS.some((pattern) => pattern.test(path))
  );
};

// ======================================================
// ROLE
// ======================================================

export const isStudent = (user) =>
  String(user?.role ?? "").toLowerCase() === "student";

// ======================================================
// API RESPONSE HELPERS
// Backend { data: {...} } ba direct {...} dile duto-i kaj korbe
// ======================================================

export const unwrap = (res) => res?.data ?? res;

export const toList = (res) => {
  const data = unwrap(res);
  if (Array.isArray(data)) return data;
  return data?.courses ?? data?.items ?? data?.results ?? [];
};

// ======================================================
// AUTH PAGES + REDIRECT
// ======================================================

// Login-er por default-e ekhane jabe (tomar profile/dashboard route ta dao)
export const DEFAULT_AFTER_LOGIN = "/dashboard";

// Login kora student ei page gulo dekhbe na, dashboard-e chole jabe
const AUTH_PATHS = ["/login", "/register", "/forgot-password"];

export const isAuthRoute = (pathname = "/") => {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  return AUTH_PATHS.includes(path);
};

// /login?next=/courses/abc hole login-er por sekhane, na hole dashboard-e
export const getSafeNextPath = (fallback = DEFAULT_AFTER_LOGIN) => {
  if (typeof window === "undefined") return fallback;

  const next = new URLSearchParams(window.location.search).get("next");
  const isSafe =
    next &&
    next.startsWith("/") &&
    !next.startsWith("//") &&
    !isAuthRoute(next.split("?")[0]);

  return isSafe ? next : fallback;
};
