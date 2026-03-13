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
// Western Europe
import { germanyCityDetails, germanyAttractionDetails } from "./city-details/germany";
import { germanyCityDetails2, germanyAttractionDetails2 } from "./city-details/germany-extra-1";
import { germanyCityDetails3, germanyAttractionDetails3 } from "./city-details/germany-extra-2";
import { franceCityDetails, franceAttractionDetails } from "./city-details/france";
import { franceCityDetails2, franceAttractionDetails2 } from "./city-details/france-extra";
import { ukCityDetails, ukAttractionDetails } from "./city-details/uk";
import { netherlandsCityDetails, netherlandsAttractionDetails } from "./city-details/netherlands";
import { netherlandsCityDetails2, netherlandsAttractionDetails2 } from "./city-details/netherlands-extra";
import { belgiumCityDetails, belgiumAttractionDetails } from "./city-details/belgium";
import { belgiumCityDetails2, belgiumAttractionDetails2 } from "./city-details/belgium-extra";
import { irelandCityDetails, irelandAttractionDetails } from "./city-details/ireland";
import { luxembourgCityDetails, luxembourgAttractionDetails } from "./city-details/luxembourg";
// Central Europe
import { czechiaCityDetails, czechiaAttractionDetails } from "./city-details/czechia";
import { austriaCityDetails, austriaAttractionDetails } from "./city-details/austria";
import { switzerlandCityDetails, switzerlandAttractionDetails } from "./city-details/switzerland";
import { polandCityDetails, polandAttractionDetails } from "./city-details/poland";
import { hungaryCityDetails, hungaryAttractionDetails } from "./city-details/hungary";
// Southern Europe
import { italyCityDetails, italyAttractionDetails } from "./city-details/italy";
import { spainCityDetails, spainAttractionDetails } from "./city-details/spain";
import { portugalCityDetails, portugalAttractionDetails } from "./city-details/portugal";
import { greeceCityDetails, greeceAttractionDetails } from "./city-details/greece";
import { maltaCityDetails, maltaAttractionDetails } from "./city-details/malta";
// Northern Europe
import { norwayCityDetails, norwayAttractionDetails } from "./city-details/norway";
import { swedenCityDetails, swedenAttractionDetails } from "./city-details/sweden";
import { finlandCityDetails, finlandAttractionDetails } from "./city-details/finland";
import { denmarkCityDetails, denmarkAttractionDetails } from "./city-details/denmark";
import { icelandCityDetails, icelandAttractionDetails } from "./city-details/iceland";
// Balkans
import { croatiaCityDetails, croatiaAttractionDetails } from "./city-details/croatia";
import { sloveniaCityDetails, sloveniaAttractionDetails } from "./city-details/slovenia";
// Middle East
import { turkeyCityDetails, turkeyAttractionDetails } from "./city-details/turkey";
import { georgiaCityDetails, georgiaAttractionDetails } from "./city-details/georgia";
import { uaeCityDetails, uaeAttractionDetails } from "./city-details/uae";
import { israelCityDetails, israelAttractionDetails } from "./city-details/israel";
import { jordanCityDetails, jordanAttractionDetails } from "./city-details/jordan";
import { omanCityDetails, omanAttractionDetails } from "./city-details/oman";
// Korea (Domestic)
import { seoulCityDetails, seoulAttractionDetails } from "./city-details/korea-seoul";
import { busanCityDetails, busanAttractionDetails } from "./city-details/korea-busan";
import { jejuCityDetails, jejuAttractionDetails } from "./city-details/korea-jeju";
import { gyeongjuCityDetails, gyeongjuAttractionDetails } from "./city-details/korea-gyeongju";
import { jeonjuCityDetails, jeonjuAttractionDetails } from "./city-details/korea-jeonju";
import { gangneungCityDetails, gangneungAttractionDetails } from "./city-details/korea-gangneung";
import { yeosuCityDetails, yeosuAttractionDetails } from "./city-details/korea-yeosu";
import { sokhoCityDetails, sokhoAttractionDetails } from "./city-details/korea-sokcho";
// East Asia
import { japanCityDetails, japanAttractionDetails } from "./city-details/japan";
import { chinaCityDetails, chinaAttractionDetails } from "./city-details/china";
import { taiwanCityDetails, taiwanAttractionDetails } from "./city-details/taiwan";
import { mongoliaCityDetails, mongoliaAttractionDetails } from "./city-details/mongolia";
// Southeast Asia
import { thailandCityDetails, thailandAttractionDetails } from "./city-details/thailand";
import { vietnamCityDetails, vietnamAttractionDetails } from "./city-details/vietnam";
import { indonesiaCityDetails, indonesiaAttractionDetails } from "./city-details/indonesia";
import { philippinesCityDetails, philippinesAttractionDetails } from "./city-details/philippines";
import { malaysiaCityDetails, malaysiaAttractionDetails } from "./city-details/malaysia";
import { singaporeCityDetails, singaporeAttractionDetails } from "./city-details/singapore";
import { cambodiaCityDetails, cambodiaAttractionDetails } from "./city-details/cambodia";
// South Asia
import { indiaCityDetails, indiaAttractionDetails } from "./city-details/india";
import { nepalCityDetails, nepalAttractionDetails } from "./city-details/nepal";
import { sriLankaCityDetails, sriLankaAttractionDetails } from "./city-details/sri-lanka";
// Central Asia
import { uzbekistanCityDetails, uzbekistanAttractionDetails } from "./city-details/uzbekistan";
import { kazakhstanCityDetails, kazakhstanAttractionDetails } from "./city-details/kazakhstan";
// South America
import { brazilCityDetails, brazilAttractionDetails } from "./city-details/brazil";
import { argentinaCityDetails, argentinaAttractionDetails } from "./city-details/argentina";
import { peruCityDetails, peruAttractionDetails } from "./city-details/peru";
import { chileCityDetails, chileAttractionDetails } from "./city-details/chile";
import { colombiaCityDetails, colombiaAttractionDetails } from "./city-details/colombia";
// Central America
import { costaRicaCityDetails, costaRicaAttractionDetails } from "./city-details/costa-rica";
// North America
import { usaCityDetails, usaAttractionDetails } from "./city-details/usa";
import { canadaCityDetails, canadaAttractionDetails } from "./city-details/canada";
import { mexicoCityDetails, mexicoAttractionDetails } from "./city-details/mexico";
// Oceania
import { australiaCityDetails, australiaAttractionDetails } from "./city-details/australia";
import { newZealandCityDetails, newZealandAttractionDetails } from "./city-details/new-zealand";
// Africa
import { moroccoCityDetails, moroccoAttractionDetails } from "./city-details/morocco";
import { egyptCityDetails, egyptAttractionDetails } from "./city-details/egypt";
import { southAfricaCityDetails, southAfricaAttractionDetails } from "./city-details/south-africa";
import { kenyaCityDetails, kenyaAttractionDetails } from "./city-details/kenya";
import { tanzaniaCityDetails, tanzaniaAttractionDetails } from "./city-details/tanzania";

