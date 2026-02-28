"use client";

import { useState, useEffect, useCallback } from "react";

interface AuthUser {
  id: string;
  email: string;
  name: string;
  profileImage?: string | null;
  bio?: string | null;
}

interface UseAuthReturn {
  user: AuthUser | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string, name: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  refresh: () => Promise<void>;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me");
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        return { error: data.error ?? "로그인에 실패했습니다." };
      }

      const data = await res.json();
      setUser({ id: data.id, email: data.email, name: data.name });
      return { error: null };
    } catch {
      return { error: "네트워크 오류가 발생했습니다." };
    }
  }, []);

  const signUp = useCallback(async (email: string, password: string, name: string) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });

      if (!res.ok) {
        const data = await res.json();
        return { error: data.error ?? "회원가입에 실패했습니다." };
      }

      const data = await res.json();
      setUser({ id: data.id, email: data.email, name: data.name });
      return { error: null };
    } catch {
      return { error: "네트워크 오류가 발생했습니다." };
    }
  }, []);

  const signOut = useCallback(async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
  }, []);

  return { user, isLoading, signIn, signUp, signOut, refresh: fetchUser };
}
