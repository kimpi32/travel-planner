"use client";

import { useRouter } from "next/navigation";
import { Plane } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TripCard } from "./TripCard";
import { TripCreateForm } from "./TripCreateForm";
import { usePlannerStore } from "@/hooks/use-planner-store";
import { TripStatus } from "@/types/planner";

const TAB_CONFIG: { value: TripStatus; label: string }[] = [
  { value: "planning", label: "계획 중" },
  { value: "active", label: "여행 중" },
  { value: "completed", label: "완료" },
];

function EmptyState({ status }: { status: TripStatus }) {
  const messages: Record<TripStatus, string> = {
    planning: "아직 계획 중인 여행이 없습니다.\n새 여행을 만들어 보세요!",
    active: "현재 진행 중인 여행이 없습니다.",
    completed: "완료된 여행이 없습니다.",
  };
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 text-muted-foreground">
      <Plane className="size-10 opacity-30" />
      <p className="text-sm text-center whitespace-pre-line">{messages[status]}</p>
    </div>
  );
}

export function TripDashboard() {
  const router = useRouter();
  const trips = usePlannerStore((s) => s.trips);

  const tripsByStatus = (status: TripStatus) =>
    trips.filter((t) => t.status === status);

  function handleCreated(tripId: string) {
    router.push(`/planner/${tripId}`);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3">
          <div className="flex items-center gap-2">
            <Plane className="size-5" />
            <h1 className="text-lg font-bold">내 여행</h1>
          </div>
          <div className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
            <span>{trips.length}개의 여행</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <Tabs defaultValue="planning">
          <TabsList className="mb-6">
            {TAB_CONFIG.map(({ value, label }) => (
              <TabsTrigger key={value} value={value} className="gap-1.5">
                {label}
                {tripsByStatus(value).length > 0 && (
                  <span className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs px-1.5 py-0.5 min-w-[1.25rem]">
                    {tripsByStatus(value).length}
                  </span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          {TAB_CONFIG.map(({ value }) => (
            <TabsContent key={value} value={value}>
              {tripsByStatus(value).length === 0 ? (
                <EmptyState status={value} />
              ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {tripsByStatus(value).map((trip) => (
                    <TripCard key={trip.id} trip={trip} />
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <TripCreateForm onCreated={handleCreated} />
    </div>
  );
}
