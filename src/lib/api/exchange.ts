import { fetchWithCache, CACHE_1HR } from "./fetch-with-cache";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ExchangeRates = {
  base: string;
  date: string;
  rates: Record<string, number>;
};

export type ExchangeConversion = {
  from: string;
  to: string;
  amount: number;
  converted: number;
  rate: number;
  date: string;
};

// ─── Country → Currency Map ───────────────────────────────────────────────────

export const COUNTRY_CURRENCY: Record<string, string> = {
  // East Asia
  korea: "KRW",
  japan: "JPY",
  china: "CNY",
  taiwan: "TWD",
  hongkong: "HKD",
  // Southeast Asia
  thailand: "THB",
  singapore: "SGD",
  malaysia: "MYR",
  indonesia: "IDR",
  vietnam: "VND",
  philippines: "PHP",
  myanmar: "MMK",
  cambodia: "KHR",
  laos: "LAK",
  brunei: "BND",
  // South Asia
  india: "INR",
  srilanka: "LKR",
  nepal: "NPR",
  bangladesh: "BDT",
  pakistan: "PKR",
  // Middle East
  uae: "AED",
  dubai: "AED",
  saudi: "SAR",
  qatar: "QAR",
  kuwait: "KWD",
  bahrain: "BHD",
  oman: "OMR",
  jordan: "JOD",
  israel: "ILS",
  turkey: "TRY",
  // Europe
  france: "EUR",
  germany: "EUR",
  italy: "EUR",
  spain: "EUR",
  netherlands: "EUR",
  belgium: "EUR",
  austria: "EUR",
  portugal: "EUR",
  greece: "EUR",
  ireland: "EUR",
  finland: "EUR",
  luxembourg: "EUR",
  uk: "GBP",
  england: "GBP",
  switzerland: "CHF",
  norway: "NOK",
  sweden: "SEK",
  denmark: "DKK",
  poland: "PLN",
  czechia: "CZK",
  hungary: "HUF",
  croatia: "EUR",
  romania: "RON",
  bulgaria: "BGN",
  // Americas
  usa: "USD",
  canada: "CAD",
  mexico: "MXN",
  brazil: "BRL",
  argentina: "ARS",
  chile: "CLP",
  colombia: "COP",
  peru: "PEN",
  // Oceania
  australia: "AUD",
  newzealand: "NZD",
  // Africa
  egypt: "EGP",
  southafrica: "ZAR",
  morocco: "MAD",
  kenya: "KES",
  // City slugs (map to same country currency)
  tokyo: "JPY",
  osaka: "JPY",
  kyoto: "JPY",
  beijing: "CNY",
  shanghai: "CNY",
  taipei: "TWD",
  bangkok: "THB",
  bali: "IDR",
  hanoi: "VND",
  hochiminh: "VND",
  manila: "PHP",
  jakarta: "IDR",
  kualalumpur: "MYR",
  delhi: "INR",
  mumbai: "INR",
  istanbul: "TRY",
  paris: "EUR",
  london: "GBP",
  rome: "EUR",
  barcelona: "EUR",
  amsterdam: "EUR",
  berlin: "EUR",
  prague: "CZK",
  vienna: "EUR",
  zurich: "CHF",
  lisbon: "EUR",
  athens: "EUR",
  newyork: "USD",
  losangeles: "USD",
  chicago: "USD",
  miami: "USD",
  lasvegas: "USD",
  toronto: "CAD",
  vancouver: "CAD",
  cancun: "MXN",
  sydney: "AUD",
  melbourne: "AUD",
  cairo: "EGP",
  capetown: "ZAR",
};

// ─── Frankfurter API ──────────────────────────────────────────────────────────

const FRANKFURTER_BASE_URL = "https://api.frankfurter.dev/v1";

export async function getExchangeRates(base: string = "KRW"): Promise<ExchangeRates> {
  const upperBase = base.toUpperCase();
  const cacheKey = `exchange:rates:${upperBase}`;

  return fetchWithCache(
    cacheKey,
    async () => {
      const url = `${FRANKFURTER_BASE_URL}/latest?base=${upperBase}`;
      const res = await fetch(url);

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Frankfurter API error ${res.status}: ${text}`);
      }

      const data = await res.json();

      return {
        base: data.base,
        date: data.date,
        rates: data.rates as Record<string, number>,
      };
    },
    CACHE_1HR,
  );
}

// ─── Currency Conversion ──────────────────────────────────────────────────────

export async function convertCurrency(
  amount: number,
  from: string,
  to: string,
): Promise<ExchangeConversion> {
  const upperFrom = from.toUpperCase();
  const upperTo = to.toUpperCase();

  if (upperFrom === upperTo) {
    return {
      from: upperFrom,
      to: upperTo,
      amount,
      converted: amount,
      rate: 1,
      date: new Date().toISOString().slice(0, 10),
    };
  }

  const rates = await getExchangeRates(upperFrom);
  const rate = rates.rates[upperTo];

  if (rate === undefined) {
    throw new Error(`Unsupported currency: ${upperTo}`);
  }

  return {
    from: upperFrom,
    to: upperTo,
    amount,
    converted: Math.round(amount * rate * 100) / 100,
    rate,
    date: rates.date,
  };
}

// ─── Country Slug → Currency ──────────────────────────────────────────────────

export function getCurrencyForCountry(slug: string): string | null {
  return COUNTRY_CURRENCY[slug.toLowerCase()] ?? null;
}

// ─── Available Currencies List ────────────────────────────────────────────────

// Frankfurter supports these major currencies
export const SUPPORTED_CURRENCIES = [
  "AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK",
  "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "ISK",
  "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN",
  "RON", "SEK", "SGD", "THB", "TRY", "USD", "ZAR",
] as const;

export type SupportedCurrency = (typeof SUPPORTED_CURRENCIES)[number];
