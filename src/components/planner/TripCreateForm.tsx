"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePlannerStore } from "@/hooks/use-planner-store";

interface TripCreateFormProps {
  onCreated?: (tripId: string) => void;
}

export function TripCreateForm({ onCreated }: TripCreateFormProps) {
  const [open, setOpen] = useState(false);
  const createTrip = usePlannerStore((s) => s.createTrip);

  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [budget, setBudget] = useState("");
  const [error, setError] = useState("");

  function reset() {
    setTitle("");
    setDestination("");
    setStartDate("");
    setEndDate("");
    setTravelers("2");
    setBudget("");
    setError("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("여행 제목을 입력하세요.");
      return;
    }
    if (!destination.trim()) {
      setError("여행지를 입력하세요.");
      return;
    }
    if (!startDate || !endDate) {
      setError("날짜를 선택하세요.");
      return;
    }
    if (new Date(endDate) < new Date(startDate)) {
      setError("종료일은 시작일 이후여야 합니다.");
      return;
    }

    const trip = createTrip({
      title: title.trim(),
      destination: destination.trim(),
      startDate,
      endDate,
      travelers: parseInt(travelers),
      budget: budget ? parseInt(budget) : 0,
    });

    setOpen(false);
    reset();
    onCreated?.(trip.id);
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) reset(); }}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg sm:h-auto sm:w-auto sm:rounded-md sm:px-5"
        >
          <Plus className="size-5 sm:mr-2" />
          <span className="hidden sm:inline">새 여행 만들기</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>새 여행 만들기</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">여행 제목</label>
            <Input
              placeholder="예: 유럽 배낭여행 2026"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium">여행지</label>
            <Input
              placeholder="예: 파리, 프랑스"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">출발일</label>
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">귀국일</label>
              <Input
                type="date"
                value={endDate}
                min={startDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">여행인원</label>
              <Select value={travelers} onValueChange={setTravelers}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <SelectItem key={n} value={String(n)}>
                      {n}명
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">예산 (원, 선택)</label>
              <Input
                type="number"
                placeholder="예: 2000000"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                min={0}
              />
            </div>
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <div className="flex justify-end gap-2 pt-1">
            <Button type="button" variant="outline" onClick={() => { setOpen(false); reset(); }}>
              취소
            </Button>
            <Button type="submit">여행 만들기</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
