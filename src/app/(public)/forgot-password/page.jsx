"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/ui/AuthHeader";
import StepProgress from "@/components/ui/StepProgress";
import EmailStep from "@/components/pages/forgot-password/EmailStep";
import OtpStep from "@/components/pages/forgot-password/OtpStep";
import NewPasswordStep from "@/components/pages/forgot-password/NewPasswordStep";
import { forgotPassword } from "@/lib/api";

const STEPS = { EMAIL: 1, OTP: 2, NEW_PASSWORD: 3 };

const STEP_META = {
  [STEPS.EMAIL]: { title: "Forgot Password?", subtitle: "Enter your email to receive a reset OTP." },
  [STEPS.OTP]: { title: "Verify OTP", subtitle: "Enter the 6-digit code sent to your email." },
  [STEPS.NEW_PASSWORD]: { title: "Set New Password", subtitle: "Choose a strong new password." },
};

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState(STEPS.EMAIL);
  const [email, setEmail] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [serverError, setServerError] = useState("");
  const [info, setInfo] = useState("");

  return (
    <AuthCard>
      <StepProgress currentStep={step} totalSteps={3} />

      <AuthHeader title={STEP_META[step].title} subtitle={STEP_META[step].subtitle} error={serverError} info={info}>
        {step === STEPS.EMAIL && (
          <EmailStep
            onSuccess={(submittedEmail) => {
              setEmail(submittedEmail);
              setInfo("OTP sent to your email.");
              setServerError("");
              setStep(STEPS.OTP);
            }}
            onError={setServerError}
          />
        )}

        {step === STEPS.OTP && (
          <OtpStep
            email={email}
            onSuccess={(token) => {
              setResetToken(token);
              setInfo("");
              setServerError("");
              setStep(STEPS.NEW_PASSWORD);
            }}
            onError={setServerError}
            onResend={async () => {
              setServerError("");
              try {
                await forgotPassword({ email });
                setInfo("OTP resent to your email.");
              } catch (err) {
                setServerError(err.message);
              }
            }}
          />
        )}

        {step === STEPS.NEW_PASSWORD && (
          <NewPasswordStep resetToken={resetToken} onSuccess={() => router.push("/login")} onError={setServerError} />
        )}
      </AuthHeader>
    </AuthCard>
  );
}