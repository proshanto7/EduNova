import { Suspense } from "react";
import AuthCard from "@/components/auth/AuthCard";
import VerifyOtpForm from "@/components/pages/verify-otp/VerifyOtpForm";

export const metadata = {
  title: "Verify Email",
  description: "Verify your email to activate your account.",
};

export default function VerifyOtpPage() {
  return (
    <AuthCard>
      <Suspense fallback={<p className="text-center text-sm text-(--text-secondary)">Loading...</p>}>
        <VerifyOtpForm />
      </Suspense>
    </AuthCard>
  );
}