Object.assign(
  cityDetails,
  germanyCityDetails, germanyCityDetails2, germanyCityDetails3, franceCityDetails, franceCityDetails2, ukCityDetails, netherlandsCityDetails, netherlandsCityDetails2, belgiumCityDetails, belgiumCityDetails2, irelandCityDetails, luxembourgCityDetails,
  czechiaCityDetails, austriaCityDetails, switzerlandCityDetails, polandCityDetails, hungaryCityDetails,
  italyCityDetails, spainCityDetails, portugalCityDetails, greeceCityDetails, maltaCityDetails,
  norwayCityDetails, swedenCityDetails, finlandCityDetails, denmarkCityDetails, icelandCityDetails,
  croatiaCityDetails, sloveniaCityDetails, turkeyCityDetails,
  georgiaCityDetails, uaeCityDetails, israelCityDetails, jordanCityDetails, omanCityDetails,
  seoulCityDetails, busanCityDetails, jejuCityDetails, gyeongjuCityDetails, jeonjuCityDetails, gangneungCityDetails, yeosuCityDetails, sokhoCityDetails,
  japanCityDetails, chinaCityDetails, taiwanCityDetails, mongoliaCityDetails,
  thailandCityDetails, vietnamCityDetails, indonesiaCityDetails, philippinesCityDetails, malaysiaCityDetails, singaporeCityDetails, cambodiaCityDetails,
  indiaCityDetails, nepalCityDetails, sriLankaCityDetails,
  uzbekistanCityDetails, kazakhstanCityDetails,
  brazilCityDetails, argentinaCityDetails, peruCityDetails, chileCityDetails, colombiaCityDetails,
  costaRicaCityDetails,
  usaCityDetails, canadaCityDetails, mexicoCityDetails,
  australiaCityDetails, newZealandCityDetails,
  moroccoCityDetails, egyptCityDetails, southAfricaCityDetails, kenyaCityDetails, tanzaniaCityDetails,
);
Object.assign(
  attractionDetails,
  germanyAttractionDetails, germanyAttractionDetails2, germanyAttractionDetails3, franceAttractionDetails, franceAttractionDetails2, ukAttractionDetails, netherlandsAttractionDetails, netherlandsAttractionDetails2, belgiumAttractionDetails, belgiumAttractionDetails2, irelandAttractionDetails, luxembourgAttractionDetails,
  czechiaAttractionDetails, austriaAttractionDetails, switzerlandAttractionDetails, polandAttractionDetails, hungaryAttractionDetails,
  italyAttractionDetails, spainAttractionDetails, portugalAttractionDetails, greeceAttractionDetails, maltaAttractionDetails,
  norwayAttractionDetails, swedenAttractionDetails, finlandAttractionDetails, denmarkAttractionDetails, icelandAttractionDetails,
  croatiaAttractionDetails, sloveniaAttractionDetails, turkeyAttractionDetails,
  georgiaAttractionDetails, uaeAttractionDetails, israelAttractionDetails, jordanAttractionDetails, omanAttractionDetails,
  seoulAttractionDetails, busanAttractionDetails, jejuAttractionDetails, gyeongjuAttractionDetails, jeonjuAttractionDetails, gangneungAttractionDetails, yeosuAttractionDetails, sokhoAttractionDetails,
  japanAttractionDetails, chinaAttractionDetails, taiwanAttractionDetails, mongoliaAttractionDetails,
  thailandAttractionDetails, vietnamAttractionDetails, indonesiaAttractionDetails, philippinesAttractionDetails, malaysiaAttractionDetails, singaporeAttractionDetails, cambodiaAttractionDetails,
  indiaAttractionDetails, nepalAttractionDetails, sriLankaAttractionDetails,
  uzbekistanAttractionDetails, kazakhstanAttractionDetails,
  brazilAttractionDetails, argentinaAttractionDetails, peruAttractionDetails, chileAttractionDetails, colombiaAttractionDetails,
  costaRicaAttractionDetails,
  usaAttractionDetails, canadaAttractionDetails, mexicoAttractionDetails,
  australiaAttractionDetails, newZealandAttractionDetails,
  moroccoAttractionDetails, egyptAttractionDetails, southAfricaAttractionDetails, kenyaAttractionDetails, tanzaniaAttractionDetails,
);
