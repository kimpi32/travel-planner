import { NextRequest, NextResponse } from "next/server";
import { convertCurrency, getExchangeRates, SUPPORTED_CURRENCIES } from "@/lib/api/exchange";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const amountParam = searchParams.get("amount");

  // If only base is provided, return all rates
  if (from && !to && !amountParam) {
    try {
      const rates = await getExchangeRates(from);
      return NextResponse.json(rates, {
        headers: {
          "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=300",
        },
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error("[exchange/route] Error:", error);
      return NextResponse.json({ error: message }, { status: 500 });
    }
  }

  if (!from || !to) {
    return NextResponse.json(
      {
        error: "Missing required parameters: from and to (e.g. ?from=KRW&to=EUR)",
        supportedCurrencies: SUPPORTED_CURRENCIES,
      },
      { status: 400 },
    );
  }

  const amount = amountParam ? parseFloat(amountParam) : 1;

  if (isNaN(amount) || amount <= 0) {
    return NextResponse.json(
      { error: "Invalid amount: must be a positive number" },
      { status: 400 },
    );
  }

  try {
    const result = await convertCurrency(amount, from, to);

    return NextResponse.json(result, {
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    if (message.includes("Unsupported currency")) {
      return NextResponse.json(
        { error: message, supportedCurrencies: SUPPORTED_CURRENCIES },
        { status: 400 },
      );
    }

    if (message.includes("Frankfurter API error")) {
      return NextResponse.json(
        { error: "Exchange rate service unavailable" },
        { status: 503 },
      );
    }

    console.error("[exchange/route] Error:", error);
    return NextResponse.json({ error: "Failed to fetch exchange rates" }, { status: 500 });
  }
}
