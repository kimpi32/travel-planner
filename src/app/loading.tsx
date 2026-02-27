import { Skeleton } from "@/components/ui/skeleton"

function HexPlaceholder() {
  return (
    <div
      className="shrink-0 animate-pulse"
      style={{
        width: 120,
        height: 104,
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        background: "hsl(var(--muted))",
      }}
    />
  )
}

export default function HomeLoading() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
          <div className="flex shrink-0 items-center gap-2">
            <Skeleton className="h-5 w-5 rounded" />
            <Skeleton className="h-5 w-24" />
          </div>
          <div className="flex-1">
            <Skeleton className="h-9 w-full max-w-md rounded-lg" />
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </header>

      {/* Hex grid placeholder */}
      <main className="mx-auto max-w-6xl px-4 py-10">
        {/* Region selector */}
        <div className="mb-6 flex flex-wrap gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-20 rounded-full" />
          ))}
        </div>

        {/* Hex tiles grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {Array.from({ length: 18 }).map((_, i) => (
            <HexPlaceholder key={i} />
          ))}
        </div>
      </main>
    </div>
  )
}
