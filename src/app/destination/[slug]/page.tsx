import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Plane, MapPin, Calendar, DollarSign, Utensils, Clock, Globe, ThermometerSun } from "lucide-react";
import { geoNodes } from "@/data/geography";
import { countryDetails, type CountryDetail } from "@/data/country-details";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return geoNodes
    .filter((n) => n.level === "country" && !n.id.startsWith("domestic"))
    .map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: DestinationPageProps) {
  const { slug } = await params;
  const node = geoNodes.find((n) => n.slug === slug);
  if (!node) return { title: "Not Found" };
  return {
    title: `${node.name} 여행 정보 | 여행 플래너`,
    description: `${node.name}(${node.nameEn}) 여행 가이드 - 추천 여행지, 음식, 예산, 비자 정보`,
  };
}

function InfoCard({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
      <div className="rounded-lg bg-primary/10 p-2">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
}

function SpotCard({ spot }: { spot: CountryDetail["spots"][number] }) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-lg">
      <div className={`h-40 bg-gradient-to-br ${spot.gradient}`} />
      <div className="p-4">
        <h3 className="font-bold">{spot.name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{spot.nameEn}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{spot.description}</p>
      </div>
    </div>
  );
}

function FoodCard({ food }: { food: CountryDetail["foods"][number] }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
      <span className="text-3xl">{food.emoji}</span>
      <div>
        <h3 className="font-bold">{food.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{food.description}</p>
      </div>
    </div>
  );
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const node = geoNodes.find((n) => n.slug === slug);
  if (!node) notFound();

  const detail = countryDetails[slug];
  if (!detail) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> 돌아가기
        </Link>
        <div className="mt-12 text-center">
          <span className="text-6xl">{node.icon}</span>
          <h1 className="mt-4 text-3xl font-bold">{node.name}</h1>
          <p className="mt-2 text-muted-foreground">{node.nameEn}</p>
          <p className="mt-8 text-muted-foreground">상세 정보를 준비 중입니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* 히어로 */}
      <div className={`relative bg-gradient-to-br ${detail.heroGradient} px-4 pb-12 pt-6`}>
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> 돌아가기
          </Link>
          <div className="mt-8 flex items-end gap-4">
            <span className="text-6xl drop-shadow-lg">{node.icon}</span>
            <div className="text-white">
              <h1 className="text-4xl font-bold drop-shadow-sm">{node.name}</h1>
              <p className="mt-1 text-lg font-medium text-white/80">{node.nameEn}</p>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90">
            {detail.intro}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* 기본 정보 그리드 */}
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">기본 정보</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            <InfoCard icon={Globe} label="수도" value={detail.capital} />
            <InfoCard icon={DollarSign} label="통화" value={detail.currency} />
            <InfoCard icon={Clock} label="시차" value={detail.timezone} />
            <InfoCard icon={ThermometerSun} label="베스트 시즌" value={detail.bestSeason} />
            <InfoCard icon={Plane} label="비행시간" value={detail.flightTime} />
            <InfoCard icon={MapPin} label="비자" value={detail.visa} />
            <InfoCard icon={Calendar} label="추천 일정" value={detail.recommendedDays} />
            <InfoCard icon={DollarSign} label="1일 예산" value={detail.dailyBudget} />
          </div>
        </section>

        {/* 추천 여행지 */}
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">추천 여행지</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {detail.spots.map((spot) => (
              <SpotCard key={spot.name} spot={spot} />
            ))}
          </div>
        </section>

        {/* 대표 음식 */}
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">대표 음식</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {detail.foods.map((food) => (
              <FoodCard key={food.name} food={food} />
            ))}
          </div>
        </section>

        {/* 여행 팁 */}
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">여행 팁</h2>
          <ul className="space-y-2">
            {detail.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 text-primary">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* AI 견적 CTA */}
        <section className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-8 text-center">
          <Plane className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-3 text-xl font-bold">AI 여행 견적 받기</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {node.name} 여행 예산, 항공권, 숙소, 일정을 AI가 자동으로 견적해 드립니다.
          </p>
          <button className="mt-4 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            견적 요청하기 (준비중)
          </button>
        </section>
      </div>
    </div>
  );
}
