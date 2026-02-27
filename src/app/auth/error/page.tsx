import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm text-center">
        <div className="rounded-xl bg-white p-10 shadow-sm ring-1 ring-gray-200">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-7 w-7 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </div>

          <h1 className="text-lg font-semibold text-gray-900">인증 오류가 발생했습니다</h1>
          <p className="mt-2 text-sm text-gray-500">
            로그인 처리 중 문제가 발생했습니다.
            <br />
            다시 시도해주세요.
          </p>

          <div className="mt-6 space-y-3">
            <Link
              href="/auth/login"
              className="block w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              로그인 페이지로 이동
            </Link>
            <Link
              href="/"
              className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
