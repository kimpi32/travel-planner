import { Skeleton } from "@/components/ui/skeleton";

export default function EstimateLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero skeleton */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background px-4 py-10 md:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 flex justify-center">
            <Skeleton className="h-7 w-36 rounded-full" />
          </div>
          <Skeleton className="mx-auto h-10 w-3/4 rounded-lg" />
          <Skeleton className="mx-auto mt-3 h-5 w-2/3 rounded" />
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-8">
        {/* 설정 패널 skeleton */}
        <div className="mb-6 rounded-2xl border bg-card shadow-sm">
          <div className="border-b px-5 py-4">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="mt-1 h-3 w-48" />
          </div>
          <div className="grid gap-5 p-5 sm:grid-cols-2">
            {/* 여행지 */}
            <div className="sm:col-span-2">
              <Skeleton className="mb-1.5 h-3 w-20" />
              <Skeleton className="h-9 w-full rounded-lg" />
            </div>
            {/* 인원 */}
            <div>
              <Skeleton className="mb-1.5 h-3 w-12" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-9 w-9 rounded-lg" />
                <Skeleton className="h-5 w-8" />
                <Skeleton className="h-9 w-9 rounded-lg" />
              </div>
            </div>
            {/* 기간 */}
            <div>
              <Skeleton className="mb-1.5 h-3 w-16" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-9 w-9 rounded-lg" />
                <Skeleton className="h-5 w-8" />
                <Skeleton className="h-9 w-9 rounded-lg" />
              </div>
            </div>
            {/* 스타일 */}
            <div className="sm:col-span-2">
              <Skeleton className="mb-1.5 h-3 w-20" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
            {/* 예산 미리보기 */}
            <div className="sm:col-span-2">
              <Skeleton className="h-16 w-full rounded-xl" />
            </div>
            {/* CTA */}
            <div className="sm:col-span-2">
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>
          </div>
        </div>

        {/* 추천 프롬프트 skeleton */}
        <div className="mb-6">
          <Skeleton className="mb-2 h-3 w-16" />
          <div className="flex flex-wrap gap-1.5">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-32 rounded-full" />
            ))}
          </div>
        </div>

        {/* 빈 채팅 영역 skeleton */}
        <Skeleton className="h-40 w-full rounded-2xl" />

        {/* 입력창 skeleton */}
        <div className="mt-4">
          <Skeleton className="h-12 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
