import HeroSkeleton from "@/components/skeletons/HeroSkeleton"
import CardGridSkeleton from "@/components/skeletons/CardGridSkeleton"
import SidebarSkeleton from "@/components/skeletons/SidebarSkeleton"
import { Skeleton } from "@/components/ui/skeleton"

export default function RegionLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSkeleton />

      {/* Main content + sidebar */}
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex gap-8 lg:flex-row flex-col-reverse">
          {/* Left: recommended cities */}
          <div className="min-w-0 flex-1">
            {/* Section header */}
            <section className="mb-10">
              <div className="mb-6 flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded" />
                <Skeleton className="h-7 w-24" />
                <Skeleton className="h-6 w-10 rounded-full" />
              </div>
              <CardGridSkeleton count={4} columns={2} />
            </section>

            {/* Tips section */}
            <section className="mb-10">
              <Skeleton className="mb-4 h-7 w-36" />
              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
              </div>
            </section>

            {/* Other regions */}
            <section>
              <Skeleton className="mb-4 h-7 w-40" />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl border bg-card p-3">
                    <Skeleton className="h-10 w-10 rounded-lg shrink-0" />
                    <div className="space-y-1.5">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-3 w-12" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: sidebar */}
          <div className="w-full shrink-0 lg:w-80">
            <div className="lg:sticky lg:top-6">
              <SidebarSkeleton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
