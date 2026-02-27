"use client";

import { Map } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function PlannerMap() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="flex flex-col items-center justify-center gap-3 py-12 text-muted-foreground">
        <Map className="size-10 opacity-30" />
        <div className="text-center">
          <p className="text-sm font-medium">지도 보기</p>
          <p className="text-xs opacity-60 mt-0.5">준비 중</p>
        </div>
      </CardContent>
    </Card>
  );
}
