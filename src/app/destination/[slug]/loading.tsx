import HeroSkeleton from "@/components/skeletons/HeroSkeleton"
import CardGridSkeleton from "@/components/skeletons/CardGridSkeleton"
import SidebarSkeleton from "@/components/skeletons/SidebarSkeleton"
import { Skeleton } from "@/components/ui/skeleton"

export default function DestinationLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSkeleton />

      {/* Main content + sidebar */}
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex gap-8 lg:flex-row flex-col-reverse">
          {/* Left: main content */}
          <div className="min-w-0 flex-1">
            {/* 기본 정보 section */}
            <section className="mb-10">
              <Skeleton className="mb-4 h-7 w-24" />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border bg-card p-3">
                    <Skeleton className="h-8 w-8 rounded-lg shrink-0" />
                    <div className="space-y-1.5 flex-1">
                      <Skeleton className="h-3 w-12" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 권역 헥스 타일 section */}
            <section className="mb-10">
              <Skeleton className="mb-2 h-7 w-32" />
              <Skeleton className="mb-6 h-4 w-52" />
              <div className="flex flex-wrap gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    style={{
                      width: 140,
                      height: 121,
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      borderRadius: 0,
                    }}
                  />
                ))}
              </div>
            </section>

            {/* 대표 음식 section */}
            <section className="mb-10">
              <Skeleton className="mb-4 h-7 w-24" />
              <CardGridSkeleton count={4} columns={2} />
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
