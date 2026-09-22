"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { registerUser } from "@/lib/api";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { name: "", email: "", password: "", confirmPassword: "", terms: false },
  });

  const password = watch("password");

  const onSubmit = async (data) => {
    setServerError("");
    try {
      await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      router.push(`/verify-otp?email=${encodeURIComponent(data.email)}`);
    } catch (err) {
      setServerError(err.message);
    }
  };

  return (
    <>
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-(--text-primary)">Create your account</h1>
        <p className="mt-1.5 text-sm text-(--text-secondary)">
          Join thousands of learners building real skills.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {/* Name */}
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-(--text-muted)">
            Full Name
          </label>
          <div className="relative">
            <User
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-(--text-placeholder)"
            />
            <input
              id="name"
              type="text"
              placeholder="Your name"
              {...register("name", {
                required: "Name is required",
                maxLength: { value: 100, message: "Name is too long" },
              })}
              className="h-11 w-full rounded-lg border border-(--border-light) bg-(--background-input) pl-10 pr-3.5 text-sm text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/10"
            />
          </div>
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-(--text-muted)">
            Email Address
          </label>
          <div className="relative">
            <Mail
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-(--text-placeholder)"
            />
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
              })}
              className="h-11 w-full rounded-lg border border-(--border-light) bg-(--background-input) pl-10 pr-3.5 text-sm text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/10"
            />
          </div>
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="mb-1.5 block text-xs font-medium text-(--text-muted)">
            Password
          </label>
          <div className="relative">
            <Lock
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-(--text-placeholder)"
            />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Must be at least 8 characters" },
              })}
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
          {errors.password ? (
            <p className="mt-1.5 text-[11px] text-red-500">{errors.password.message}</p>
          ) : (
            <p className="mt-1.5 text-[11px] text-(--text-muted)">Must be at least 8 characters</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword" className="mb-1.5 block text-xs font-medium text-(--text-muted)">
            Confirm Password
          </label>
          <div className="relative">
            <Lock
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-(--text-placeholder)"
            />
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) => value === password || "Passwords do not match",
              })}
              className="h-11 w-full rounded-lg border border-(--border-light) bg-(--background-input) pl-10 pr-10 text-sm text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-(--text-placeholder) transition-colors hover:text-(--text-primary)"
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2">
          <input
            id="terms"
            type="checkbox"
            {...register("terms", { required: "You must accept the terms to continue" })}
            className="mt-0.5 h-4 w-4 cursor-pointer rounded border-(--border-light) accent-(--accent)"
          />
          <label htmlFor="terms" className="cursor-pointer text-xs leading-relaxed text-(--text-secondary)">
            I agree to the{" "}
            <Link href="/terms" className="font-medium text-(--accent) hover:text-(--accent-hover)">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="font-medium text-(--accent) hover:text-(--accent-hover)">
              Privacy Policy
            </Link>
          </label>
        </div>
        {errors.terms && <p className="text-xs text-red-500">{errors.terms.message}</p>}

        {serverError && (
          <p role="alert" className="rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-500">
            {serverError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="h-11 w-full rounded-full bg-(--accent) text-sm font-bold text-(--accent-text) transition-all duration-200 hover:-translate-y-px hover:bg-(--accent-hover) active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-(--text-secondary)">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-(--accent) hover:text-(--accent-hover)">
          Log in
        </Link>
      </p>
    </>
  );
}