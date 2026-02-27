import { MapPin, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="rounded-2xl border bg-card p-10 shadow-sm max-w-md w-full">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <MapPin className="h-8 w-8 text-primary" />
        </div>

        {/* 404 badge */}
        <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
          404
        </span>

        {/* Message */}
        <h1 className="mt-4 text-2xl font-bold">페이지를 찾을 수 없습니다</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
          <br />
          주소를 다시 확인하거나 홈으로 돌아가 주세요.
        </p>

        {/* Action */}
        <div className="mt-8">
          <Button asChild>
            <Link href="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              여행 플래너 홈으로
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
