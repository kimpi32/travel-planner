import { MetadataRoute } from 'next';
import { geoNodes } from '@/data/geography';
import { countryDetails } from '@/data/country-details';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://travel-planner.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  // 홈페이지
  sitemap.push({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  // /planner
  sitemap.push({
    url: `${BASE_URL}/planner`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  });

  // 모든 국가별 페이지 + 지역별 + 도시별 페이지
  const countryNodes = geoNodes.filter(node => node.level === 'country');

  countryNodes.forEach(country => {
    // 국가 페이지
    sitemap.push({
      url: `${BASE_URL}/destination/${country.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });

    // 해당 국가의 상세 정보가 있는 경우
    const countryDetail = countryDetails[country.slug];
    if (countryDetail && countryDetail.regions) {
      countryDetail.regions.forEach(region => {
        // 지역 페이지
        sitemap.push({
          url: `${BASE_URL}/destination/${country.slug}/${region.slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.7,
        });

        // 도시 페이지
        region.cities.forEach(city => {
          const citySlug = city.nameEn
            .toLowerCase()
            .replace(/ä/g, 'ae')
            .replace(/ö/g, 'oe')
            .replace(/ü/g, 'ue')
            .replace(/ß/g, 'ss')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');

          sitemap.push({
            url: `${BASE_URL}/destination/${country.slug}/${region.slug}/${citySlug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
          });
        });
      });
    }
  });

  return sitemap;
}
