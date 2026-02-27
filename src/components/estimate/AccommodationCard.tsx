"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Hotel, Star, MapPin, Wifi, Car, Coffee, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccommodationOption {
  name: string;
  type?: string;
  rating?: number;
  reviewCount?: number;
  pricePerNight?: number;
  totalPrice?: number;
  currency?: string;
  location?: string;
  amenities?: string[];
  imageUrl?: string;
  bookingUrl?: string;
  recommended?: boolean;
  description?: string;
}

interface AccommodationCardProps {
  result: {
    options?: AccommodationOption[];
    accommodations?: AccommodationOption[];
    city?: string;
    checkIn?: string;
    checkOut?: string;
    nights?: number;
    summary?: string;
  };
}

const AMENITY_ICONS: Record<string, React.ReactNode> = {
  "와이파이": <Wifi className="h-3 w-3" />,
  "주차": <Car className="h-3 w-3" />,
  "조식": <Coffee className="h-3 w-3" />,
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          className={cn(
            "h-3 w-3",
            i <= Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          )}
        />
      ))}
      <span className="ml-1 text-xs font-medium">{rating.toFixed(1)}</span>
    </div>
  );
}

function AccommodationItem({ option, index }: { option: AccommodationOption; index: number }) {
  const currency = option.currency || "KRW";
  const pricePerNight = option.pricePerNight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className={cn(
        "relative rounded-xl border bg-card p-3 transition-shadow hover:shadow-md",
        option.recommended && "border-primary/30 bg-primary/5"
      )}
    >
      {option.recommended && (
        <span className="absolute -top-2 left-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
          추천
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold">{option.name}</span>
            {option.type && (
              <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                {option.type}
              </span>
            )}
          </div>

          {option.rating !== undefined && (
            <div className="mt-1">
              <StarRating rating={option.rating} />
              {option.reviewCount && (
                <span className="ml-1 text-[10px] text-muted-foreground">({option.reviewCount.toLocaleString()}개 리뷰)</span>
              )}
            </div>
          )}

          {option.location && (
            <div className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground">
              <MapPin className="h-2.5 w-2.5" />
              {option.location}
            </div>
          )}

          {option.description && (
            <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">{option.description}</p>
          )}

          {option.amenities && option.amenities.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {option.amenities.slice(0, 5).map((amenity) => (
                <span
                  key={amenity}
                  className="flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
                >
                  {AMENITY_ICONS[amenity] || null}
                  {amenity}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="text-right shrink-0">
          {pricePerNight !== undefined && (
            <>
              <p className="text-sm font-bold text-primary">
                {currency === "KRW"
                  ? `${pricePerNight.toLocaleString()}원`
                  : `${currency} ${pricePerNight.toLocaleString()}`}
              </p>
              <p className="text-[10px] text-muted-foreground">1박</p>
            </>
          )}
          {option.totalPrice !== undefined && (
            <p className="mt-0.5 text-xs text-muted-foreground">
              총 {currency === "KRW"
                ? `${option.totalPrice.toLocaleString()}원`
                : `${currency} ${option.totalPrice.toLocaleString()}`}
            </p>
          )}
          {option.bookingUrl && (
            <a
              href={option.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 flex items-center justify-end gap-0.5 text-[10px] text-primary hover:underline"
            >
              예약 <ExternalLink className="h-2.5 w-2.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function AccommodationCard({ result }: AccommodationCardProps) {
  const [showAll, setShowAll] = useState(false);
  const options = result.options || result.accommodations || [];
  const displayOptions = showAll ? options : options.slice(0, 3);
  const hasMore = options.length > 3;

  return (
    <div className="mt-2 space-y-2">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Hotel className="h-3.5 w-3.5 text-primary" />
        <span className="font-medium text-foreground">숙소 옵션</span>
        {result.city && <span>{result.city}</span>}
        {result.checkIn && result.checkOut && (
          <span className="ml-auto">{result.checkIn} ~ {result.checkOut}</span>
        )}
        {result.nights && !result.checkIn && (
          <span className="ml-auto">{result.nights}박</span>
        )}
      </div>

      <div className="space-y-2">
        {displayOptions.map((option, i) => (
          <AccommodationItem key={i} option={option} index={i} />
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex w-full items-center justify-center gap-1 rounded-lg border py-2 text-xs text-muted-foreground transition-colors hover:bg-muted"
        >
          {showAll ? (
            <><ChevronUp className="h-3.5 w-3.5" /> 접기</>
          ) : (
            <><ChevronDown className="h-3.5 w-3.5" /> {options.length - 3}개 더 보기</>
          )}
        </button>
      )}

      {result.summary && (
        <p className="rounded-lg bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
          {result.summary}
        </p>
      )}
    </div>
  );
}
