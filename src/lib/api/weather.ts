import { fetchWithCache, CACHE_5MIN, CACHE_1HR } from "./fetch-with-cache";

// ─── Types ────────────────────────────────────────────────────────────────────

export type WeatherCurrent = {
  temp: number; // °C
  feelsLike: number;
  humidity: number; // %
  windSpeed: number; // m/s
  description: string;
  icon: string; // OWM icon code or KMA sky code
  condition: "clear" | "partly_cloudy" | "cloudy" | "rainy" | "snowy" | "foggy";
};

export type WeatherForecastDay = {
  date: string; // YYYY-MM-DD
  tempMin: number;
  tempMax: number;
  description: string;
  icon: string;
  condition: WeatherCurrent["condition"];
  precipProbability?: number; // 0–100
};

export type WeatherResponse = {
  citySlug: string;
  cityName: string;
  current: WeatherCurrent;
  forecast: WeatherForecastDay[];
  updatedAt: string; // ISO string
  source: "kma" | "owm";
};

// ─── KMA Grid Map (기상청 격자 좌표) ─────────────────────────────────────────

type KmaGrid = { nx: number; ny: number; name: string };

export const KMA_GRID_MAP: Record<string, KmaGrid> = {
  seoul: { nx: 60, ny: 127, name: "서울" },
  busan: { nx: 98, ny: 76, name: "부산" },
  incheon: { nx: 55, ny: 124, name: "인천" },
  daegu: { nx: 89, ny: 90, name: "대구" },
  daejeon: { nx: 67, ny: 100, name: "대전" },
  gwangju: { nx: 58, ny: 74, name: "광주" },
  ulsan: { nx: 102, ny: 84, name: "울산" },
  suwon: { nx: 60, ny: 121, name: "수원" },
  jeju: { nx: 52, ny: 38, name: "제주" },
  jeonju: { nx: 63, ny: 89, name: "전주" },
  chuncheon: { nx: 73, ny: 134, name: "춘천" },
  gangneung: { nx: 92, ny: 131, name: "강릉" },
  andong: { nx: 91, ny: 106, name: "안동" },
  cheongju: { nx: 69, ny: 107, name: "청주" },
  pohang: { nx: 102, ny: 94, name: "포항" },
  gyeongju: { nx: 100, ny: 91, name: "경주" },
  sokcho: { nx: 87, ny: 141, name: "속초" },
  yeosu: { nx: 73, ny: 66, name: "여수" },
};

// ─── International City Coordinates ──────────────────────────────────────────

type CityCoords = { lat: number; lon: number; name: string };

