import LoginForm from "@/components/auth/LoginForm";
import { Suspense } from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-bold text-blue-600">TravelAI</span>
          </Link>
          <h1 className="mt-4 text-xl font-semibold text-gray-900">로그인</h1>
          <p className="mt-1 text-sm text-gray-500">여행 계획을 시작해보세요</p>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          계정이 없으신가요?{" "}
          <Link
            href="/auth/register"
            className="font-medium text-blue-600 hover:underline"
          >
            회원가입
          </Link>
        </p>
      </div>
    </main>
  );
}
