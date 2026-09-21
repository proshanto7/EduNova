"use client";

import { useForm } from "react-hook-form";
import { Mail } from "lucide-react";
import StepInput from "@/components/ui/StepInput";
import { forgotPassword } from "@/lib/api";

export default function EmailStep({ onSuccess, onError }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { email: "" } });

  const onSubmit = async (data) => {
    try {
      await forgotPassword(data);
      onSuccess(data.email);
    } catch (err) {
      onError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-(--text-muted)">
          Email Address
        </label>
        <StepInput
          icon={Mail}
          id="email"
          type="email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
          })}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full rounded-xl bg-(--primary) text-sm font-bold text-(--background) transition-all hover:bg-(--primary-hover) disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send OTP"}
      </button>
    </form>
  );
}