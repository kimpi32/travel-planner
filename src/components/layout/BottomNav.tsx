"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Map, Sparkles, CalendarDays, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "탐색", icon: Map },
  { href: "/estimate", label: "AI 견적", icon: Sparkles },
  { href: "/planner", label: "내 여행", icon: CalendarDays },
  { href: "/profile", label: "프로필", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background/95 backdrop-blur-sm md:hidden">
      <div className="flex h-16 items-center justify-around">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-1 flex-col items-center justify-center gap-1 py-2 text-xs font-medium transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon
                className={cn(
                  "size-5 transition-transform",
                  isActive && "scale-110"
                )}
              />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
