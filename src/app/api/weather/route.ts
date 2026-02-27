import { NextRequest, NextResponse } from "next/server";
import { getWeather } from "@/lib/api/weather";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const domestic = searchParams.get("domestic");

  if (!city) {
    return NextResponse.json(
      { error: "Missing required parameter: city" },
      { status: 400 },
    );
  }

  const isDomestic = domestic === "true" || domestic === "1";

  try {
    const data = await getWeather(city, isDomestic);

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=60",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    if (message.includes("Unknown domestic city") || message.includes("Unknown international city")) {
      return NextResponse.json({ error: message }, { status: 404 });
    }

    if (message.includes("is not configured")) {
      return NextResponse.json({ error: "Weather API key not configured" }, { status: 503 });
    }

    console.error("[weather/route] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: 500 },
    );
  }
}
