import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Sparkles } from "lucide-react";
import { geoNodes } from "@/data/geography";
import { countryDetails, type CityInfo } from "@/data/country-details";
import AiEstimateSidebar from "@/components/destination/AiEstimateSidebar";

interface RegionPageProps {
  params: Promise<{ slug: string; region: string }>;
}

export function generateStaticParams() {
  const params: { slug: string; region: string }[] = [];
  for (const [slug, detail] of Object.entries(countryDetails)) {
    for (const region of detail.regions) {
      params.push({ slug, region: region.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: RegionPageProps) {
  const { slug, region: regionSlug } = await params;
  const detail = countryDetails[slug];
  const node = geoNodes.find((n) => n.slug === slug);
  const region = detail?.regions.find((r) => r.slug === regionSlug);
  if (!node || !region) return { title: "Not Found" };
  return {
    title: `${node.name} ${region.name} 여행 | 여행 플래너`,
    description: `${node.name} ${region.name}(${region.nameEn}) - 추천 도시 및 여행 가이드`,
  };
}

function CityCard({ city, index }: { city: CityInfo; index: number }) {
  return (
    <div className="group overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg">
      {/* 도시 히어로 */}
      <div className={`relative h-44 bg-gradient-to-br ${city.gradient} p-5`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative flex h-full flex-col justify-end text-white">
          <span className="mb-1 w-fit rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium backdrop-blur-sm">
            #{index + 1} 추천
          </span>
          <h3 className="text-2xl font-bold">{city.name}</h3>
          <p className="text-sm font-medium text-white/80">{city.nameEn}</p>
        </div>
      </div>

      {/* 도시 정보 */}
      <div className="p-5">
        <p className="text-sm leading-relaxed text-muted-foreground">{city.description}</p>

        {/* 하이라이트 */}
        <div className="mt-4">
          <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" /> 주요 볼거리
          </p>
          <div className="flex flex-wrap gap-1.5">
            {city.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full border bg-muted/50 px-2.5 py-1 text-xs font-medium"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { slug, region: regionSlug } = await params;
  const node = geoNodes.find((n) => n.slug === slug);
  const detail = countryDetails[slug];
  if (!node || !detail) notFound();

  const region = detail.regions.find((r) => r.slug === regionSlug);
  if (!region) notFound();

  return (
    <div className="min-h-screen">
      {/* 히어로 */}
      <div className={`relative bg-gradient-to-br ${region.gradient} px-4 pb-12 pt-6`}>
        <div className="mx-auto max-w-7xl">
          <Link
            href={`/destination/${slug}`}
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> {node.icon} {node.name}
          </Link>
          <div className="mt-8 flex items-end gap-4">
            <span className="text-5xl drop-shadow-lg">{region.icon}</span>
            <div className="text-white">
              <h1 className="text-3xl font-bold drop-shadow-sm sm:text-4xl">{region.name}</h1>
              <p className="mt-1 text-base font-medium text-white/80">{region.nameEn}</p>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90">
            {region.description}
          </p>
        </div>
      </div>

      {/* 메인 + 사이드바 */}
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex gap-8 lg:flex-row flex-col-reverse">
          {/* 좌측: 추천 도시 */}
          <div className="min-w-0 flex-1">
            <section className="mb-10">
              <div className="mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">추천 도시</h2>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {region.cities.length}곳
                </span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {region.cities.map((city, i) => (
                  <CityCard key={city.nameEn} city={city} index={i} />
                ))}
              </div>
            </section>

            {/* 권역 팁 */}
            {region.tips.length > 0 && (
              <section className="mb-10">
                <h2 className="mb-4 text-xl font-bold">{region.name} 여행 팁</h2>
                <ul className="space-y-2">
                  {region.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 text-primary">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 다른 권역 네비게이션 */}
            <section>
              <h2 className="mb-4 text-xl font-bold">{node.name}의 다른 권역</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {detail.regions
                  .filter((r) => r.slug !== regionSlug)
                  .map((r) => (
                    <Link
                      key={r.slug}
                      href={`/destination/${slug}/${r.slug}`}
                      className="group flex items-center gap-3 rounded-xl border bg-card p-3 transition-all hover:shadow-md"
                    >
                      <span className="text-2xl">{r.icon}</span>
                      <div>
                        <p className="text-sm font-bold group-hover:text-primary">{r.name}</p>
                        <p className="text-[10px] text-muted-foreground">{r.nameEn}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          </div>

          {/* 우측: AI 사이드바 */}
          <div className="w-full shrink-0 lg:w-80">
            <div className="lg:sticky lg:top-6">
              <AiEstimateSidebar countryName={`${node.name} ${region.name}`} countryNameEn={region.nameEn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
