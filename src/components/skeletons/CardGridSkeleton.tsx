import { Skeleton } from "@/components/ui/skeleton"

interface CardGridSkeletonProps {
  count?: number
  columns?: 1 | 2 | 3 | 4
}

const columnClass: Record<NonNullable<CardGridSkeletonProps["columns"]>, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
}

export default function CardGridSkeleton({ count = 4, columns = 2 }: CardGridSkeletonProps) {
  return (
    <div className={`grid gap-4 ${columnClass[columns]}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-2xl border bg-card overflow-hidden">
          {/* Card image / gradient area */}
          <Skeleton className="h-44 w-full rounded-none" />
          {/* Card body */}
          <div className="p-5 space-y-3">
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-4 w-1/3" />
            <div className="space-y-1.5 pt-1">
              <Skeleton className="h-3.5 w-full" />
              <Skeleton className="h-3.5 w-5/6" />
            </div>
            {/* Tag row */}
            <div className="flex gap-1.5 pt-1">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-14 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
