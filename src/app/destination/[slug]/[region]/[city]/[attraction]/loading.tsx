import HeroSkeleton from "@/components/skeletons/HeroSkeleton"
import SidebarSkeleton from "@/components/skeletons/SidebarSkeleton"
import { Skeleton } from "@/components/ui/skeleton"

export default function AttractionLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSkeleton />

      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex gap-8 lg:flex-row flex-col-reverse">
          <div className="min-w-0 flex-1">
            {/* Visit info cards */}
            <section className="mb-10">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border bg-card p-3">
                    <Skeleton className="mt-0.5 h-4 w-4 rounded shrink-0" />
                    <div className="space-y-1.5 flex-1">
                      <Skeleton className="h-3 w-16" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* History section */}
            <section className="mb-10">
              <Skeleton className="mb-4 h-7 w-28" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </section>

            {/* Highlights section */}
            <section className="mb-10">
              <div className="mb-4 flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded" />
                <Skeleton className="h-7 w-28" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border bg-card p-3">
                    <Skeleton className="mt-0.5 h-6 w-6 rounded-full shrink-0" />
                    <Skeleton className="h-4 flex-1" />
                  </div>
                ))}
              </div>
            </section>

            {/* Photo tips */}
            <section className="mb-10">
              <div className="mb-4 flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded" />
                <Skeleton className="h-7 w-20" />
              </div>
              <div className="rounded-xl border bg-card p-4 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
            </section>

            {/* Nearby attractions */}
            <section className="mb-10">
              <Skeleton className="mb-4 h-7 w-24" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-8 w-20 rounded-full" />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
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
