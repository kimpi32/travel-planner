import { tool } from "ai";
import { getExchangeRateSchema } from "./schemas";

const FRANKFURTER_BASE = "https://api.frankfurter.dev/v1/latest";

// KRW를 Frankfurter가 지원하지 않아 USD 경유 환율 계산
// Frankfurter는 EUR 기반 (ECB 데이터)
// KRW ↔ 다른 통화: EUR/KRW 기준으로 계산
const KRW_FALLBACK: Record<string, number> = {
  USD: 0.00073,
  EUR: 0.00068,
  JPY: 0.11,
  CNY: 0.0053,
  GBP: 0.00058,
  AUD: 0.00113,
  CAD: 0.00099,
  CHF: 0.00066,
  HKD: 0.0057,
  SGD: 0.00098,
  THB: 0.026,
  VND: 18.5,
  TWD: 0.024,
  MYR: 0.0034,
  IDR: 11.8,
  PHP: 0.042,
  INR: 0.061,
  TRY: 0.025,
  AED: 0.0027,
  NOK: 0.0079,
  SEK: 0.0076,
  DKK: 0.0051,
  PLN: 0.0029,
  HUF: 0.26,
  CZK: 0.017,
};

export const getExchangeRateTool = tool({
  description:
    "실시간 환율을 조회합니다. 주로 원화(KRW) 기준으로 여행지 통화의 환율과 예상 환전 금액을 알려줍니다.",
  inputSchema: getExchangeRateSchema,
  execute: async ({ from, to, amount }) => {
    const fromCurrency = from.toUpperCase();
    const toCurrency = to.toUpperCase();
    const baseAmount = amount ?? 1;

    let rate: number | null = null;
    let source = "Frankfurter (ECB)";
    let fetchedAt = new Date().toISOString();

    try {
      // KRW는 Frankfurter에서 기준 통화로 미지원 → EUR 경유 계산
      if (fromCurrency === "KRW") {
        // EUR 기준 환율 조회
        const res = await fetch(`${FRANKFURTER_BASE}?base=EUR&symbols=${toCurrency},${fromCurrency}`, {
          signal: AbortSignal.timeout(5000),
        });

        if (res.ok) {
          const data = await res.json() as { rates: Record<string, number>; date: string };
          fetchedAt = data.date;
          const eurToKrw = data.rates["KRW"];
          const eurToTarget = data.rates[toCurrency];

          if (eurToKrw && eurToTarget) {
            // KRW → EUR → Target
            rate = eurToTarget / eurToKrw;
            source = `Frankfurter ECB (${data.date})`;
          }
        }
      } else if (toCurrency === "KRW") {
        const res = await fetch(`${FRANKFURTER_BASE}?base=EUR&symbols=${fromCurrency},KRW`, {
          signal: AbortSignal.timeout(5000),
        });

        if (res.ok) {
          const data = await res.json() as { rates: Record<string, number>; date: string };
          fetchedAt = data.date;
          const eurToFrom = data.rates[fromCurrency];
          const eurToKrw = data.rates["KRW"];

          if (eurToFrom && eurToKrw) {
            rate = eurToKrw / eurToFrom;
            source = `Frankfurter ECB (${data.date})`;
          }
        }
      } else {
        // 일반 통화 간 환율
        const res = await fetch(`${FRANKFURTER_BASE}?base=${fromCurrency}&symbols=${toCurrency}`, {
          signal: AbortSignal.timeout(5000),
        });

        if (res.ok) {
          const data = await res.json() as { rates: Record<string, number>; date: string };
          fetchedAt = data.date;
          rate = data.rates[toCurrency] ?? null;
          source = `Frankfurter ECB (${data.date})`;
        }
      }
    } catch {
      // 네트워크 오류 시 fallback
    }

    // Fallback: 하드코딩 데이터 사용
    if (rate === null) {
      if (fromCurrency === "KRW" && KRW_FALLBACK[toCurrency]) {
        rate = KRW_FALLBACK[toCurrency];
        source = "참고용 근사 환율 (실시간 아님)";
      } else if (toCurrency === "KRW" && KRW_FALLBACK[fromCurrency]) {
        rate = 1 / KRW_FALLBACK[fromCurrency];
        source = "참고용 근사 환율 (실시간 아님)";
      } else {
        rate = 1;
        source = "환율 조회 실패 - 실제 환율을 확인하세요";
      }
    }

    const convertedAmount = baseAmount * rate;

    // 환전 팁
    const tips = buildExchangeTips(toCurrency, rate, fromCurrency);

    return {
      from: fromCurrency,
      to: toCurrency,
      rate: Number(rate.toFixed(6)),
      baseAmount,
      convertedAmount: Number(convertedAmount.toFixed(2)),
      displayConversion: `${fromCurrency === "KRW" ? baseAmount.toLocaleString("ko-KR") : baseAmount} ${fromCurrency} = ${formatAmount(convertedAmount, toCurrency)} ${toCurrency}`,
      fetchedAt,
      source,
      tips,
    };
  },
});

function formatAmount(amount: number, currency: string): string {
  if (amount >= 10000) return Math.round(amount).toLocaleString();
  if (amount < 0.01) return amount.toFixed(4);
  return amount.toFixed(2);
}

function buildExchangeTips(toCurrency: string, rate: number, fromCurrency: string): string[] {
  const tips: string[] = [];

  if (fromCurrency === "KRW") {
    tips.push(`1만원 ≈ ${formatAmount(10000 * rate, toCurrency)} ${toCurrency}`);
    tips.push(`10만원 ≈ ${formatAmount(100000 * rate, toCurrency)} ${toCurrency}`);
  }

  const currencyTips: Record<string, string> = {
    JPY: "일본은 현금 사용이 많습니다. 현지 ATM(7-Eleven, 우체국)이 가장 환율이 좋습니다.",
    EUR: "유럽 내 ATM 수수료 주의. 수수료 무료 카드(트래블월렛, 와이즈) 추천.",
    THB: "공항보다 시내 환전소(Super Rich 등)가 환율이 좋습니다.",
    USD: "달러는 현지 도착 전 미리 준비하거나 인터넷 환전이 유리합니다.",
    VND: "베트남 동(VND)은 단위가 크니 영수증을 꼼꼼히 확인하세요.",
    IDR: "인도네시아 루피아는 단위가 매우 크습니다. 0 하나 더 붙지 않도록 주의하세요.",
  };

  if (currencyTips[toCurrency]) {
    tips.push(currencyTips[toCurrency]);
  }

  tips.push("실제 환율은 은행/환전소마다 다를 수 있습니다. 출발 전 재확인 권장.");

  return tips;
}