export const CITY_COORDS: Record<string, CityCoords> = {
  // East Asia
  tokyo: { lat: 35.6762, lon: 139.6503, name: "Tokyo" },
  osaka: { lat: 34.6937, lon: 135.5023, name: "Osaka" },
  kyoto: { lat: 35.0116, lon: 135.7681, name: "Kyoto" },
  beijing: { lat: 39.9042, lon: 116.4074, name: "Beijing" },
  shanghai: { lat: 31.2304, lon: 121.4737, name: "Shanghai" },
  hongkong: { lat: 22.3193, lon: 114.1694, name: "Hong Kong" },
  taipei: { lat: 25.033, lon: 121.5654, name: "Taipei" },
  // Southeast Asia
  bangkok: { lat: 13.7563, lon: 100.5018, name: "Bangkok" },
  singapore: { lat: 1.3521, lon: 103.8198, name: "Singapore" },
  kualalumpur: { lat: 3.1390, lon: 101.6869, name: "Kuala Lumpur" },
  bali: { lat: -8.3405, lon: 115.0920, name: "Bali" },
  hanoi: { lat: 21.0278, lon: 105.8342, name: "Hanoi" },
  hochiminh: { lat: 10.8231, lon: 106.6297, name: "Ho Chi Minh" },
  manila: { lat: 14.5995, lon: 120.9842, name: "Manila" },
  jakarta: { lat: -6.2088, lon: 106.8456, name: "Jakarta" },
  // South Asia
  delhi: { lat: 28.6139, lon: 77.2090, name: "Delhi" },
  mumbai: { lat: 19.0760, lon: 72.8777, name: "Mumbai" },
  // Middle East
  dubai: { lat: 25.2048, lon: 55.2708, name: "Dubai" },
  istanbul: { lat: 41.0082, lon: 28.9784, name: "Istanbul" },
  // Europe
  paris: { lat: 48.8566, lon: 2.3522, name: "Paris" },
  london: { lat: 51.5074, lon: -0.1278, name: "London" },
  rome: { lat: 41.9028, lon: 12.4964, name: "Rome" },
  barcelona: { lat: 41.3851, lon: 2.1734, name: "Barcelona" },
  amsterdam: { lat: 52.3676, lon: 4.9041, name: "Amsterdam" },
  berlin: { lat: 52.5200, lon: 13.4050, name: "Berlin" },
  prague: { lat: 50.0755, lon: 14.4378, name: "Prague" },
  vienna: { lat: 48.2082, lon: 16.3738, name: "Vienna" },
  zurich: { lat: 47.3769, lon: 8.5417, name: "Zurich" },
  lisbon: { lat: 38.7223, lon: -9.1393, name: "Lisbon" },
  athens: { lat: 37.9838, lon: 23.7275, name: "Athens" },
  // Americas
  newyork: { lat: 40.7128, lon: -74.0060, name: "New York" },
  losangeles: { lat: 34.0522, lon: -118.2437, name: "Los Angeles" },
  chicago: { lat: 41.8781, lon: -87.6298, name: "Chicago" },
  miami: { lat: 25.7617, lon: -80.1918, name: "Miami" },
  lasvegas: { lat: 36.1699, lon: -115.1398, name: "Las Vegas" },
  toronto: { lat: 43.6532, lon: -79.3832, name: "Toronto" },
  vancouver: { lat: 49.2827, lon: -123.1207, name: "Vancouver" },
  cancun: { lat: 21.1619, lon: -86.8515, name: "Cancun" },
  // Oceania
  sydney: { lat: -33.8688, lon: 151.2093, name: "Sydney" },
  melbourne: { lat: -37.8136, lon: 144.9631, name: "Melbourne" },
  // Africa
  cairo: { lat: 30.0444, lon: 31.2357, name: "Cairo" },
  capetown: { lat: -33.9249, lon: 18.4241, name: "Cape Town" },
};

// ─── KMA Sky Code → Condition Mapping ─────────────────────────────────────────

function kmaSkyToCondition(sky: number, pty: number): WeatherCurrent["condition"] {
  if (pty === 1 || pty === 5) return "rainy";
  if (pty === 3 || pty === 7) return "snowy";
  if (sky === 1) return "clear";
  if (sky === 3) return "partly_cloudy";
  if (sky === 4) return "cloudy";
  return "clear";
}

function kmaSkyToIcon(sky: number, pty: number): string {
  if (pty === 1 || pty === 5) return "rain";
  if (pty === 3 || pty === 7) return "snow";
  if (sky === 1) return "clear_day";
  if (sky === 3) return "partly_cloudy_day";
  if (sky === 4) return "cloudy";
  return "clear_day";
}

function kmaSkyToDescription(sky: number, pty: number): string {
  if (pty === 1) return "비";
  if (pty === 5) return "빗방울";
  if (pty === 3) return "눈";
  if (pty === 7) return "눈날림";
  if (sky === 1) return "맑음";
  if (sky === 3) return "구름많음";
  if (sky === 4) return "흐림";
  return "맑음";
}

// ─── OWM Icon → Condition Mapping ─────────────────────────────────────────────

function owmIconToCondition(icon: string): WeatherCurrent["condition"] {
  if (icon.startsWith("01")) return "clear";
  if (icon.startsWith("02") || icon.startsWith("03")) return "partly_cloudy";
  if (icon.startsWith("04")) return "cloudy";
  if (icon.startsWith("09") || icon.startsWith("10")) return "rainy";
  if (icon.startsWith("11")) return "rainy";
  if (icon.startsWith("13")) return "snowy";
  if (icon.startsWith("50")) return "foggy";
  return "clear";
}

