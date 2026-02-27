"use client";

import { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  DragOverlay,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates, arrayMove } from "@dnd-kit/sortable";
import { DayTimeline } from "./DayTimeline";
import { TripItemCard } from "./TripItemCard";
import { Trip, TripActivity } from "@/types/planner";
import { usePlannerStore } from "@/hooks/use-planner-store";

interface DragDropContainerProps {
  trip: Trip;
}

export function DragDropContainer({ trip }: DragDropContainerProps) {
  const moveActivity = usePlannerStore((s) => s.moveActivity);
  const updateTrip = usePlannerStore((s) => s.updateTrip);
  const removeDay = usePlannerStore((s) => s.removeDay);

  const [activeActivity, setActiveActivity] = useState<TripActivity | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function findDayByActivityId(activityId: string) {
    return trip.days.find((d) => d.activities.some((a) => a.id === activityId));
  }

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const day = findDayByActivityId(String(active.id));
    if (day) {
      const activity = day.activities.find((a) => a.id === active.id);
      setActiveActivity(activity ?? null);
    }
  }

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = String(active.id);
    const overId = String(over.id);

    const activeDay = findDayByActivityId(activeId);
    if (!activeDay) return;

    // If over a day container (not an activity), move to that day
    const overDay = trip.days.find((d) => d.id === overId);
    if (overDay && overDay.id !== activeDay.id) {
      moveActivity(trip.id, activeDay.id, overDay.id, activeId, overDay.activities.length);
      return;
    }

    // If over another activity
    const overDay2 = findDayByActivityId(overId);
    if (!overDay2) return;

    if (activeDay.id !== overDay2.id) {
      const toIndex = overDay2.activities.findIndex((a) => a.id === overId);
      moveActivity(trip.id, activeDay.id, overDay2.id, activeId, toIndex >= 0 ? toIndex : overDay2.activities.length);
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveActivity(null);

    if (!over) return;

    const activeId = String(active.id);
    const overId = String(over.id);

    if (activeId === overId) return;

    const activeDay = findDayByActivityId(activeId);
    const overDay = findDayByActivityId(overId);

    if (!activeDay || !overDay) return;
    if (activeDay.id !== overDay.id) return;

    // Reorder within same day
    const oldIndex = activeDay.activities.findIndex((a) => a.id === activeId);
    const newIndex = activeDay.activities.findIndex((a) => a.id === overId);

    if (oldIndex === -1 || newIndex === -1) return;

    const newActivities = arrayMove(activeDay.activities, oldIndex, newIndex);
    const newDays = trip.days.map((d) =>
      d.id === activeDay.id ? { ...d, activities: newActivities } : d
    );

    updateTrip(trip.id, { days: newDays } as Parameters<typeof updateTrip>[1]);
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col gap-6">
        {trip.days.map((day) => (
          <DayTimeline
            key={day.id}
            tripId={trip.id}
            day={day}
            onRemoveDay={
              trip.days.length > 1 ? () => removeDay(trip.id, day.id) : undefined
            }
          />
        ))}
      </div>

      <DragOverlay>
        {activeActivity && (
          <div className="w-full max-w-sm rotate-1 opacity-90">
            <TripItemCard activity={activeActivity} />
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
}
