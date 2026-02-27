"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePlannerStore } from "@/hooks/use-planner-store";
import { ActivityCategory } from "@/types/planner";
import { searchItems, SearchItem } from "@/lib/search-index";
import { CATEGORY_CONFIG } from "./TripItemCard";

interface AddActivityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tripId: string;
  dayId: string;
}

const CATEGORIES = Object.values(ActivityCategory);

export function AddActivityModal({
  open,
  onOpenChange,
  tripId,
  dayId,
}: AddActivityModalProps) {
  const addActivity = usePlannerStore((s) => s.addActivity);

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("09:00");
  const [category, setCategory] = useState<ActivityCategory>(ActivityCategory.Attraction);
  const [cost, setCost] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<SearchItem | null>(null);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchItems(searchQuery, 8);
  }, [searchQuery]);

  function reset() {
    setTitle("");
    setTime("09:00");
    setCategory(ActivityCategory.Attraction);
    setCost("");
    setDuration("");
    setNotes("");
    setSearchQuery("");
    setSelectedPlace(null);
  }

  function handleSelectPlace(item: SearchItem) {
    setSelectedPlace(item);
    if (!title) setTitle(item.name);
    setSearchQuery(item.name);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    addActivity(tripId, dayId, {
      title: title.trim(),
      time,
      category,
      estimatedCost: cost ? parseInt(cost) : 0,
      duration: duration ? parseInt(duration) : undefined,
      notes: notes.trim() || undefined,
      place: selectedPlace?.name ?? (searchQuery.trim() || undefined),
      placeHref: selectedPlace?.href,
      description: selectedPlace?.breadcrumb || undefined,
    });

    onOpenChange(false);
    reset();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) reset();
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>일정 추가</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-1">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">장소 검색 (선택)</label>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
              <Input
                placeholder="예: 에펠탑, 파리..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (selectedPlace && e.target.value !== selectedPlace.name) {
                    setSelectedPlace(null);
                  }
                }}
              />
            </div>
            {searchResults.length > 0 && (
              <div className="rounded-md border bg-popover shadow-md overflow-hidden">
                {searchResults.map((item, i) => (
                  <button
                    key={i}
                    type="button"
                    className="w-full flex items-start gap-2 px-3 py-2 text-left text-sm hover:bg-accent transition-colors"
                    onClick={() => handleSelectPlace(item)}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{item.name}</p>
                      {item.breadcrumb && (
                        <p className="text-xs text-muted-foreground truncate">
                          {item.breadcrumb}
                        </p>
                      )}
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {item.type === "country"
                        ? "국가"
                        : item.type === "city"
                          ? "도시"
                          : item.type === "attraction"
                            ? "명소"
                            : "지역"}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">일정 제목 *</label>
            <Input
              placeholder="예: 에펠탑 방문"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">시간</label>
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">카테고리</label>
              <Select
                value={category}
                onValueChange={(v) => setCategory(v as ActivityCategory)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => {
                    const cfg = CATEGORY_CONFIG[cat];
                    return (
                      <SelectItem key={cat} value={cat}>
                        {cfg.emoji} {cfg.label}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">예상 비용 (원)</label>
              <Input
                type="number"
                placeholder="0"
                min={0}
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">소요 시간 (분)</label>
              <Input
                type="number"
                placeholder="60"
                min={0}
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">메모 (선택)</label>
            <Input
              placeholder="예: 사전 예약 필요"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="flex justify-end gap-2 pt-1">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                onOpenChange(false);
                reset();
              }}
            >
              취소
            </Button>
            <Button type="submit">추가</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
