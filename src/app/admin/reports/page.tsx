"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface Report {
  id: string;
  reporterName: string;
  targetType: string;
  targetId: string;
  reason: string;
  status: string;
  createdAt: string;
}

interface ReportsResponse {
  reports: Report[];
  total: number;
  page: number;
  limit: number;
}

const LIMIT = 20;

const STATUS_TABS = [
  { value: "all", label: "전체" },
  { value: "pending", label: "대기" },
  { value: "reviewed", label: "검토 완료" },
  { value: "dismissed", label: "기각" },
];

export default function AdminReportsPage() {
  const [data, setData] = useState<ReportsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchReports = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: String(LIMIT),
      });
      if (statusFilter !== "all") params.set("status", statusFilter);

      const res = await fetch(`/api/admin/reports?${params}`);
      if (!res.ok) throw new Error("신고 목록을 불러오지 못했습니다.");
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : "오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }, [page, statusFilter]);

  useEffect(() => {
    fetchReports();
  }, [fetchReports]);

  const handleStatusChange = (value: string) => {
    setStatusFilter(value);
    setPage(1);
  };

  const handleUpdateStatus = async (reportId: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/admin/reports/${reportId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("상태 변경에 실패했습니다.");
      fetchReports();
    } catch (err) {
      alert(err instanceof Error ? err.message : "오류가 발생했습니다.");
    }
  };

  const totalPages = data ? Math.ceil(data.total / LIMIT) : 0;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800">
            대기
          </Badge>
        );
      case "reviewed":
        return (
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800">
            검토 완료
          </Badge>
        );
      case "dismissed":
        return (
          <Badge variant="secondary">기각</Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTargetTypeLabel = (type: string) => {
    switch (type) {
      case "post":
        return "게시글";
      case "comment":
        return "댓글";
      case "user":
        return "회원";
      default:
        return type;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">신고 관리</h1>
        <p className="text-muted-foreground mt-1">사용자 신고를 검토하고 처리합니다.</p>
      </div>

      {/* Status Filter Tabs */}
      <Tabs value={statusFilter} onValueChange={handleStatusChange}>
        <TabsList>
          {STATUS_TABS.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Content */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <p className="text-muted-foreground">로딩 중...</p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center py-20">
          <p className="text-red-500">{error}</p>
        </div>
      ) : (
        <>
          {/* Table */}
          <div className="rounded-lg border bg-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left font-medium text-muted-foreground px-4 py-3">신고자</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-3">대상 유형</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-3">대상 ID</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-3">사유</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-3">상태</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-3">신고일</th>
                  <th className="text-right font-medium text-muted-foreground px-4 py-3">작업</th>
                </tr>
              </thead>
              <tbody>
                {data?.reports.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center text-muted-foreground py-10">
                      신고가 없습니다.
                    </td>
                  </tr>
                ) : (
                  data?.reports.map((report) => (
                    <tr
                      key={report.id}
                      className="border-b last:border-b-0 hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-4 py-3 font-medium text-foreground">
                        {report.reporterName}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {getTargetTypeLabel(report.targetType)}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground font-mono text-xs">
                        {report.targetId.length > 12
                          ? `${report.targetId.slice(0, 12)}...`
                          : report.targetId}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground max-w-xs truncate">
                        {report.reason}
                      </td>
                      <td className="px-4 py-3">{getStatusBadge(report.status)}</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {new Date(report.createdAt).toLocaleDateString("ko-KR")}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {report.status === "pending" ? (
                          <div className="flex items-center justify-end gap-1">
                            <Button
                              variant="ghost"
                              size="xs"
                              className="text-green-600 hover:text-green-700"
                              onClick={() => handleUpdateStatus(report.id, "reviewed")}
                              title="검토 완료"
                            >
                              <CheckCircle className="size-4 mr-1" />
                              검토완료
                            </Button>
                            <Button
                              variant="ghost"
                              size="xs"
                              className="text-gray-500 hover:text-gray-700"
                              onClick={() => handleUpdateStatus(report.id, "dismissed")}
                              title="기각"
                            >
                              <XCircle className="size-4 mr-1" />
                              기각
                            </Button>
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground">처리됨</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                총 {data?.total.toLocaleString()}건 중 {(page - 1) * LIMIT + 1}-
                {Math.min(page * LIMIT, data?.total ?? 0)}건
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  <ChevronLeft className="size-4" />
                  이전
                </Button>
                <span className="text-sm text-muted-foreground px-2">
                  {page} / {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  다음
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
