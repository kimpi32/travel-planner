"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import SearchBar from "@/components/search/SearchBar";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "여행지" },
  { href: "/estimate", label: "AI 견적" },
  { href: "/planner", label: "내 여행" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        {/* 로고 */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 font-bold hover:opacity-80 transition-opacity"
        >
          <Plane className="h-5 w-5" />
          <span className="text-lg">여행 플래너</span>
        </Link>

        {/* 데스크탑 검색바 */}
        <div className="hidden flex-1 md:block">
          <SearchBar />
        </div>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname === href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* 우측 액션 */}
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden md:flex">
            로그인
          </Button>
          {/* 모바일 메뉴 */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
