"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  changePassword,
  getMe,
  loginUser,
  logoutUser,
  registerUser,
  updateMe,
} from "@/lib/api";
import { unwrap } from "@/lib/auth-utils";

const getErrorMessage = (err, fallback) =>
  err?.response?.data?.message || err?.data?.message || err?.message || fallback;

// ======================================================
// BASE HOOK
// Loading + error handling ek jaygay. Kokhono throw kore na,
// { ok, data } ba { ok: false, error } return kore.
// ======================================================

function useApiAction(action, fallbackMessage) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = useCallback(
    async (...args) => {
      setLoading(true);
      setError("");

      try {
        const data = await action(...args);
        return { ok: true, data };
      } catch (err) {
        const message = getErrorMessage(err, fallbackMessage);
        setError(message);
        return { ok: false, error: message };
      } finally {
        setLoading(false);
      }
    },
    [action, fallbackMessage]
  );

  return { submit, loading, error };
}

// ======================================================
// LOGIN
// const { submit, loading, error } = useLogin();
// const result = await submit({ email, password });
// ======================================================

export function useLogin() {
  const { login } = useAuth();

  const action = useCallback(
    async ({ email, password }) => {
      const res = await loginUser({ email, password });
      const { token, user } = unwrap(res);

      // Student na hole login() error throw korbe
      login({ token, user });
      return user;
    },
    [login]
  );

  return useApiAction(
    action,
    "Could not log in. Check your email and password, then try again."
  );
}

// ======================================================
// REGISTER
// Register-er por user-ke email verify korte hobe, tai ekhane login hoy na.
// ======================================================

export function useRegister() {
  const action = useCallback(async (data) => {
    const res = await registerUser(data);
    return unwrap(res);
  }, []);

  return useApiAction(action, "Could not create your account. Try again.");
}

// ======================================================
// LOGOUT
// Server-e logout call kore, fail korleo local session clear hoy.
// ======================================================

export function useLogout() {
  const { logout } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const submit = useCallback(async () => {
    setLoading(true);
    try {
      await logoutUser();
    } catch {
      // Server error hole-o user logout hobe
    } finally {
      logout();
      setLoading(false);
      router.replace("/login");
    }
  }, [logout, router]);

  return { submit, loading };
}

// ======================================================
// SETTINGS
// ======================================================

// submit({ name }) ba submit(FormData) (profile photo thakle)
export function useUpdateProfile() {
  const action = useCallback(async (data) => {
    await updateMe(data);

    // Notun data (jemon photo URL) server theke abar ane.
    // Eta fail korleo save hoyei geche, tai error dei na.
    try {
      const fresh = unwrap(await getMe());
      return fresh?.user ?? fresh;
    } catch {
      return null;
    }
  }, []);

  return useApiAction(action, "Could not save your changes. Try again.");
}

// submit({ currentPassword, newPassword })
export function useChangePassword() {
  const action = useCallback(async (data) => {
    const res = await changePassword(data);
    return unwrap(res);
  }, []);

  return useApiAction(action, "Could not change your password. Try again.");
}
