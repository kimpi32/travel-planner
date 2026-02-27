"use client"

import { useEffect } from "react"
import { AlertTriangle, RefreshCw, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function DestinationError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen">
      {/* Minimal header area */}
      <div className="border-b bg-background px-4 py-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          여행 플래너로 돌아가기
        </Link>
      </div>

      {/* Error body */}
      <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
        <div className="rounded-2xl border bg-card p-10 shadow-sm max-w-md w-full">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-destructive/10">
            <AlertTriangle className="h-7 w-7 text-destructive" />
          </div>

          <h1 className="text-xl font-bold">목적지 정보를 불러올 수 없습니다</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            잠시 후 다시 시도하거나 다른 목적지를 선택해 주세요.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button onClick={reset} size="sm" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              다시 시도
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                목적지 선택
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
