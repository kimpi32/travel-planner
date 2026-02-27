"use client";

import { useState } from "react";
import { Flag, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ReportButtonProps {
  targetType: "post" | "comment";
  targetId: string;
  /** 버튼 변형 (기본값: ghost) */
  variant?: "ghost" | "outline";
  className?: string;
}

export function ReportButton({
  targetType,
  targetId,
  variant = "ghost",
  className,
}: ReportButtonProps) {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const targetLabel = targetType === "post" ? "게시글" : "댓글";
  const MIN_REASON_LENGTH = 10;
  const isValid = reason.trim().length >= MIN_REASON_LENGTH;

  async function handleSubmit() {
    if (!isValid) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/community/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetType, targetId, reason: reason.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error ?? "신고 접수에 실패했습니다. 다시 시도해 주세요.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  }

  function handleOpenChange(newOpen: boolean) {
    setOpen(newOpen);
    if (!newOpen) {
      // 다이얼로그 닫을 때 상태 초기화
      setTimeout(() => {
        setReason("");
        setError(null);
        setSubmitted(false);
      }, 200);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          size="sm"
          className={cn(
            "text-muted-foreground hover:text-destructive hover:bg-destructive/10",
            className
          )}
          aria-label={`${targetLabel} 신고`}
        >
          <Flag className="h-3.5 w-3.5" />
          <span className="sr-only">신고</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{targetLabel} 신고</DialogTitle>
          <DialogDescription>
            부적절한 콘텐츠를 신고해 주세요. 검토 후 필요한 조치를 취하겠습니다.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-center space-y-2">
            <p className="text-2xl">✅</p>
            <p className="font-semibold">신고가 접수되었습니다.</p>
            <p className="text-sm text-muted-foreground">
              검토 후 적절한 조치를 취하겠습니다. 감사합니다.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setOpen(false)}
            >
              닫기
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-3 py-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="report-reason"
                  className="text-sm font-medium leading-none"
                >
                  신고 사유{" "}
                  <span className="text-muted-foreground font-normal">
                    (최소 {MIN_REASON_LENGTH}자)
                  </span>
                </label>
                <Textarea
                  id="report-reason"
                  value={reason}
                  onChange={(e) => {
                    setReason(e.target.value);
                    setError(null);
                  }}
                  placeholder="어떤 문제가 있는지 구체적으로 설명해 주세요. 예: 욕설, 스팸, 허위 정보 등"
                  rows={4}
                  maxLength={1000}
                  className="resize-none"
                />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    {reason.trim().length < MIN_REASON_LENGTH &&
                      reason.length > 0 && (
                        <span className="text-destructive">
                          {MIN_REASON_LENGTH - reason.trim().length}자 더 입력해
                          주세요.
                        </span>
                      )}
                  </span>
                  <span>{reason.length} / 1000</span>
                </div>
              </div>

              {error && (
                <p className="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-md">
                  {error}
                </p>
              )}
            </div>

            <DialogFooter className="gap-2 sm:gap-0">
              <Button
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={loading}
              >
                취소
              </Button>
              <Button
                variant="destructive"
                onClick={handleSubmit}
                disabled={!isValid || loading}
              >
                {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                신고 제출
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
