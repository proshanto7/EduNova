"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useLogin } from "@/hooks/useAuthApi";
import { getSafeNextPath } from "@/lib/auth-utils";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { submit, loading, error } = useLogin();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    const result = await submit({ email, password });

    if (result.ok) {
      router.replace(getSafeNextPath());
    }
  };

  return (
    <>
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-(--text-primary)">
          Welcome back
        </h1>
        <p className="mt-1.5 text-sm text-(--text-secondary)">
          Log in to continue your learning journey.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div
            role="alert"
            className="rounded-lg border border-red-500/30 bg-red-500/10 px-3.5 py-2.5 text-sm text-red-500"
          >
            {error}
          </div>
        )}

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-medium text-(--text-muted)"
          >
            Email Address
          </label>
          <div className="relative">
            <Mail
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-(--text-placeholder)"
            />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              disabled={loading}
              className="h-11 w-full rounded-lg border border-(--border-light) bg-(--background-input) pl-10 pr-3.5 text-sm text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/10 disabled:opacity-60"
            />
          </div>
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-xs font-medium text-(--text-muted)"
            >
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-xs font-medium text-(--accent) hover:text-(--accent-hover)"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-(--text-placeholder)"
            />
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              required
              disabled={loading}
              className="h-11 w-full rounded-lg border border-(--border-light) bg-(--background-input) pl-10 pr-10 text-sm text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/10 disabled:opacity-60"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-(--text-placeholder) transition-colors hover:text-(--text-primary)"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            disabled={loading}
            className="h-4 w-4 cursor-pointer rounded border-(--border-light) accent-(--accent)"
          />
          <label
            htmlFor="remember"
            className="cursor-pointer text-xs text-(--text-secondary)"
          >
            Remember me
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="h-11 w-full rounded-full bg-(--accent) text-sm font-bold text-(--accent-text) transition-all duration-200 hover:-translate-y-px hover:bg-(--accent-hover) active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-(--text-secondary)">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-(--accent) hover:text-(--accent-hover)"
        >
          Sign up
        </Link>
      </p>
    </>
  );
}
