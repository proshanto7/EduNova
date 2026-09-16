"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
        {/* Email */}
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
              placeholder="you@example.com"
              required
              className="h-11 w-full rounded-lg border border-(--border-light) bg-(--background-input) pl-10 pr-3.5 text-sm text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/10"
            />
          </div>
        </div>

        {/* Password */}
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
              placeholder="Enter your password"
              required
              className="h-11 w-full rounded-lg border border-(--border-light) bg-(--background-input) pl-10 pr-10 text-sm text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/10"
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

        {/* Remember me */}
        <div className="flex items-center gap-2">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="h-4 w-4 cursor-pointer rounded border-(--border-light) accent-(--accent)"
          />
          <label
            htmlFor="remember"
            className="cursor-pointer text-xs text-(--text-secondary)"
          >
            Remember me
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="h-11 w-full rounded-full bg-(--accent) text-sm font-bold text-(--accent-text) transition-all duration-200 hover:-translate-y-px hover:bg-(--accent-hover) active:translate-y-0"
        >
          Log In
        </button>

        {submitted && (
          <p role="status" className="text-center text-xs text-(--success)">
            Logged in successfully!
          </p>
        )}
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