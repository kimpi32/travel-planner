import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Train, Bed, Sparkles, ExternalLink } from "lucide-react";
import { geoNodes } from "@/data/geography";
import { countryDetails } from "@/data/country-details";
import { cityDetails, attractionDetails, slugify, type CityDetail, type DayTripInfo } from "@/data/city-details";
import AiEstimateSidebar from "@/components/destination/AiEstimateSidebar";

interface CityPageProps {
  params: Promise<{ slug: string; region: string; city: string }>;
}

export function generateStaticParams() {
  const params: { slug: string; region: string; city: string }[] = [];
  for (const [slug, detail] of Object.entries(countryDetails)) {
    for (const region of detail.regions) {
      for (const city of region.cities) {
        const citySlug = slugify(city.nameEn);
        if (cityDetails[`${slug}/${region.slug}/${citySlug}`]) {
          params.push({ slug, region: region.slug, city: citySlug });
        }
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: CityPageProps) {
  const { slug, region: regionSlug, city: citySlug } = await params;
  const detail = countryDetails[slug];
  const node = geoNodes.find((n) => n.slug === slug);
  const region = detail?.regions.find((r) => r.slug === regionSlug);
  const city = region?.cities.find((c) => slugify(c.nameEn) === citySlug);
  if (!node || !city) return { title: "Not Found" };
  return {
    title: `${city.name} 여행 가이드 | ${node.name} ${region!.name}`,
    description: `${city.name}(${city.nameEn}) 완벽 가이드 - 주요 명소, 지역별 탐방, 맛집, 당일치기 여행지`,
  };
}

function DistrictCard({ district }: { district: CityDetail["districts"][number] }) {
  return (
    <div className="rounded-xl border bg-card p-4">
      <h3 className="font-bold">{district.name}</h3>
      <p className="mt-0.5 text-xs text-muted-foreground">{district.nameEn}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{district.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {district.highlights.map((h) => (
          <span key={h} className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{h}</span>
        ))}
      </div>
    </div>
  );
}

function AttractionCard({ attraction, href }: { attraction: CityDetail["attractions"][number]; href?: string }) {
  const content = (
    <div className={`flex gap-3 rounded-xl border bg-card p-4 transition-all ${href ? "hover:shadow-md" : ""}`}>
      <div className="shrink-0">
        <span className="inline-block rounded-lg bg-muted px-2 py-1 text-[10px] font-semibold text-muted-foreground">
          {attraction.category}
        </span>
      </div>
      <div>
        <h3 className="font-bold group-hover:text-primary">{attraction.name}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">{attraction.nameEn}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{attraction.description}</p>
        {attraction.tip && (
          <p className="mt-2 text-xs text-primary">💡 {attraction.tip}</p>
        )}
        {href && (
          <p className="mt-2 text-xs font-semibold text-primary">상세 정보 보기 →</p>
        )}
      </div>
    </div>
  );
  if (href) return <Link href={href} className="group">{content}</Link>;
  return content;
}

function DayTripCard({ trip }: { trip: DayTripInfo }) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-lg">
      <div className={`h-28 bg-gradient-to-br ${trip.gradient} p-4`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="font-bold">{trip.name}</h3>
        <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
          <Train className="h-3 w-3" /> {trip.travelTime}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{trip.description}</p>
      </div>
    </div>
  );
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug, region: regionSlug, city: citySlug } = await params;
  const node = geoNodes.find((n) => n.slug === slug);
  const detail = countryDetails[slug];
  if (!node || !detail) notFound();

  const region = detail.regions.find((r) => r.slug === regionSlug);
  if (!region) notFound();

  const city = region.cities.find((c) => slugify(c.nameEn) === citySlug);
  if (!city) notFound();

  const cityDetail = cityDetails[`${slug}/${regionSlug}/${citySlug}`];
  if (!cityDetail) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Link
          href={`/destination/${slug}/${regionSlug}`}
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> {region.icon} {region.name}
        </Link>
        <div className="mt-12 text-center">
          <h1 className="text-3xl font-bold">{city.name}</h1>
          <p className="mt-2 text-muted-foreground">{city.nameEn}</p>
          <p className="mt-4 text-sm text-muted-foreground">{city.description}</p>
          <p className="mt-8 text-muted-foreground">상세 가이드를 준비 중입니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* 히어로 */}
      <div className={`relative bg-gradient-to-br ${cityDetail.heroGradient} px-4 pb-12 pt-6`}>
        <div className="mx-auto max-w-7xl">
          <Link
            href={`/destination/${slug}/${regionSlug}`}
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> {region.icon} {node.name} {region.name}
          </Link>
          <div className="mt-8 text-white">
            <h1 className="text-4xl font-bold drop-shadow-sm">{city.name}</h1>
            <p className="mt-1 text-lg font-medium text-white/80">{city.nameEn}</p>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/90">
            {cityDetail.description}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex gap-8 lg:flex-row flex-col-reverse">
          <div className="min-w-0 flex-1">
            {/* 기본 정보 */}
            <section className="mb-10">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex items-start gap-3 rounded-xl border bg-card p-3">
                  <Clock className="mt-0.5 h-4 w-4 text-primary" />
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground">베스트 시즌</p>
                    <p className="mt-0.5 text-sm font-semibold">{cityDetail.bestTime}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border bg-card p-3">
                  <Bed className="mt-0.5 h-4 w-4 text-primary" />
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground">추천 숙소 지역</p>
                    <p className="mt-0.5 text-sm font-semibold">{cityDetail.stayArea}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border bg-card p-3">
                  <Train className="mt-0.5 h-4 w-4 text-primary" />
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground">시내 교통</p>
                    <p className="mt-0.5 text-sm font-semibold">{cityDetail.transport}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 지역별 탐방 */}
            {cityDetail.districts.length > 0 && (
              <section className="mb-10">
                <div className="mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">지역별 탐방</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {cityDetail.districts.map((d) => (
                    <DistrictCard key={d.nameEn} district={d} />
                  ))}
                </div>
              </section>
            )}

            {/* 주요 명소 */}
            {cityDetail.attractions.length > 0 && (
              <section className="mb-10">
                <h2 className="mb-4 text-xl font-bold">주요 명소</h2>
                <div className="space-y-3">
                  {cityDetail.attractions.map((a) => {
                    const aSlug = slugify(a.nameEn);
                    const hasDetail = !!attractionDetails[`${slug}/${regionSlug}/${citySlug}/${aSlug}`];
                    return (
                      <AttractionCard
                        key={a.nameEn}
                        attraction={a}
                        href={hasDetail ? `/destination/${slug}/${regionSlug}/${citySlug}/${aSlug}` : undefined}
                      />
                    );
                  })}
                </div>
              </section>
            )}

            {/* 로컬 맛집 */}
            {cityDetail.localFood.length > 0 && (
              <section className="mb-10">
                <h2 className="mb-4 text-xl font-bold">먹거리 & 맛집</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {cityDetail.localFood.map((f) => (
                    <div key={f.name} className="flex items-start gap-3 rounded-xl border bg-card p-3">
                      <span className="text-2xl">{f.emoji}</span>
                      <div>
                        <h3 className="text-sm font-bold">{f.name}</h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">{f.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 당일치기 */}
            {cityDetail.dayTrips.length > 0 && (
              <section className="mb-10">
                <h2 className="mb-4 text-xl font-bold">근교 당일치기</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cityDetail.dayTrips.map((t) => (
                    <DayTripCard key={t.nameEn} trip={t} />
                  ))}
                </div>
              </section>
            )}

            {/* 여행 팁 */}
            {cityDetail.tips.length > 0 && (
              <section className="mb-10">
                <h2 className="mb-4 text-xl font-bold">{city.name} 여행 팁</h2>
                <ul className="space-y-2">
                  {cityDetail.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 text-primary">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 같은 권역 다른 도시 */}
            <section>
              <h2 className="mb-4 text-xl font-bold">{region.name}의 다른 도시</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {region.cities
                  .filter((c) => slugify(c.nameEn) !== citySlug)
                  .map((c) => {
                    const cSlug = slugify(c.nameEn);
                    const hasDetail = !!cityDetails[`${slug}/${regionSlug}/${cSlug}`];
                    const inner = (
                      <>
                        <div className={`h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br ${c.gradient}`} />
                        <div>
                          <p className="text-sm font-bold group-hover:text-primary">{c.name}</p>
                          <p className="text-[10px] text-muted-foreground">{c.nameEn}</p>
                        </div>
                      </>
                    );
                    return hasDetail ? (
                      <Link key={c.nameEn} href={`/destination/${slug}/${regionSlug}/${cSlug}`} className="group flex items-center gap-3 rounded-xl border bg-card p-3 transition-all hover:shadow-md">
                        {inner}
                      </Link>
                    ) : (
                      <div key={c.nameEn} className="group flex items-center gap-3 rounded-xl border bg-card p-3 transition-all hover:shadow-md">
                        {inner}
                      </div>
                    );
                  })}
              </div>
            </section>
          </div>

          {/* 사이드바 */}
          <div className="w-full shrink-0 lg:w-80">
            <div className="lg:sticky lg:top-6">
              <AiEstimateSidebar
                countryName={`${node.name} ${city.name}`}
                countryNameEn={city.nameEn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
