import * as React from "react";
import Link from "next/link";
import { Plane } from "lucide-react";

const serviceLinks = [
  { href: "/", label: "여행지 탐색" },
  { href: "/estimate", label: "AI 견적" },
  { href: "/planner", label: "내 여행 플래너" },
  { href: "/community", label: "커뮤니티" },
];

const infoLinks = [
  { href: "/about", label: "서비스 소개" },
  { href: "/privacy", label: "개인정보처리방침" },
  { href: "/terms", label: "이용약관" },
  { href: "/contact", label: "문의하기" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* 로고 & 설명 */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <Plane className="h-5 w-5" />
              <span>여행 플래너</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI와 함께하는 스마트 여행 계획.<br />
              원하는 여행지를 탐색하고 견적을 받아보세요.
            </p>
          </div>

          {/* 서비스 링크 */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">서비스</h3>
            <ul className="space-y-2">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 정보 링크 */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">정보</h3>
            <ul className="space-y-2">
              {infoLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 저작권 */}
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} 여행 플래너. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
