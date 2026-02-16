export interface DistrictInfo {
  name: string;
  nameEn: string;
  description: string;
  highlights: string[];
}

export interface AttractionInfo {
  name: string;
  nameEn: string;
  description: string;
  category: string;
  tip?: string;
}

export interface DayTripInfo {
  name: string;
  nameEn: string;
  description: string;
  travelTime: string;
  gradient: string;
}

export interface CityDetail {
  heroGradient: string;
  description: string;
  bestTime: string;
  stayArea: string;
  transport: string;
  districts: DistrictInfo[];
  attractions: AttractionInfo[];
  dayTrips: DayTripInfo[];
  localFood: { name: string; description: string; emoji: string }[];
  tips: string[];
}

export interface AttractionDetail {
  heroGradient: string;
  description: string;
  history?: string;
  visitInfo: {
    hours: string;
    admission: string;
    address: string;
    website?: string;
  };
  highlights: string[];
  nearbyAttractions: string[];
  photoTips?: string;
  tips: string[];
}

/** key = "country-slug/region-slug/city-slug" */
export const cityDetails: Record<string, CityDetail> = {};

/** key = "country-slug/region-slug/city-slug/attraction-slug" */
export const attractionDetails: Record<string, AttractionDetail> = {};

export function slugify(nameEn: string): string {
  return nameEn
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getCityDetail(countrySlug: string, regionSlug: string, cityNameEn: string): CityDetail | undefined {
  const citySlug = slugify(cityNameEn);
  return cityDetails[`${countrySlug}/${regionSlug}/${citySlug}`];
}

export function getAttractionDetail(
  countrySlug: string,
  regionSlug: string,
  citySlug: string,
  attractionSlug: string,
): AttractionDetail | undefined {
  return attractionDetails[`${countrySlug}/${regionSlug}/${citySlug}/${attractionSlug}`];
}

// --- country data imports (barrel) ---
import { germanyCityDetails, germanyAttractionDetails } from "./city-details/germany";
Object.assign(cityDetails, germanyCityDetails);
Object.assign(attractionDetails, germanyAttractionDetails);
