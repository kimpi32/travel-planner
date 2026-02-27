"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { Button } from "@/components/ui/button";
import { SortableTripItem } from "./SortableTripItem";
import { AddActivityModal } from "./AddActivityModal";
import { TripDay } from "@/types/planner";
import { usePlannerStore } from "@/hooks/use-planner-store";
import { cn } from "@/lib/utils";

function formatDayDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "short",
  });
}

interface DayTimelineProps {
  tripId: string;
  day: TripDay;
  onRemoveDay?: () => void;
}

export function DayTimeline({ tripId, day, onRemoveDay }: DayTimelineProps) {
  const [addOpen, setAddOpen] = useState(false);
  const removeActivity = usePlannerStore((s) => s.removeActivity);

  const { setNodeRef, isOver } = useDroppable({ id: day.id });

  return (
    <div className="flex flex-col gap-3">
      {/* Day header */}
      <div className="flex items-center gap-2">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
          {day.dayNumber}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-sm leading-none">{day.title || `Day ${day.dayNumber}`}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{formatDayDate(day.date)}</p>
        </div>
        {onRemoveDay && (
          <Button
            variant="ghost"
            size="icon-xs"
            onClick={onRemoveDay}
            className="text-muted-foreground hover:text-destructive"
            title="이 날 삭제"
          >
            <Trash2 className="size-3.5" />
          </Button>
        )}
      </div>

      {/* Sortable activities */}
      <SortableContext
        items={day.activities.map((a) => a.id)}
        strategy={verticalListSortingStrategy}
      >
        <div
          ref={setNodeRef}
          className={cn(
            "flex flex-col gap-2 min-h-[60px] rounded-lg transition-colors",
            isOver && "bg-primary/5 ring-1 ring-primary/20"
          )}
        >
          {day.activities.length === 0 && (
            <div className="flex items-center justify-center h-[60px] text-xs text-muted-foreground rounded-lg border border-dashed">
              일정을 추가하거나 드래그해 오세요
            </div>
          )}
          {day.activities.map((activity) => (
            <SortableTripItem
              key={activity.id}
              activity={activity}
              tripId={tripId}
              dayId={day.id}
              onRemove={() => removeActivity(tripId, day.id, activity.id)}
            />
          ))}
        </div>
      </SortableContext>

      {/* Add activity button */}
      <Button
        variant="outline"
        size="sm"
        className="w-full gap-1.5 text-muted-foreground hover:text-foreground"
        onClick={() => setAddOpen(true)}
      >
        <Plus className="size-3.5" />
        추가
      </Button>

      <AddActivityModal
        open={addOpen}
        onOpenChange={setAddOpen}
        tripId={tripId}
        dayId={day.id}
      />
    </div>
  );
}
