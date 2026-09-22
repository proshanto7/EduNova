"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { KeyRound } from "lucide-react";
import StepInput from "@/components/ui/StepInput";
import { verifyResetOtp } from "@/lib/api";
import { useOtpCountdown } from "@/hooks/useOtpCountdown";

const RESET_OTP_SECONDS = 10 * 60; // backend PASSWORD_RESET_OTP_EXPIRES_MS

export default function OtpStep({ email, onSuccess, onError, onResend }) {
  const [resending, setResending] = useState(false);
  const { isExpired, formatted, reset } = useOtpCountdown(RESET_OTP_SECONDS);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { otp: "" } });

  const onSubmit = async (data) => {
    try {
      const res = await verifyResetOtp({ email, otp: data.otp });
      onSuccess(res.data.resetToken);
    } catch (err) {
      onError(err.message);
    }
  };

  const handleResend = async () => {
    setResending(true);
    await onResend();
    reset();
    setResending(false);
  };

  return (
    <div>
      <p className="mb-4 truncate rounded-lg bg-(--border-light) px-3 py-2 text-xs text-(--text-secondary)">
        Sent to{" "}
        <span className="font-medium text-(--text-primary)">{email}</span>
      </p>

      <div className="mb-4 flex items-center justify-between text-xs">
        <span className="text-(--text-muted)">OTP validity</span>
        <span
          className={`font-semibold tabular-nums ${isExpired ? "text-red-500" : "text-(--text-primary)"}`}
        >
          {isExpired ? "Expired" : formatted}
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label
            htmlFor="otp"
            className="mb-1.5 block text-xs font-medium text-(--text-muted)"
          >
            6-digit OTP
          </label>
          <StepInput
            icon={KeyRound}
            id="otp"
            inputMode="numeric"
            maxLength={6}
            placeholder="••••••"
            disabled={isExpired}
            className="tracking-[0.4em] disabled:opacity-50"
            error={errors.otp?.message}
            {...register("otp", {
              required: "OTP is required",
              pattern: { value: /^\d{6}$/, message: "OTP must be 6 digits" },
            })}
          />
        </div>

        {isExpired && (
          <p className="text-xs text-red-500">
            Your OTP has expired. Please request a new one.
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting || isExpired}
          className="h-12 w-full rounded-xl bg-(--primary) text-sm font-bold text-(--background) transition-all hover:bg-(--primary-hover) disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Verifying..." : "Verify OTP"}
        </button>
      </form>

      <button
        onClick={handleResend}
        disabled={resending || !isExpired}
        className={`mt-4 text-xs font-medium transition-colors ${
          resending || !isExpired
            ? "cursor-not-allowed text-(--text-placeholder)"
            : "cursor-pointer text-(--accent) hover:text-(--accent-hover) underline"
        }`}
      >
        {resending
          ? "Resending..."
          : !isExpired
            ? `Resend OTP in ${formatted}`
            : "Resend OTP"}
      </button>
    </div>
  );
}
