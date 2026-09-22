"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { KeyRound } from "lucide-react";
import StepInput from "@/components/ui/StepInput";
import { useAuth } from "@/context/AuthContext";
import { verifyEmailOtp, resendVerification } from "@/lib/api";
import { useOtpCountdown } from "@/hooks/useOtpCountdown";

const EMAIL_OTP_SECONDS = 2 * 60; // backend-এর EMAIL_OTP_EXPIRES_MS এর সাথে মিলিয়ে

export default function VerifyOtpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();
  const email = searchParams.get("email") || "";

  const [serverError, setServerError] = useState("");
  const [info, setInfo] = useState("");
  const [resending, setResending] = useState(false);
  const { isExpired, formatted, reset } = useOtpCountdown(EMAIL_OTP_SECONDS);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { otp: "" } });

  const onSubmit = async (data) => {
    setServerError("");
    try {
      const res = await verifyEmailOtp({ email, otp: data.otp });
      login({ token: res.data.token, user: res.data.user });
      router.push("/dashboard");
    } catch (err) {
      setServerError(err.message);
    }
  };

  const handleResend = async () => {
    setServerError("");
    setInfo("");
    setResending(true);
    try {
      await resendVerification({ email });
      setInfo("OTP resent to your email.");
      reset();
    } catch (err) {
      setServerError(err.message);
    } finally {
      setResending(false);
    }
  };

  if (!email) {
    return (
      <p className="text-center text-sm text-(--text-secondary)">
        No email found. Please{" "}
        <a href="/register" className="font-medium text-(--accent) hover:text-(--accent-hover)">
          register
        </a>{" "}
        again.
      </p>
    );
  }

  return (
    <>
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-(--text-primary)">Verify your email</h1>
        <p className="mt-1.5 text-sm text-(--text-secondary)">
          Enter the 6-digit code sent to{" "}
          <span className="font-medium text-(--text-primary)">{email}</span>
        </p>
      </div>

      <div className="mb-4 flex items-center justify-between text-xs">
        <span className="text-(--text-muted)">OTP validity</span>
        <span className={`font-semibold tabular-nums ${isExpired ? "text-red-500" : "text-(--text-primary)"}`}>
          {isExpired ? "Expired" : formatted}
        </span>
      </div>

      {serverError && (
        <p role="alert" className="mb-4 rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-500">
          {serverError}
        </p>
      )}
      {info && (
        <p className="mb-4 rounded-lg bg-(--success)/10 px-3 py-2 text-xs text-(--success)">{info}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label htmlFor="otp" className="mb-1.5 block text-xs font-medium text-(--text-muted)">
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

        <button
          type="submit"
          disabled={isSubmitting || isExpired}
          className="h-11 w-full rounded-full bg-(--accent) text-sm font-bold text-(--accent-text) transition-all duration-200 hover:-translate-y-px hover:bg-(--accent-hover) active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {isSubmitting ? "Verifying..." : "Verify Email"}
        </button>
      </form>

      <button
        onClick={handleResend}
        disabled={resending}
        className="mt-4 w-full text-center text-xs font-medium text-(--accent) transition-colors hover:text-(--accent-hover) disabled:opacity-60"
      >
        {resending ? "Resending..." : "Didn't get the code? Resend OTP"}
      </button>
    </>
  );
}