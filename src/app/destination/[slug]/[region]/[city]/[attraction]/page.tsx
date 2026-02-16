import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Ticket, MapPin, Globe, Camera, Lightbulb, Compass } from "lucide-react";
import { geoNodes } from "@/data/geography";
import { countryDetails } from "@/data/country-details";
import { attractionDetails, cityDetails, slugify, type AttractionDetail } from "@/data/city-details";
import AiEstimateSidebar from "@/components/destination/AiEstimateSidebar";

interface AttractionPageProps {
  params: Promise<{ slug: string; region: string; city: string; attraction: string }>;
}

export function generateStaticParams() {
  const params: { slug: string; region: string; city: string; attraction: string }[] = [];
  for (const key of Object.keys(attractionDetails)) {
    const [slug, region, city, attraction] = key.split("/");
    if (slug && region && city && attraction) {
      params.push({ slug, region, city, attraction });
    }
  }
  return params;
}

export async function generateMetadata({ params }: AttractionPageProps) {
  const { slug, region: regionSlug, city: citySlug, attraction: attractionSlug } = await params;
  const detail = countryDetails[slug];
  const node = geoNodes.find((n) => n.slug === slug);
  const region = detail?.regions.find((r) => r.slug === regionSlug);
  const city = region?.cities.find((c) => slugify(c.nameEn) === citySlug);
  const cityDetail = cityDetails[`${slug}/${regionSlug}/${citySlug}`];
  const attraction = cityDetail?.attractions.find((a) => slugify(a.nameEn) === attractionSlug);
  if (!node || !city || !attraction) return { title: "Not Found" };
  return {
    title: `${attraction.name} | ${city.name} ${node.name} 여행`,
    description: `${attraction.name}(${attraction.nameEn}) - ${city.name} 필수 방문 명소 상세 가이드`,
  };
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border bg-card p-3">
      <div className="mt-0.5 text-primary">{icon}</div>
      <div>
        <p className="text-[11px] font-medium text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
}

export default async function AttractionPage({ params }: AttractionPageProps) {
  const { slug, region: regionSlug, city: citySlug, attraction: attractionSlug } = await params;
  const node = geoNodes.find((n) => n.slug === slug);
  const detail = countryDetails[slug];
  if (!node || !detail) notFound();

  const region = detail.regions.find((r) => r.slug === regionSlug);
  if (!region) notFound();

  const city = region.cities.find((c) => slugify(c.nameEn) === citySlug);
  if (!city) notFound();

  const cityDetail = cityDetails[`${slug}/${regionSlug}/${citySlug}`];
  if (!cityDetail) notFound();

  const attractionInfo = cityDetail.attractions.find((a) => slugify(a.nameEn) === attractionSlug);
  if (!attractionInfo) notFound();

  const ad = attractionDetails[`${slug}/${regionSlug}/${citySlug}/${attractionSlug}`];
  if (!ad) notFound();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className={`relative bg-gradient-to-br ${ad.heroGradient} px-4 pb-12 pt-6`}>
        <div className="mx-auto max-w-7xl">
          <Link
            href={`/destination/${slug}/${regionSlug}/${citySlug}`}
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> {node.icon} {node.name} {region.name} {city.name}
          </Link>
          <div className="mt-8 text-white">
            <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              {attractionInfo.category}
            </span>
            <h1 className="text-4xl font-bold drop-shadow-sm">{attractionInfo.name}</h1>
            <p className="mt-1 text-lg font-medium text-white/80">{attractionInfo.nameEn}</p>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/90">
            {ad.description}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex gap-8 lg:flex-row flex-col-reverse">
          <div className="min-w-0 flex-1">
            {/* Visit Info */}
            <section className="mb-10">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <InfoCard icon={<Clock className="h-4 w-4" />} label="운영시간" value={ad.visitInfo.hours} />
                <InfoCard icon={<Ticket className="h-4 w-4" />} label="입장료" value={ad.visitInfo.admission} />
                <InfoCard icon={<MapPin className="h-4 w-4" />} label="주소" value={ad.visitInfo.address} />
                {ad.visitInfo.website && (
                  <div className="flex items-start gap-3 rounded-xl border bg-card p-3">
                    <div className="mt-0.5 text-primary"><Globe className="h-4 w-4" /></div>
                    <div>
                      <p className="text-[11px] font-medium text-muted-foreground">공식 웹사이트</p>
                      <a
                        href={ad.visitInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-0.5 text-sm font-semibold text-primary hover:underline"
                      >
                        방문하기
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* History */}
            {ad.history && (
              <section className="mb-10">
                <h2 className="mb-4 text-xl font-bold">역사적 배경</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{ad.history}</p>
              </section>
            )}

            {/* Highlights */}
            {ad.highlights.length > 0 && (
              <section className="mb-10">
                <div className="mb-4 flex items-center gap-2">
                  <Compass className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">주요 포인트</h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {ad.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl border bg-card p-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                      <p className="text-sm">{h}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Photo Tips */}
            {ad.photoTips && (
              <section className="mb-10">
                <div className="mb-4 flex items-center gap-2">
                  <Camera className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">사진 팁</h2>
                </div>
                <div className="rounded-xl border bg-card p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{ad.photoTips}</p>
                </div>
              </section>
            )}

            {/* Nearby Attractions */}
            {ad.nearbyAttractions.length > 0 && (
              <section className="mb-10">
                <h2 className="mb-4 text-xl font-bold">근처 명소</h2>
                <div className="flex flex-wrap gap-2">
                  {ad.nearbyAttractions.map((na) => (
                    <span key={na} className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
                      {na}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Tips */}
            {ad.tips.length > 0 && (
              <section className="mb-10">
                <div className="mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">방문 팁</h2>
                </div>
                <ul className="space-y-2">
                  {ad.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 text-primary">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Back to city */}
            <section>
              <h2 className="mb-4 text-xl font-bold">{city.name}의 다른 명소</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {cityDetail.attractions
                  .filter((a) => slugify(a.nameEn) !== attractionSlug)
                  .map((a) => {
                    const aSlug = slugify(a.nameEn);
                    const hasDetail = !!attractionDetails[`${slug}/${regionSlug}/${citySlug}/${aSlug}`];
                    const inner = (
                      <>
                        <span className="inline-block rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                          {a.category}
                        </span>
                        <p className="mt-1 text-sm font-bold group-hover:text-primary">{a.name}</p>
                        <p className="text-[10px] text-muted-foreground">{a.nameEn}</p>
                      </>
                    );
                    return hasDetail ? (
                      <Link
                        key={a.nameEn}
                        href={`/destination/${slug}/${regionSlug}/${citySlug}/${aSlug}`}
                        className="group rounded-xl border bg-card p-3 transition-all hover:shadow-md"
                      >
                        {inner}
                      </Link>
                    ) : (
                      <div key={a.nameEn} className="group rounded-xl border bg-card p-3">
                        {inner}
                      </div>
                    );
                  })}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="w-full shrink-0 lg:w-80">
            <div className="lg:sticky lg:top-6">
              <AiEstimateSidebar
                countryName={`${node.name} ${city.name} ${attractionInfo.name}`}
                countryNameEn={attractionInfo.nameEn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
