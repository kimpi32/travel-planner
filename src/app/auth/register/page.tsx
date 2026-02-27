import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-bold text-blue-600">TravelAI</span>
          </Link>
          <h1 className="mt-4 text-xl font-semibold text-gray-900">회원가입</h1>
          <p className="mt-1 text-sm text-gray-500">AI 여행 플래너와 함께 떠나보세요</p>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
          <RegisterForm />
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          이미 계정이 있으신가요?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-blue-600 hover:underline"
          >
            로그인
          </Link>
        </p>
      </div>
    </main>
  );
}
