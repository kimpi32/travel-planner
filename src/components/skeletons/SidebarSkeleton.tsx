import { Skeleton } from "@/components/ui/skeleton"

export default function SidebarSkeleton() {
  return (
    <div className="rounded-2xl border bg-card shadow-sm">
      {/* Header */}
      <div className="border-b px-5 py-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded-md" />
          <Skeleton className="h-5 w-28" />
        </div>
        <Skeleton className="mt-2 h-3.5 w-40" />
      </div>

      {/* Body */}
      <div className="space-y-4 p-5">
        {/* 인원 */}
        <div className="space-y-2">
          <Skeleton className="h-3.5 w-12" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-lg" />
            <Skeleton className="h-5 w-8" />
            <Skeleton className="h-8 w-8 rounded-lg" />
            <Skeleton className="h-3.5 w-6" />
          </div>
        </div>

        {/* 여행 기간 */}
        <div className="space-y-2">
          <Skeleton className="h-3.5 w-20" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-lg" />
            <Skeleton className="h-5 w-8" />
            <Skeleton className="h-8 w-8 rounded-lg" />
            <Skeleton className="h-3.5 w-6" />
          </div>
        </div>

        {/* 여행 스타일 */}
        <div className="space-y-2">
          <Skeleton className="h-3.5 w-24" />
          <Skeleton className="h-9 w-full rounded-lg" />
        </div>

        {/* 예상 금액 */}
        <div className="rounded-xl bg-muted/50 p-3 space-y-1.5">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>

        {/* CTA button */}
        <Skeleton className="h-11 w-full rounded-xl" />

        {/* Footer note */}
        <Skeleton className="mx-auto h-3 w-48" />
      </div>
    </div>
  )
}
