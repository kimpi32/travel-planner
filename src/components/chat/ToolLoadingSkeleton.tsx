"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Plane, Wallet, MapPin, Sun, DollarSign, Utensils, FileText, Hotel } from "lucide-react";

interface ToolLoadingSkeletonProps {
  toolName: string;
}

export default function ToolLoadingSkeleton({ toolName }: ToolLoadingSkeletonProps) {
  switch (toolName) {
    case "searchFlights":
      return (
        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Plane className="h-3.5 w-3.5 animate-pulse text-primary" />
            <span>항공권 검색 중...</span>
          </div>
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-xl border p-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-8 rounded-lg" />
                  <div className="space-y-1">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-2 w-12" />
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-center gap-2">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-px flex-1" />
                  <Skeleton className="h-4 w-12" />
                </div>
                <div className="text-right space-y-1">
                  <Skeleton className="h-4 w-20 ml-auto" />
                  <Skeleton className="h-2 w-14 ml-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      );

    case "estimateBudget":
      return (
        <div className="mt-2 space-y-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Wallet className="h-3.5 w-3.5 animate-pulse text-primary" />
            <span>예산 계산 중...</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Skeleton className="h-16 rounded-xl" />
            <Skeleton className="h-16 rounded-xl" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-24 w-24 rounded-full shrink-0" />
            <div className="flex-1 space-y-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between">
                    <Skeleton className="h-2.5 w-16" />
                    <Skeleton className="h-2.5 w-12" />
                  </div>
                  <Skeleton className="h-1.5 w-full rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "createItinerary":
      return (
        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 animate-pulse text-primary" />
            <span>일정 생성 중...</span>
          </div>
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="rounded-xl border">
              <div className="flex items-center gap-3 px-4 py-3">
                <Skeleton className="h-7 w-7 rounded-full shrink-0" />
                <div className="flex-1 space-y-1">
                  <Skeleton className="h-2.5 w-16" />
                  <Skeleton className="h-3.5 w-36" />
                </div>
                <Skeleton className="h-4 w-4 rounded" />
              </div>
            </div>
          ))}
        </div>
      );

    case "getWeather":
      return (
        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Sun className="h-3.5 w-3.5 animate-pulse text-amber-400" />
            <span>날씨 정보 가져오는 중...</span>
          </div>
          <Skeleton className="h-24 rounded-xl" />
          <div className="grid grid-cols-5 gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <Skeleton key={i} className="h-20 rounded-lg" />
            ))}
          </div>
        </div>
      );

    case "getExchangeRate":
      return (
        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <DollarSign className="h-3.5 w-3.5 animate-pulse text-primary" />
            <span>환율 정보 가져오는 중...</span>
          </div>
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center gap-3 rounded-xl border px-4 py-3">
              <div className="flex items-center gap-1.5">
                <Skeleton className="h-7 w-7 rounded-full" />
                <Skeleton className="h-3 w-8" />
                <Skeleton className="h-3 w-4" />
                <Skeleton className="h-7 w-7 rounded-full" />
                <Skeleton className="h-3 w-8" />
              </div>
              <div className="ml-auto space-y-1">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-2.5 w-14 ml-auto" />
              </div>
            </div>
          ))}
        </div>
      );

    case "searchRestaurants":
      return (
        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Utensils className="h-3.5 w-3.5 animate-pulse text-primary" />
            <span>맛집 검색 중...</span>
          </div>
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-xl border p-3">
              <div className="flex gap-3">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-4 w-16 rounded-full" />
                  </div>
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-3/4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      );

    case "getVisaInfo":
      return (
        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <FileText className="h-3.5 w-3.5 animate-pulse text-primary" />
            <span>비자 정보 확인 중...</span>
          </div>
          <div className="rounded-xl border p-4 space-y-3">
            <Skeleton className="h-10 rounded-lg" />
            <div className="grid grid-cols-2 gap-2">
              <Skeleton className="h-16 rounded-lg" />
              <Skeleton className="h-16 rounded-lg" />
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton className="h-3.5 w-3.5 rounded-full shrink-0" />
                  <Skeleton className="h-3 flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            <span className="text-xs text-muted-foreground">정보를 가져오는 중...</span>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      );
  }
}
