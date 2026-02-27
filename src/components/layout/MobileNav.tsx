"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Map, Sparkles, CalendarDays, User } from "lucide-react";
import { Dialog } from "radix-ui";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/search/SearchBar";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "여행지 탐색", icon: Map },
  { href: "/estimate", label: "AI 견적", icon: Sparkles },
  { href: "/planner", label: "내 여행", icon: CalendarDays },
  { href: "/profile", label: "프로필", icon: User },
];

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant="ghost" size="icon" className="size-9 md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed right-0 top-0 z-50 h-full w-72 bg-background shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-300">
          <div className="flex h-full flex-col p-6">
            <Dialog.Title className="sr-only">네비게이션 메뉴</Dialog.Title>
            <div className="mb-6">
              <SearchBar />
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    pathname === href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  <Icon className="size-4 shrink-0" />
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
              <Button className="w-full" variant="outline">
                로그인
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
