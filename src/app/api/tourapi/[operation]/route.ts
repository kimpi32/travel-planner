import { NextRequest, NextResponse } from "next/server";
import { tourApiRequest, TOUR_API_OPERATIONS, type TourApiOperation } from "@/lib/api/tourapi";

type RouteContext = {
  params: Promise<{ operation: string }>;
};

export async function GET(request: NextRequest, context: RouteContext) {
  const { operation } = await context.params;

  // Validate operation against whitelist
  if (!TOUR_API_OPERATIONS.includes(operation as TourApiOperation)) {
    return NextResponse.json(
      {
        error: `Unknown operation: ${operation}`,
        allowedOperations: TOUR_API_OPERATIONS,
      },
      { status: 400 },
    );
  }

  const { searchParams } = new URL(request.url);

  // Collect all query parameters (excluding Next.js internals)
  const params: Record<string, string> = {};
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  try {
    const data = await tourApiRequest(operation as TourApiOperation, params);

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    if (message.includes("TOUR_API_KEY is not configured")) {
      return NextResponse.json({ error: "TourAPI key not configured" }, { status: 503 });
    }

    if (message.includes("TourAPI returned error")) {
      return NextResponse.json({ error: message }, { status: 502 });
    }

    if (message.includes("TourAPI error: 4")) {
      return NextResponse.json({ error: "TourAPI request failed" }, { status: 400 });
    }

    console.error(`[tourapi/${operation}] Error:`, error);
    return NextResponse.json({ error: "Failed to fetch TourAPI data" }, { status: 500 });
  }
}
