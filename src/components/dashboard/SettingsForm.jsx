"use client";

import { useEffect, useRef, useState } from "react";
import {
  User,
  Mail,
  Lock,
  Camera,
  Phone,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useChangePassword, useUpdateProfile } from "@/hooks/useAuthApi";
import { pickUserAvatar } from "@/lib/image-utils";
import UserAvatar from "@/components/dashboard/UserAvatar";
import StepInput from "@/components/ui/StepInput";
import { useOtpCountdown } from "@/hooks/useOtpCountdown";
import { resendVerification, verifyEmailOtp } from "@/lib/api";

// Backend (multer) je field name-e file expect kore, sheta ekhane dao
const AVATAR_FIELD = "avatar";
const MAX_AVATAR_MB = 2;
const EMAIL_OTP_SECONDS = 2 * 60; // backend EMAIL_OTP_EXPIRES_MS

const inputBase =
  "h-11 w-full rounded-lg border border-(--border-light) bg-(--background-input) pl-10 pr-3.5 text-sm text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/10";

const statusStyles = {
  success: "text-(--success)",
  error: "text-red-500",
  info: "text-(--text-muted)",
};

export default function SettingsForm() {
  const { user, updateUser, login } = useAuth();
  const updateProfile = useUpdateProfile();
  const changePassword = useChangePassword();
  const fileInputRef = useRef(null);

  const [newPassword, setNewPassword] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");
  const [status, setStatus] = useState(null); // { type: "success" | "error" | "info", text }

  // ---------------- Email verification ----------------
  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [verifyStatus, setVerifyStatus] = useState(null);
  const {
    isExpired,
    formatted,
    reset: resetCountdown,
  } = useOtpCountdown(EMAIL_OTP_SECONDS);

  const saving = updateProfile.loading || changePassword.loading;

  // Select kora photo-r local preview
  useEffect(() => {
    if (!avatarFile) {
      setAvatarPreview("");
      return;
    }
    const url = URL.createObjectURL(avatarFile);
    setAvatarPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [avatarFile]);

  const showStatus = (type, text) => {
    setStatus({ type, text });
    if (type !== "error") setTimeout(() => setStatus(null), 2500);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    e.target.value = ""; // same file abar select korle-o change trigger hobe
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      showStatus("error", "Choose an image file (JPG, PNG or WebP).");
      return;
    }
    if (file.size > MAX_AVATAR_MB * 1024 * 1024) {
      showStatus("error", `Image must be ${MAX_AVATAR_MB} MB or smaller.`);
      return;
    }

    setStatus(null);
    setAvatarFile(file);
  };

  // ---------------- Email verification handlers ----------------
  const handleSendOtp = async () => {
    setVerifyStatus(null);
    setSendingOtp(true);
    try {
      await resendVerification({ email: user.email });
      setOtpSent(true);
      resetCountdown();
      setVerifyStatus({ type: "info", text: "OTP sent to your email." });
    } catch (err) {
      setVerifyStatus({ type: "error", text: err.message });
    } finally {
      setSendingOtp(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (otpValue.length !== 6) {
      setVerifyStatus({ type: "error", text: "Enter the 6-digit OTP." });
      return;
    }

    setVerifyingOtp(true);
    setVerifyStatus(null);
    try {
      const res = await verifyEmailOtp({ email: user.email, otp: otpValue });

      // notun token ashe (verify: true soho), tai context refresh korte hobe
      login({ token: res.data.token, user: res.data.user });
      updateUser({ isVerified: true });

      setOtpSent(false);
      setOtpValue("");
      setVerifyStatus(null);
      showStatus("success", "Email verified successfully!");
    } catch (err) {
      setVerifyStatus({ type: "error", text: err.message });
    } finally {
      setVerifyingOtp(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (saving) return;

    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("fullName") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const currentPassword = String(formData.get("currentPassword") ?? "");

    if (!name) {
      showStatus("error", "Enter your name.");
      return;
    }

    const nameChanged = name !== String(user?.name ?? "");
    const phoneChanged = phone !== String(user?.phone ?? "");
    const avatarChanged = Boolean(avatarFile);
    const passwordChanged = newPassword.length > 0;

    if (!nameChanged && !phoneChanged && !avatarChanged && !passwordChanged) {
      showStatus("info", "No changes to save.");
      return;
    }

    if (passwordChanged && !currentPassword) {
      showStatus("error", "Enter your current password to set a new one.");
      return;
    }

    if (nameChanged || phoneChanged || avatarChanged) {
      // Photo thakle multipart (FormData), na hole normal JSON
      let payload = { name, phone };
      if (avatarFile) {
        payload = new FormData();
        payload.append("name", name);
        payload.append("phone", phone);
        payload.append(AVATAR_FIELD, avatarFile);
      }

      const result = await updateProfile.submit(payload);
      if (!result.ok) {
        showStatus("error", result.error);
        return;
      }

      const fresh = result.data;
      updateUser(
        fresh && typeof fresh === "object"
          ? { name, phone, ...fresh }
          : { name, phone },
      );
      setAvatarFile(null);
    }

    if (passwordChanged) {
      const result = await changePassword.submit({
        currentPassword,
        newPassword,
      });
      if (!result.ok) {
        showStatus("error", result.error);
        return;
      }
      setNewPassword("");
    }

    showStatus("success", "Settings saved successfully!");
  };

  return (
    <div className="rounded-2xl border border-(--border) bg-(--background-card) p-5">
      <h1 className="mb-5 text-xl font-bold text-(--text-primary)">Settings</h1>

      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        {/* Profile photo */}
        <div className="flex items-center gap-4">
          <UserAvatar
            src={avatarPreview || pickUserAvatar(user)}
            size={72}
            iconSize={28}
          />
          <div>
            <input
              ref={fileInputRef}
              id="avatar"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleAvatarChange}
              disabled={saving}
              className="sr-only"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={saving}
              className="flex items-center gap-1.5 text-xs font-semibold text-(--accent) hover:text-(--accent-hover) disabled:opacity-60"
            >
              <Camera size={14} />
              Change photo
            </button>
            <p className="mt-1 text-xs text-(--text-muted)">
              {avatarFile
                ? "Click Save Changes to upload this photo."
                : `JPG, PNG or WebP, up to ${MAX_AVATAR_MB} MB.`}
            </p>
          </div>
        </div>

        {/* Name */}
        <div>
          <label
            htmlFor="fullName"
            className="mb-1.5 block text-xs font-medium text-(--text-muted)"
          >
            Full Name
          </label>
          <div className="relative">
            <User
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-(--text-placeholder)"
            />
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              defaultValue={user?.name ?? ""}
              disabled={saving}
              className={`${inputBase} disabled:opacity-60`}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-xs font-medium text-(--text-muted)"
          >
            Phone Number
          </label>
          <div className="relative">
            <Phone
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-(--text-placeholder)"
            />
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Enter your phone number"
              defaultValue={user?.phone ?? ""}
              disabled={saving}
              className={`${inputBase} disabled:opacity-60`}
            />
          </div>
        </div>

        {/* Email (verify korte hoy, tai read-only + verify status) */}
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
              value={user?.email ?? ""}
              readOnly
              className={`${inputBase} cursor-not-allowed pr-24 opacity-70`}
            />

            {user?.isVerified ? (
              <span className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1 text-xs font-medium text-(--success)">
                <CheckCircle2 size={14} />
                Verified
              </span>
            ) : (
              !otpSent && (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={sendingOtp}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-(--accent) hover:text-(--accent-hover) disabled:opacity-60"
                >
                  {sendingOtp ? "Sending..." : "Verify Now"}
                </button>
              )
            )}
          </div>

          {!user?.isVerified && !otpSent && (
            <p className="mt-1.5 flex items-center gap-1 text-[11px] text-(--warning, #d97706)">
              <AlertCircle size={12} />
              Your email is not verified.
            </p>
          )}

          {/* Inline OTP verify box */}
          {!user?.isVerified && otpSent && (
            <div className="mt-2 rounded-lg border border-(--border-light) bg-background p-3">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="text-(--text-muted)">
                  Enter OTP sent to your email
                </span>
                <span
                  className={`font-semibold tabular-nums ${isExpired ? "text-red-500" : "text-(--text-primary)"}`}
                >
                  {isExpired ? "Expired" : formatted}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <StepInput
                  icon={Mail}
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="••••••"
                  value={otpValue}
                  onChange={(e) => setOtpValue(e.target.value)}
                  disabled={isExpired || verifyingOtp}
                  className="tracking-[0.35em] disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={isExpired || verifyingOtp}
                  className="h-12 shrink-0 rounded-xl bg-(--accent) px-4 text-xs font-bold text-(--accent-text) transition-colors hover:bg-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {verifyingOtp ? "..." : "Verify"}
                </button>
              </div>

              <button
                type="button"
                onClick={handleSendOtp}
                disabled={sendingOtp || !isExpired}
                className={`mt-2 text-[11px] font-medium transition-colors ${
                  sendingOtp || !isExpired
                    ? "cursor-not-allowed text-(--text-placeholder)"
                    : "cursor-pointer text-(--accent) underline hover:text-(--accent-hover)"
                }`}
              >
                {sendingOtp
                  ? "Resending..."
                  : !isExpired
                    ? `Resend in ${formatted}`
                    : "Resend OTP"}
              </button>

              {verifyStatus && (
                <p
                  className={`mt-1.5 text-[11px] ${statusStyles[verifyStatus.type]}`}
                >
                  {verifyStatus.text}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="newPassword"
            className="mb-1.5 block text-xs font-medium text-(--text-muted)"
          >
            New Password
          </label>
          <div className="relative">
            <Lock
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-(--text-placeholder)"
            />
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              autoComplete="new-password"
              placeholder="Leave blank to keep current password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={saving}
              className={`${inputBase} disabled:opacity-60`}
            />
          </div>
        </div>

        {/* Current password: shudhu notun password lekhle dekhabe */}
        {newPassword.length > 0 && (
          <div>
            <label
              htmlFor="currentPassword"
              className="mb-1.5 block text-xs font-medium text-(--text-muted)"
            >
              Current Password
            </label>
            <div className="relative">
              <Lock
                size={16}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-(--text-placeholder)"
              />
              <input
                id="currentPassword"
                name="currentPassword"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your current password"
                disabled={saving}
                className={`${inputBase} disabled:opacity-60`}
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={saving}
          className="h-11 rounded-full bg-(--accent) px-6 text-sm font-bold text-(--accent-text) transition-all duration-200 hover:-translate-y-px hover:bg-(--accent-hover) active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>

        {status && (
          <p
            role={status.type === "error" ? "alert" : "status"}
            className={`text-xs ${statusStyles[status.type]}`}
          >
            {status.text}
          </p>
        )}
      </form>
    </div>
  );
}
