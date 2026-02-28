"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  FileText,
  Map,
  Flag,
  UserPlus,
  FilePlus,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Stats {
  totalUsers: number;
  totalPosts: number;
  totalTrips: number;
  pendingReports: number;
  newUsersThisMonth: number;
  newPostsThisMonth: number;
}

const STAT_CARDS = [
  { key: "totalUsers" as const, label: "전체 회원", icon: Users, color: "text-blue-500" },
  { key: "totalPosts" as const, label: "전체 게시글", icon: FileText, color: "text-green-500" },
  { key: "totalTrips" as const, label: "전체 여행", icon: Map, color: "text-purple-500" },
  { key: "pendingReports" as const, label: "대기 중 신고", icon: Flag, color: "text-red-500" },
  { key: "newUsersThisMonth" as const, label: "이번 달 신규 회원", icon: UserPlus, color: "text-cyan-500" },
  { key: "newPostsThisMonth" as const, label: "이번 달 신규 게시글", icon: FilePlus, color: "text-orange-500" },
];

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/admin/stats");
        if (!res.ok) throw new Error("통계 데이터를 불러오지 못했습니다.");
        const data = await res.json();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-muted-foreground text-lg">로딩 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">대시보드</h1>
        <p className="text-muted-foreground mt-1">서비스 현황을 한눈에 확인하세요.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {STAT_CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.key}>
              <CardContent className="flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800 ${card.color}`}>
                  <Icon className="size-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{card.label}</p>
                  <p className="text-2xl font-bold text-foreground">
                    {stats?.[card.key]?.toLocaleString() ?? 0}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/admin/users">
            회원 관리
            <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/admin/reports">
            신고 관리
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
