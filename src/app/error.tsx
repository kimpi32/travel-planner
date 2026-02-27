"use client"

import { useEffect } from "react"
import { AlertTriangle, RefreshCw, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="rounded-2xl border bg-card p-10 shadow-sm max-w-md w-full">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10">
          <AlertTriangle className="h-8 w-8 text-destructive" />
        </div>

        {/* Message */}
        <h1 className="text-2xl font-bold">문제가 발생했습니다</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          페이지를 불러오는 중 오류가 발생했습니다.
          <br />
          잠시 후 다시 시도해 주세요.
        </p>

        {/* Digest for debugging */}
        {error.digest && (
          <p className="mt-3 rounded-lg bg-muted px-3 py-1.5 text-[11px] font-mono text-muted-foreground">
            오류 코드: {error.digest}
          </p>
        )}

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button onClick={reset} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            다시 시도
          </Button>
          <Button variant="outline" asChild>
            <Link href="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              홈으로
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
