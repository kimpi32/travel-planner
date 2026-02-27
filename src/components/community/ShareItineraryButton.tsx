"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Share2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useCreatePost, type CreatePostInput } from "@/hooks/use-posts";
import type { Trip } from "@/types/planner";
import type { ItineraryMeta } from "@/types/community";
import { cn } from "@/lib/utils";

interface ShareItineraryButtonProps {
  trip: Trip;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

function buildItineraryMeta(trip: Trip): ItineraryMeta {
  return {
    startDate: trip.startDate,
    endDate: trip.endDate,
    travelers: trip.travelers,
    totalBudget: trip.budget.total,
    days: trip.days.map((day) => ({
      dayNumber: day.dayNumber,
      date: day.date,
      title: day.title,
      activities: day.activities.map((act) => ({
        time: act.time,
        title: act.title,
        place: act.place,
        category: act.category,
        estimatedCost: act.estimatedCost,
        notes: act.notes,
      })),
    })),
  };
}

function buildItineraryBody(trip: Trip): string {
  const meta = buildItineraryMeta(trip);
  const summary = `${trip.destination} ${trip.days.length}일 여행 일정 (${trip.travelers}명)`;
  return JSON.stringify({ __itinerary__: meta, summary });
}

function buildDefaultTitle(trip: Trip): string {
  const nights = trip.days.length - 1;
  const durationLabel = nights > 0 ? `${nights}박 ${nights + 1}일` : "당일치기";
  return `[${trip.destination}] ${durationLabel} 여행 일정 공유`;
}

export function ShareItineraryButton({
  trip,
  className,
  variant = "outline",
  size = "sm",
}: ShareItineraryButtonProps) {
  const router = useRouter();
  const createMutation = useCreatePost();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(buildDefaultTitle(trip));

  async function handleShare() {
    if (!title.trim()) return;

    const data: CreatePostInput = {
      type: "itinerary",
      title: title.trim(),
      body: buildItineraryBody(trip),
      authorId: "",
      destination: trip.destination,
    };

    const post = await createMutation.mutateAsync(data);
    setOpen(false);
    router.push(`/community/${post.id}`);
  }

  const totalActivities = trip.days.reduce((s, d) => s + d.activities.length, 0);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={() => setOpen(true)}
        className={cn("gap-1.5", className)}
      >
        <Share2 className="h-3.5 w-3.5" />
        일정 공유
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>일정 커뮤니티 공유</DialogTitle>
            <DialogDescription>
              플래너에 작성한 여행 일정을 커뮤니티에 공유합니다.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4 pt-2">
            {/* 일정 요약 */}
            <div className="rounded-xl border bg-muted/30 p-4 flex flex-col gap-2 text-sm">
              <div className="font-semibold text-base">{trip.title}</div>
              <div className="text-muted-foreground flex flex-col gap-1">
                <span>여행지: {trip.destination}</span>
                <span>기간: {trip.startDate} ~ {trip.endDate} ({trip.days.length}일)</span>
                <span>인원: {trip.travelers}명</span>
                <span>일정 수: {totalActivities}개 활동</span>
              </div>
              {totalActivities === 0 && (
                <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                  아직 등록된 활동이 없습니다. 일정을 추가하면 더 풍부한 공유가 됩니다.
                </p>
              )}
            </div>

            {/* 게시글 제목 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">게시글 제목</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목을 입력하세요"
                maxLength={100}
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setOpen(false)}>
                취소
              </Button>
              <Button
                onClick={handleShare}
                disabled={!title.trim() || createMutation.isPending}
              >
                {createMutation.isPending && (
                  <Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" />
                )}
                공유하기
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
