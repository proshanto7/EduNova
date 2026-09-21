"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getMe } from "@/lib/api";
import { isStudent, unwrap } from "@/lib/auth-utils";

const AuthContext = createContext(null);

// localStorage keys (accessToken/userRole/userName ager moto-i ache,
// jate onno jaygay ja ja use korcho ta na bhange)
const KEYS = {
  token: "accessToken",
  role: "userRole",
  name: "userName",
  user: "authUser",
};

// true hole page reload-e getMe() diye token server-e verify hoy
const VERIFY_SESSION_ON_LOAD = true;

// ======================================================
// STORAGE HELPERS
// ======================================================

const readStoredSession = () => {
  const token = localStorage.getItem(KEYS.token);
  if (!token) return null;

  let user = null;
  try {
    user = JSON.parse(localStorage.getItem(KEYS.user));
  } catch {
    user = null;
  }

  // Ager version-e shudhu role/name save hoto, tar jonno fallback
  if (!user) {
    user = {
      role: localStorage.getItem(KEYS.role),
      name: localStorage.getItem(KEYS.name) || "",
    };
  }

  return { token, user };
};

const writeSession = (token, user) => {
  localStorage.setItem(KEYS.token, token);
  localStorage.setItem(KEYS.role, user.role ?? "");
  localStorage.setItem(KEYS.name, user.name || "");
  localStorage.setItem(KEYS.user, JSON.stringify(user));
};

const clearSession = () => {
  Object.values(KEYS).forEach((key) => localStorage.removeItem(key));
};

// ======================================================
// PROVIDER
// ======================================================

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = useCallback(() => {
    clearSession();
    setToken(null);
    setUser(null);
  }, []);

  // Student chhara keu login korte parbe na (na hole error throw kore)
  const login = useCallback(({ token: newToken, user: newUser }) => {
    if (!newToken || !newUser) {
      throw new Error("Unexpected response from the server.");
    }
    if (!isStudent(newUser)) {
      throw new Error("Only students can log in here.");
    }

    writeSession(newToken, newUser);
    setToken(newToken);
    setUser(newUser);
  }, []);

  // Page load: localStorage theke session restore, tarpor server-e verify
  useEffect(() => {
    let ignore = false;
    const session = readStoredSession();

    if (!session) {
      setLoading(false);
      return;
    }

    // Purano admin/teacher session thakle clear
    if (!isStudent(session.user)) {
      clearSession();
      setLoading(false);
      return;
    }

    setToken(session.token);
    setUser(session.user);
    setLoading(false);

    if (!VERIFY_SESSION_ON_LOAD) return;

    (async () => {
      try {
        const res = await getMe();
        const data = unwrap(res);
        const freshUser = data?.user ?? data;

        if (ignore || !freshUser || typeof freshUser !== "object") return;

        const merged = { ...session.user, ...freshUser };

        if (!isStudent(merged)) {
          logout();
          return;
        }

        writeSession(session.token, merged);
        setUser(merged);
      } catch (err) {
        // Shudhu token invalid (401) hole logout. Network error-e logout hobe na.
        const status = err?.status ?? err?.response?.status;
        if (!ignore && status === 401) logout();
      }
    })();

    return () => {
      ignore = true;
    };
  }, [logout]);

  // Profile update-er por (jemon name change) user object update kore
  const updateUser = useCallback(
    (patch) => {
      if (!user || !token) return;
      const next = { ...user, ...patch };
      writeSession(token, next);
      setUser(next);
    },
    [user, token]
  );

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      isAuthenticated: Boolean(token && user),
      // Purano component (Navbar, guard etc.) jara isLoggedIn/mounted use kore, tader jonno
      isLoggedIn: Boolean(token && user),
      mounted: !loading,
      login,
      logout,
      updateUser,
    }),
    [user, token, loading, login, logout, updateUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
