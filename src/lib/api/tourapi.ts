import { fetchWithCache, CACHE_1HR } from "./fetch-with-cache";

// ─── Types ────────────────────────────────────────────────────────────────────

export type TourApiBaseResponse<T> = {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      items:
        | {
            item: T[];
          }
        | "";
      numOfRows: number;
      pageNo: number;
      totalCount: number;
    };
  };
};

export type TourSpotItem = {
  contentid: string;
  contenttypeid: string;
  title: string;
  addr1: string;
  addr2?: string;
  areacode: string;
  sigungucode?: string;
  cat1: string;
  cat2: string;
  cat3: string;
  firstimage?: string;
  firstimage2?: string;
  mapx?: string;
  mapy?: string;
  tel?: string;
  zipcode?: string;
  createdtime?: string;
  modifiedtime?: string;
  readcount?: number;
};

export type TourDetailItem = {
  contentid: string;
  contenttypeid: string;
  title: string;
  homepage?: string;
  overview?: string;
  booktour?: string;
  addr1?: string;
  addr2?: string;
  tel?: string;
  telname?: string;
  fax?: string;
  zipcode?: string;
  mapx?: string;
  mapy?: string;
  mlevel?: string;
  firstimage?: string;
  firstimage2?: string;
  cpyrhtDivCd?: string;
};

export type TourImageItem = {
  contentid: string;
  imgname: string;
  originimgurl: string;
  smallimageurl: string;
  serialnum: string;
  cpyrhtDivCd?: string;
};

export type TourContentType =
  | "12" // 관광지
  | "14" // 문화시설
  | "15" // 행사/공연/축제
  | "25" // 여행코스
  | "28" // 레포츠
  | "32" // 숙박
  | "38" // 쇼핑
  | "39"; // 음식점

// ─── Area Code Map ────────────────────────────────────────────────────────────

export const AREA_CODE: Record<string, number> = {
  seoul: 1,
  incheon: 2,
  daejeon: 3,
  daegu: 4,
  gwangju: 5,
  busan: 6,
  ulsan: 7,
  sejong: 8,
  gyeonggi: 31,
  gangwon: 32,
  chungbuk: 33,
  chungnam: 34,
  gyeongbuk: 35,
  gyeongnam: 36,
  jeonbuk: 37,
  jeonnam: 38,
  jeju: 39,
};

// ─── TourAPI Request ──────────────────────────────────────────────────────────

const TOUR_API_BASE_URL = "https://apis.data.go.kr/B551011/KorService1";

// Whitelisted operations
export const TOUR_API_OPERATIONS = [
  "areaBasedList1",
  "detailCommon1",
  "detailImage1",
  "detailIntro1",
  "detailInfo1",
  "searchKeyword1",
  "searchFestival1",
  "searchStay1",
  "areaCode1",
  "categoryCode1",
] as const;

export type TourApiOperation = (typeof TOUR_API_OPERATIONS)[number];

export async function tourApiRequest<T>(
  operation: TourApiOperation,
  params: Record<string, string | number>,
  useCache = true,
): Promise<TourApiBaseResponse<T>> {
  const apiKey = process.env.TOUR_API_KEY;
  if (!apiKey) throw new Error("TOUR_API_KEY is not configured");

  const searchParams = new URLSearchParams({
    serviceKey: apiKey,
    MobileOS: "ETC",
    MobileApp: "TravelApp",
    _type: "json",
    ...Object.fromEntries(Object.entries(params).map(([k, v]) => [k, String(v)])),
  });

  const url = `${TOUR_API_BASE_URL}/${operation}?${searchParams}`;

  const fetcher = async () => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`TourAPI error: ${res.status} ${res.statusText}`);

    const json: TourApiBaseResponse<T> = await res.json();

    const { resultCode, resultMsg } = json.response.header;
    if (resultCode !== "0000") {
      throw new Error(`TourAPI returned error ${resultCode}: ${resultMsg}`);
    }

    return json;
  };

  if (!useCache) return fetcher();

  const cacheKey = `tourapi:${operation}:${searchParams.toString()}`;
  return fetchWithCache(cacheKey, fetcher, CACHE_1HR);
}

// ─── Convenience Functions ────────────────────────────────────────────────────

export type SearchTourSpotsParams = {
  areaCode?: number | string;
  sigunguCode?: number | string;
  contentTypeId?: TourContentType;
  cat1?: string;
  cat2?: string;
  cat3?: string;
  pageNo?: number;
  numOfRows?: number;
  arrange?: "A" | "B" | "C" | "D" | "E" | "O" | "P" | "Q" | "R" | "S"; // A=제목순, C=수정일순, D=생성일순
};

export async function searchTourSpots(
  params: SearchTourSpotsParams,
): Promise<TourApiBaseResponse<TourSpotItem>> {
  const apiParams: Record<string, string | number> = {
    pageNo: params.pageNo ?? 1,
    numOfRows: params.numOfRows ?? 20,
    arrange: params.arrange ?? "C",
  };

  if (params.areaCode !== undefined) apiParams.areaCode = params.areaCode;
  if (params.sigunguCode !== undefined) apiParams.sigunguCode = params.sigunguCode;
  if (params.contentTypeId !== undefined) apiParams.contentTypeId = params.contentTypeId;
  if (params.cat1 !== undefined) apiParams.cat1 = params.cat1;
  if (params.cat2 !== undefined) apiParams.cat2 = params.cat2;
  if (params.cat3 !== undefined) apiParams.cat3 = params.cat3;

  return tourApiRequest<TourSpotItem>("areaBasedList1", apiParams);
}

export async function getTourDetail(
  contentId: string,
  contentTypeId?: TourContentType,
): Promise<TourApiBaseResponse<TourDetailItem>> {
  const params: Record<string, string | number> = {
    contentId,
    defaultYN: "Y",
    firstImageYN: "Y",
    areacodeYN: "Y",
    catcodeYN: "Y",
    addrinfoYN: "Y",
    mapinfoYN: "Y",
    overviewYN: "Y",
  };

  if (contentTypeId) params.contentTypeId = contentTypeId;

  return tourApiRequest<TourDetailItem>("detailCommon1", params);
}

export async function getTourImages(
  contentId: string,
  imageYN: "Y" | "N" = "Y",
  subImageYN: "Y" | "N" = "Y",
): Promise<TourApiBaseResponse<TourImageItem>> {
  return tourApiRequest<TourImageItem>("detailImage1", {
    contentId,
    imageYN,
    subImageYN,
    numOfRows: 20,
    pageNo: 1,
  });
}

export async function searchByKeyword(
  keyword: string,
  areaCode?: number,
  contentTypeId?: TourContentType,
  pageNo = 1,
  numOfRows = 20,
): Promise<TourApiBaseResponse<TourSpotItem>> {
  const params: Record<string, string | number> = {
    keyword,
    pageNo,
    numOfRows,
    arrange: "A",
  };

  if (areaCode !== undefined) params.areaCode = areaCode;
  if (contentTypeId !== undefined) params.contentTypeId = contentTypeId;

  return tourApiRequest<TourSpotItem>("searchKeyword1", params);
}
