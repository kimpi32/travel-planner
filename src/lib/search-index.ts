import { geoNodes } from "@/data/geography";
import { countryDetails } from "@/data/country-details";
import { cityDetails, attractionDetails, slugify } from "@/data/city-details";

export interface SearchItem {
  name: string;
  nameEn: string;
  type: "country" | "city" | "attraction" | "region";
  href: string;
  breadcrumb: string;
  icon?: string;
}

let _index: SearchItem[] | null = null;

export function getSearchIndex(): SearchItem[] {
  if (_index) return _index;

  const items: SearchItem[] = [];

  // 1. Countries from geoNodes (level === "country")
  for (const node of geoNodes) {
    if (node.level === "country") {
      items.push({
        name: node.name,
        nameEn: node.nameEn,
        type: "country",
        href: `/destination/${node.slug}`,
        breadcrumb: getNodeBreadcrumb(node.id),
        icon: node.icon,
      });
    }
  }

  // 2. Cities from countryDetails
  for (const [countrySlug, detail] of Object.entries(countryDetails)) {
    const countryNode = geoNodes.find((n) => n.slug === countrySlug);
    const countryName = countryNode?.name ?? countrySlug;

    for (const region of detail.regions) {
      for (const city of region.cities) {
        const citySlug = slugify(city.nameEn);
        const key = `${countrySlug}/${region.slug}/${citySlug}`;
        const hasCityDetail = !!cityDetails[key];

        items.push({
          name: city.name,
          nameEn: city.nameEn,
          type: "city",
          href: hasCityDetail
            ? `/destination/${countrySlug}/${region.slug}/${citySlug}`
            : `/destination/${countrySlug}`,
          breadcrumb: `${countryName} > ${region.name}`,
          icon: undefined,
        });
      }
    }
  }

  // 3. Attractions from attractionDetails
  for (const key of Object.keys(attractionDetails)) {
    // key = "country/region/city/attraction"
    const parts = key.split("/");
    if (parts.length < 4) continue;

    const [countrySlug, regionSlug, citySlug, attractionSlug] = parts;
    const countryNode = geoNodes.find((n) => n.slug === countrySlug);
    const countryName = countryNode?.name ?? countrySlug;
    const detail = countryDetails[countrySlug];
    const region = detail?.regions.find((r) => r.slug === regionSlug);
    const city = region?.cities.find((c) => slugify(c.nameEn) === citySlug);
    const cityDetail = cityDetails[`${countrySlug}/${regionSlug}/${citySlug}`];
    const attraction = cityDetail?.attractions.find(
      (a) => slugify(a.nameEn) === attractionSlug,
    );

    if (attraction) {
      items.push({
        name: attraction.name,
        nameEn: attraction.nameEn,
        type: "attraction",
        href: `/destination/${countrySlug}/${regionSlug}/${citySlug}/${attractionSlug}`,
        breadcrumb: `${countryName} > ${city?.name ?? citySlug}`,
        icon: undefined,
      });
    }
  }

  _index = items;
  return items;
}

function getNodeBreadcrumb(nodeId: string): string {
  const node = geoNodes.find((n) => n.id === nodeId);
  if (!node?.parentId) return "";
  const parent = geoNodes.find((n) => n.id === node.parentId);
  if (!parent) return "";
  const grandparent = parent.parentId
    ? geoNodes.find((n) => n.id === parent.parentId)
    : null;
  const parts = [grandparent?.name, parent.name].filter(Boolean);
  return parts.join(" > ");
}

export function searchItems(query: string, limit = 12): SearchItem[] {
  if (!query.trim()) return [];
  const index = getSearchIndex();
  const q = query.toLowerCase().trim();

  const scored: { item: SearchItem; score: number }[] = [];

  for (const item of index) {
    const nameLower = item.name.toLowerCase();
    const nameEnLower = item.nameEn.toLowerCase();

    let score = 0;

    // Exact match
    if (nameLower === q || nameEnLower === q) {
      score = 100;
    }
    // Starts with
    else if (nameLower.startsWith(q) || nameEnLower.startsWith(q)) {
      score = 80;
    }
    // Contains
    else if (nameLower.includes(q) || nameEnLower.includes(q)) {
      score = 50;
    }
    // Breadcrumb contains
    else if (item.breadcrumb.toLowerCase().includes(q)) {
      score = 20;
    }

    if (score === 0) continue;

    // Type priority bonus
    if (item.type === "city") score += 5;
    else if (item.type === "country") score += 3;
    else if (item.type === "attraction") score += 1;

    scored.push({ item, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.item);
}
