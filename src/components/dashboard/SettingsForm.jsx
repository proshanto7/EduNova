"use client";

import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";

export default function SettingsForm() {
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="rounded-2xl border border-(--border) bg-(--background-card) p-5">
      <h1 className="mb-5 text-xl font-bold text-(--text-primary)">
        Settings
      </h1>

      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
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
              defaultValue="Your Name"
              className="h-11 w-full rounded-lg border border-(--border-light) bg-(--background-input) pl-10 pr-3.5 text-sm text-(--text-light) outline-none focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/10"
            />
          </div>
        </div>

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
              defaultValue="you@example.com"
              className="h-11 w-full rounded-lg border border-(--border-light) bg-(--background-input) pl-10 pr-3.5 text-sm text-(--text-light) outline-none focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/10"
            />
          </div>
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
              placeholder="Leave blank to keep current password"
              className="h-11 w-full rounded-lg border border-(--border-light) bg-(--background-input) pl-10 pr-3.5 text-sm text-(--text-light) outline-none placeholder:text-(--text-placeholder) focus:border-(--accent)/45 focus:ring-4 focus:ring-(--accent)/10"
            />
          </div>
        </div>

        <button
          type="submit"
          className="h-11 rounded-full bg-(--accent) px-6 text-sm font-bold text-(--accent-text) transition-all duration-200 hover:-translate-y-px hover:bg-(--accent-hover) active:translate-y-0"
        >
          Save Changes
        </button>

        {saved && (
          <p role="status" className="text-xs text-(--success)">
            Settings saved successfully!
          </p>
        )}
      </form>
    </div>
  );
}