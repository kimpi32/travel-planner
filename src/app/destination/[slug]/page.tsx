import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Globe, DollarSign, Clock, ThermometerSun, Plane, MapPin, Calendar } from "lucide-react";
import { geoNodes } from "@/data/geography";
import { countryDetails, type CountryDetail } from "@/data/country-details";
import RegionHexGrid from "@/components/destination/RegionHexGrid";
import AiEstimateSidebar from "@/components/destination/AiEstimateSidebar";

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
    description: `${node.name}(${node.nameEn}) 여행 가이드 - 권역별 추천 여행지, 음식, 예산, 비자 정보`,
  };
}

function InfoCard({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border bg-card p-3">
      <div className="rounded-lg bg-primary/10 p-2">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="text-[11px] font-medium text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
}

function FoodCard({ food }: { food: CountryDetail["foods"][number] }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border bg-card p-3">
      <span className="text-2xl">{food.emoji}</span>
      <div>
        <h3 className="text-sm font-bold">{food.name}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">{food.description}</p>
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
        <div className="mx-auto max-w-7xl">
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

      {/* 메인 콘텐츠 + 사이드바 */}
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex gap-8 lg:flex-row flex-col-reverse">
          {/* 좌측: 메인 콘텐츠 */}
          <div className="min-w-0 flex-1">
            {/* 기본 정보 */}
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

            {/* 권역 헥스 타일 */}
            {detail.regions.length > 0 && (
              <section className="mb-10">
                <h2 className="mb-2 text-xl font-bold">권역별 여행지</h2>
                <p className="mb-6 text-sm text-muted-foreground">권역을 클릭하면 추천 도시를 볼 수 있어요</p>
                <RegionHexGrid countrySlug={slug} regions={detail.regions} />
              </section>
            )}

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
          </div>

          {/* 우측: AI 견적 사이드바 */}
          <div className="w-full shrink-0 lg:w-80">
            <div className="lg:sticky lg:top-6">
              <AiEstimateSidebar countryName={node.name} countryNameEn={node.nameEn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
