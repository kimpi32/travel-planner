"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TripItemCard } from "./TripItemCard";
import { TripActivity } from "@/types/planner";

interface SortableTripItemProps {
  activity: TripActivity;
  tripId: string;
  dayId: string;
  onRemove: () => void;
}

export function SortableTripItem({
  activity,
  onRemove,
}: SortableTripItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: activity.id,
    data: { activity },
  });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <TripItemCard
        activity={activity}
        dragHandleProps={{ ...attributes, ...listeners }}
        isDragging={isDragging}
        onRemove={onRemove}
      />
    </div>
  );
}
