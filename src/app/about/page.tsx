import type { Metadata } from "next";
import { Plane, Bot, Map, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "서비스 소개 | 여행 플래너",
  description: "AI와 함께하는 스마트 여행 계획 서비스, 여행 플래너를 소개합니다.",
};

const features = [
  {
    icon: Bot,
    title: "AI 여행 견적",
    description:
      "여행지, 기간, 인원, 스타일만 입력하면 AI가 예상 비용을 실시간으로 산출해 드립니다. 항공, 숙박, 식비, 교통, 관광 등 항목별 상세 견적을 확인하세요.",
  },
  {
    icon: Map,
    title: "여행 플래너",
    description:
      "일정별로 방문할 장소와 활동을 정리하고, 나만의 여행 계획을 체계적으로 관리할 수 있습니다. 언제 어디서든 내 여행 계획을 확인하세요.",
  },
  {
    icon: Users,
    title: "커뮤니티",
    description:
      "다른 여행자들의 경험과 팁을 공유하고, 여행 후기를 나눠보세요. 질문과 답변을 통해 더 나은 여행을 준비할 수 있습니다.",
  },
  {
    icon: Globe,
    title: "50+국가 여행 정보",
    description:
      "전 세계 50개국 이상의 도시별 상세 정보와 주요 명소 데이터를 제공합니다. 비자, 환율, 시차, 추천 시기 등 실용 정보를 한눈에 확인하세요.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* 헤더 */}
      <div className="mb-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
          <Plane className="h-7 w-7 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          서비스 소개
        </h1>
        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
          AI와 함께하는 스마트 여행 계획,{" "}
          <span className="font-semibold text-foreground">여행 플래너</span>
          입니다.
        </p>
      </div>

      {/* 서비스 설명 */}
      <section className="mb-10">
        <p className="text-muted-foreground leading-relaxed">
          여행 플래너는 여행 계획의 모든 단계를 도와주는 올인원 서비스입니다.
          어디로 떠날지 고민되는 순간부터, 예산 계획, 일정 관리, 여행 후기
          공유까지 — 하나의 플랫폼에서 편리하게 이용하실 수 있습니다.
        </p>
      </section>

      {/* 주요 기능 */}
      <section className="mb-10">
        <h2 className="mb-6 text-xl font-semibold text-foreground">
          주요 기능
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg border bg-card p-5 shadow-sm"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950">
                <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-1 font-semibold text-card-foreground">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 마무리 */}
      <section className="rounded-lg border bg-muted/50 p-6 text-center">
        <p className="text-muted-foreground leading-relaxed">
          여행 플래너와 함께라면 복잡한 여행 준비도 간단해집니다.
          <br />
          지금 바로 시작해 보세요.
        </p>
      </section>
    </div>
  );
}
