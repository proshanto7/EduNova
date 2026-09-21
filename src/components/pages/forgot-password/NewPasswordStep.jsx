"use client";

import { useForm } from "react-hook-form";
import { Lock } from "lucide-react";
import StepInput from "@/components/ui/StepInput";
import { resetPassword } from "@/lib/api";

export default function NewPasswordStep({ resetToken, onSuccess, onError }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { newPassword: "" } });

  const onSubmit = async (data) => {
    try {
      await resetPassword({ resetToken, newPassword: data.newPassword });
      onSuccess();
    } catch (err) {
      onError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <label htmlFor="newPassword" className="mb-1.5 block text-xs font-medium text-(--text-muted)">
          New Password
        </label>
        <StepInput
          icon={Lock}
          id="newPassword"
          type="password"
          placeholder="At least 8 characters"
          error={errors.newPassword?.message}
          {...register("newPassword", {
            required: "New password is required",
            minLength: { value: 8, message: "Password must be at least 8 characters" },
          })}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full rounded-xl bg-(--primary) text-sm font-bold text-(--background) transition-all hover:bg-(--primary-hover) disabled:opacity-60"
      >
        {isSubmitting ? "Resetting..." : "Reset Password"}
      </button>
    </form>
  );
}