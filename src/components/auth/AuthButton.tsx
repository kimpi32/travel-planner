"use client";

import { createClient } from "@/lib/auth/supabase-browser";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { User, Session, AuthChangeEvent } from "@supabase/supabase-js";

interface AuthButtonProps {
  initialUser?: User | null;
  userProfile?: {
    name: string;
    profileImage?: string | null;
  } | null;
}

export default function AuthButton({ initialUser, userProfile }: AuthButtonProps) {
  const router = useRouter();
  const supabase = createClient();

  const [user, setUser] = useState<User | null>(initialUser ?? null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, [supabase]);

  // 드롭다운 외부 클릭 닫기
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    setDropdownOpen(false);
    router.push("/");
    router.refresh();
  }

  if (!user) {
    return (
      <a
        href="/auth/login"
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        로그인
      </a>
    );
  }

  const displayName = userProfile?.name ?? user.email?.split("@")[0] ?? "사용자";
  const avatarLetter = displayName.charAt(0).toUpperCase();

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-gray-100"
        aria-label="사용자 메뉴"
      >
        {userProfile?.profileImage ? (
          <img
            src={userProfile.profileImage}
            alt={displayName}
            className="h-8 w-8 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
            {avatarLetter}
          </span>
        )}
        <span className="hidden text-sm font-medium text-gray-700 sm:block">{displayName}</span>
        <svg
          className={`h-4 w-4 text-gray-500 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
          <div className="border-b border-gray-100 px-4 py-3">
            <p className="text-sm font-medium text-gray-900">{displayName}</p>
            <p className="truncate text-xs text-gray-500">{user.email}</p>
          </div>
          <div className="py-1">
            <a
              href="/profile"
              onClick={() => setDropdownOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              내 프로필
            </a>
            <a
              href="/planner"
              onClick={() => setDropdownOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              내 여행 계획
            </a>
          </div>
          <div className="border-t border-gray-100 py-1">
            <button
              onClick={handleLogout}
              className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
            >
              로그아웃
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
