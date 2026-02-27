import { Skeleton } from "@/components/ui/skeleton"

export default function HeroSkeleton() {
  return (
    <div className="relative px-4 pb-12 pt-6 bg-muted/40">
      <div className="mx-auto max-w-7xl">
        {/* Back link */}
        <Skeleton className="h-5 w-28" />

        {/* Icon + title block */}
        <div className="mt-8 flex items-end gap-4">
          <Skeleton className="h-16 w-16 rounded-2xl shrink-0" />
          <div className="space-y-2">
            <Skeleton className="h-9 w-48" />
            <Skeleton className="h-5 w-32" />
          </div>
        </div>

        {/* Description */}
        <div className="mt-4 space-y-2 max-w-2xl">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </div>
    </div>
  )
}
