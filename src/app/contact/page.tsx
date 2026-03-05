import type { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "문의하기 | 여행 플래너",
  description: "여행 플래너 서비스에 대한 문의 및 의견을 보내주세요.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
        문의하기
      </h1>
      <p className="mb-8 text-muted-foreground leading-relaxed">
        서비스 이용 중 궁금한 점이나 개선 의견이 있으시면 아래 방법으로
        연락해 주세요.
      </p>

      {/* 연락처 정보 */}
      <section className="mb-10">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="font-semibold text-card-foreground">
                이메일 문의
              </h2>
              <a
                href="mailto:support@travel.supports.work"
                className="mt-1 inline-block text-sm text-blue-600 hover:underline dark:text-blue-400"
              >
                support@travel.supports.work
              </a>
              <p className="mt-1 text-sm text-muted-foreground">
                영업일 기준 1~2일 내 답변드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 문의 폼 */}
      <section>
        <div className="mb-6 flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-xl font-semibold text-foreground">
            문의 양식
          </h2>
        </div>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="이름을 입력해 주세요"
              className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="답변 받으실 이메일 주소"
              className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              문의 내용
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="문의 내용을 자세히 적어 주세요"
              className="w-full resize-none rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            문의 보내기
          </button>
          <p className="text-center text-xs text-muted-foreground">
            현재 문의 양식은 준비 중입니다. 이메일로 직접 연락해 주세요.
          </p>
        </form>
      </section>
    </div>
  );
}
