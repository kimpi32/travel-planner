"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Users,
  MapPin,
  Plus,
  Pencil,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DragDropContainer } from "@/components/planner/DragDropContainer";
import { BudgetTracker } from "@/components/planner/BudgetTracker";
import { PlannerMap } from "@/components/planner/PlannerMap";
import { ShareItineraryButton } from "@/components/community/ShareItineraryButton";
import { usePlannerStore } from "@/hooks/use-planner-store";
import { TripStatus } from "@/types/planner";

const STATUS_CONFIG: Record<
  TripStatus,
  { label: string; variant: "default" | "secondary" | "outline" }
> = {
  planning: { label: "계획 중", variant: "secondary" },
  active: { label: "여행 중", variant: "default" },
  completed: { label: "완료", variant: "outline" },
};

function formatDateRange(start: string, end: string): string {
  const s = new Date(start + "T00:00:00");
  const e = new Date(end + "T00:00:00");
  const fmt = (d: Date) =>
    d.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });
  return `${fmt(s)} ~ ${fmt(e)}`;
}

export default function TripDetailPage({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const { tripId } = use(params);
  const trips = usePlannerStore((s) => s.trips);
  const updateTrip = usePlannerStore((s) => s.updateTrip);
  const addDay = usePlannerStore((s) => s.addDay);

  const trip = trips.find((t) => t.id === tripId);

  const [editOpen, setEditOpen] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDestination, setEditDestination] = useState("");
  const [editTravelers, setEditTravelers] = useState("2");

  if (!trip) {
    notFound();
    return null; // unreachable, but helps TypeScript narrow the type
  }

  function openEditDialog() {
    setEditTitle(trip!.title);
    setEditDestination(trip!.destination);
    setEditTravelers(String(trip!.travelers));
    setEditOpen(true);
  }

  function handleEditSave(e: React.FormEvent) {
    e.preventDefault();
    if (!editTitle.trim() || !editDestination.trim()) return;
    updateTrip(trip!.id, {
      title: editTitle.trim(),
      destination: editDestination.trim(),
      travelers: parseInt(editTravelers),
    });
    setEditOpen(false);
  }

  const statusConfig = STATUS_CONFIG[trip.status];
  const nights = trip.days.length - 1;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Button variant="ghost" size="icon-sm" asChild>
            <Link href="/planner">
              <ArrowLeft className="size-4" />
            </Link>
          </Button>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold truncate">{trip.title}</h1>
              <Badge variant={statusConfig.variant} className="shrink-0 text-xs">
                {statusConfig.label}
              </Badge>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
              <span className="flex items-center gap-1">
                <MapPin className="size-3" />
                {trip.destination}
              </span>
              <span className="flex items-center gap-1">
                <CalendarDays className="size-3" />
                {nights > 0 ? `${nights}박 ${nights + 1}일` : "당일치기"}
              </span>
              <span className="flex items-center gap-1">
                <Users className="size-3" />
                {trip.travelers}명
              </span>
            </div>
          </div>

          {/* Status selector */}
          <Select
            value={trip.status}
            onValueChange={(v) => updateTrip(trip.id, { status: v as TripStatus })}
          >
            <SelectTrigger className="w-24 h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="planning">계획 중</SelectItem>
              <SelectItem value="active">여행 중</SelectItem>
              <SelectItem value="completed">완료</SelectItem>
            </SelectContent>
          </Select>

          <ShareItineraryButton trip={trip} size="sm" variant="outline" />

          <Button variant="ghost" size="icon-sm" title="여행 정보 수정" onClick={openEditDialog}>
            <Pencil className="size-4" />
          </Button>
        </div>
      </header>

      {/* Edit trip dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>여행 정보 수정</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditSave} className="flex flex-col gap-4 pt-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">여행 제목</label>
              <Input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">여행지</label>
              <Input value={editDestination} onChange={(e) => setEditDestination(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">여행인원</label>
              <Select value={editTravelers} onValueChange={setEditTravelers}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <SelectItem key={n} value={String(n)}>{n}명</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end gap-2 pt-1">
              <Button type="button" variant="outline" onClick={() => setEditOpen(false)}>취소</Button>
              <Button type="submit">저장</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Trip meta bar */}
      <div className="border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-2 text-xs text-muted-foreground">
          {formatDateRange(trip.startDate, trip.endDate)}
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
          {/* Timeline */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                일정 ({trip.days.length}일)
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => addDay(trip.id)}
                className="gap-1.5 text-xs"
              >
                <Plus className="size-3.5" />
                날 추가
              </Button>
            </div>

            <DragDropContainer trip={trip} />
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            <BudgetTracker tripId={trip.id} />
            <PlannerMap />
          </div>
        </div>
      </main>
    </div>
  );
}
