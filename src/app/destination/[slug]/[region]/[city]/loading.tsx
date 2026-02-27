import HeroSkeleton from "@/components/skeletons/HeroSkeleton"
import CardGridSkeleton from "@/components/skeletons/CardGridSkeleton"
import SidebarSkeleton from "@/components/skeletons/SidebarSkeleton"
import { Skeleton } from "@/components/ui/skeleton"

export default function CityLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSkeleton />

      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex gap-8 lg:flex-row flex-col-reverse">
          <div className="min-w-0 flex-1">
            {/* Quick info cards */}
            <section className="mb-10">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border bg-card p-3">
                    <Skeleton className="mt-0.5 h-4 w-4 rounded shrink-0" />
                    <div className="space-y-1.5 flex-1">
                      <Skeleton className="h-3 w-20" />
                      <Skeleton className="h-4 w-28" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Districts section */}
            <section className="mb-10">
              <div className="mb-4 flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded" />
                <Skeleton className="h-7 w-28" />
              </div>
              <CardGridSkeleton count={4} columns={2} />
            </section>

            {/* Attractions section */}
            <section className="mb-10">
              <Skeleton className="mb-4 h-7 w-24" />
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex gap-3 rounded-xl border bg-card p-4">
                    <Skeleton className="h-6 w-14 rounded-md shrink-0" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-5 w-36" />
                      <Skeleton className="h-3.5 w-24" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Local food section */}
            <section className="mb-10">
              <Skeleton className="mb-4 h-7 w-32" />
              <CardGridSkeleton count={4} columns={2} />
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