// ─── KMA API ──────────────────────────────────────────────────────────────────

type KmaItem = {
  category: string;
  fcstValue: string;
  fcstDate: string;
  fcstTime: string;
};

export async function fetchKmaWeather(nx: number, ny: number, citySlug: string): Promise<WeatherResponse> {
  const apiKey = process.env.KMA_API_KEY;
  if (!apiKey) throw new Error("KMA_API_KEY is not configured");

  const now = new Date();
  // KMA base time is issued at 0200, 0500, 0800, 1100, 1400, 1700, 2000, 2300
  const baseHours = [2, 5, 8, 11, 14, 17, 20, 23];
  const currentHour = now.getHours();
  const baseHour = baseHours.filter((h) => h <= currentHour).pop() ?? 23;
  const baseDate =
    baseHour === 23 && currentHour < 2
      ? new Date(now.getTime() - 24 * 60 * 60 * 1000)
          .toISOString()
          .slice(0, 10)
          .replace(/-/g, "")
      : now.toISOString().slice(0, 10).replace(/-/g, "");
  const baseTime = String(baseHour).padStart(2, "0") + "00";

  const params = new URLSearchParams({
    serviceKey: apiKey,
    pageNo: "1",
    numOfRows: "1000",
    dataType: "JSON",
    base_date: baseDate,
    base_time: baseTime,
    nx: String(nx),
    ny: String(ny),
  });

  const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?${params}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`KMA API error: ${res.status}`);

  const json = await res.json();
  const items: KmaItem[] = json?.response?.body?.items?.item ?? [];

  // Group by date+time
  const byDatetime: Record<string, Record<string, string>> = {};
  for (const item of items) {
    const key = `${item.fcstDate}_${item.fcstTime}`;
    if (!byDatetime[key]) byDatetime[key] = {};
    byDatetime[key][item.category] = item.fcstValue;
  }

  const sortedKeys = Object.keys(byDatetime).sort();
  const currentKey = sortedKeys[0];
  const current = byDatetime[currentKey] ?? {};

  const sky = parseInt(current["SKY"] ?? "1");
  const pty = parseInt(current["PTY"] ?? "0");
  const temp = parseFloat(current["TMP"] ?? "0");
  const humidity = parseInt(current["REH"] ?? "0");
  const windSpeed = parseFloat(current["WSD"] ?? "0");

  const cityInfo = KMA_GRID_MAP[citySlug];

  // Build 5-day forecast by grouping date keys
  const forecastByDate: Record<string, string[]> = {};
  for (const key of sortedKeys) {
    const date = key.split("_")[0];
    const formattedDate = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`;
    if (!forecastByDate[formattedDate]) forecastByDate[formattedDate] = [];
    forecastByDate[formattedDate].push(key);
  }

  const forecast: WeatherForecastDay[] = Object.entries(forecastByDate)
    .slice(0, 5)
    .map(([date, keys]) => {
      const temps = keys
        .map((k) => parseFloat(byDatetime[k]["TMP"] ?? "0"))
        .filter((v) => !isNaN(v));
      const ptys = keys.map((k) => parseInt(byDatetime[k]["PTY"] ?? "0"));
      const skys = keys.map((k) => parseInt(byDatetime[k]["SKY"] ?? "1"));
      const pops = keys.map((k) => parseInt(byDatetime[k]["POP"] ?? "0"));

      const dominantPty = ptys.find((p) => p > 0) ?? 0;
      const avgSky = Math.round(skys.reduce((a, b) => a + b, 0) / skys.length);
      const maxPop = Math.max(...pops);

      return {
        date,
        tempMin: Math.min(...temps),
        tempMax: Math.max(...temps),
        description: kmaSkyToDescription(avgSky, dominantPty),
        icon: kmaSkyToIcon(avgSky, dominantPty),
        condition: kmaSkyToCondition(avgSky, dominantPty),
        precipProbability: maxPop,
      };
    });

  return {
    citySlug,
    cityName: cityInfo?.name ?? citySlug,
    current: {
      temp,
      feelsLike: temp - 2, // KMA doesn't provide feels-like directly
      humidity,
      windSpeed,
      description: kmaSkyToDescription(sky, pty),
      icon: kmaSkyToIcon(sky, pty),
      condition: kmaSkyToCondition(sky, pty),
    },
    forecast,
    updatedAt: new Date().toISOString(),
    source: "kma",
  };
}

// ─── OpenWeatherMap API ───────────────────────────────────────────────────────

type OwmCurrentResponse = {
  name: string;
  main: { temp: number; feels_like: number; humidity: number };
  wind: { speed: number };
  weather: Array<{ description: string; icon: string }>;
};

type OwmForecastResponse = {
  list: Array<{
    dt_txt: string;
    main: { temp: number; temp_min: number; temp_max: number };
    weather: Array<{ description: string; icon: string }>;
    pop: number;
  }>;
};

export async function fetchOwmWeather(lat: number, lon: number, citySlug: string): Promise<WeatherResponse> {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  if (!apiKey) throw new Error("OPENWEATHERMAP_API_KEY is not configured");

  const baseUrl = "https://api.openweathermap.org/data/2.5";
  const commonParams = `lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=en`;

  const [currentRes, forecastRes] = await Promise.all([
    fetch(`${baseUrl}/weather?${commonParams}`),
    fetch(`${baseUrl}/forecast?${commonParams}`),
  ]);

  if (!currentRes.ok) throw new Error(`OWM current weather error: ${currentRes.status}`);
  if (!forecastRes.ok) throw new Error(`OWM forecast error: ${forecastRes.status}`);

  const currentData: OwmCurrentResponse = await currentRes.json();
  const forecastData: OwmForecastResponse = await forecastRes.json();

  const weatherInfo = currentData.weather[0];

  // Group forecast by date for daily summary
  const forecastByDate: Record<string, typeof forecastData.list> = {};
  for (const item of forecastData.list) {
    const date = item.dt_txt.split(" ")[0];
    if (!forecastByDate[date]) forecastByDate[date] = [];
    forecastByDate[date].push(item);
  }

  const forecast: WeatherForecastDay[] = Object.entries(forecastByDate)
    .slice(0, 5)
    .map(([date, items]) => {
      const temps = items.map((i) => i.main.temp);
      const midday = items.find((i) => i.dt_txt.includes("12:00:00")) ?? items[0];
      const maxPop = Math.round(Math.max(...items.map((i) => i.pop)) * 100);

      return {
        date,
        tempMin: Math.min(...temps),
        tempMax: Math.max(...temps),
        description: midday.weather[0].description,
        icon: midday.weather[0].icon,
        condition: owmIconToCondition(midday.weather[0].icon),
        precipProbability: maxPop,
      };
    });

  const cityInfo = CITY_COORDS[citySlug];

  return {
    citySlug,
    cityName: cityInfo?.name ?? currentData.name,
    current: {
      temp: currentData.main.temp,
      feelsLike: currentData.main.feels_like,
      humidity: currentData.main.humidity,
      windSpeed: currentData.wind.speed,
      description: weatherInfo.description,
      icon: weatherInfo.icon,
      condition: owmIconToCondition(weatherInfo.icon),
    },
    forecast,
    updatedAt: new Date().toISOString(),
    source: "owm",
  };
}

// ─── Public Entry Point ───────────────────────────────────────────────────────

export async function getWeather(citySlug: string, isDomestic: boolean): Promise<WeatherResponse> {
  const cacheKey = `weather:${citySlug}:${isDomestic}`;

  if (isDomestic) {
    const grid = KMA_GRID_MAP[citySlug];
    if (!grid) throw new Error(`Unknown domestic city: ${citySlug}`);
    return fetchWithCache(cacheKey, () => fetchKmaWeather(grid.nx, grid.ny, citySlug), CACHE_5MIN);
  } else {
    const coords = CITY_COORDS[citySlug];
    if (!coords) throw new Error(`Unknown international city: ${citySlug}`);
    return fetchWithCache(cacheKey, () => fetchOwmWeather(coords.lat, coords.lon, citySlug), CACHE_1HR);
  }
}
