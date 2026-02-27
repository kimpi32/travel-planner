"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Utensils, Star, MapPin, DollarSign, ChevronDown, ChevronUp, ExternalLink, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Restaurant {
  name: string;
  cuisine?: string;
  rating?: number;
  reviewCount?: number;
  priceRange?: string;
  address?: string;
  hours?: string;
  mustTry?: string[];
  description?: string;
  reservationRequired?: boolean;
  url?: string;
  recommended?: boolean;
  tags?: string[];
}

interface RestaurantListProps {
  result: {
    restaurants?: Restaurant[];
    recommendations?: Restaurant[];
    city?: string;
    cuisine?: string;
    summary?: string;
    tips?: string;
  };
}

function PriceRange({ range }: { range?: string }) {
  if (!range) return null;
  const count = (range.match(/₩|W|\$/g) || []).length;
  const total = 4;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: total }).map((_, i) => (
        <DollarSign
          key={i}
          className={cn(
            "h-3 w-3",
            i < count ? "text-emerald-600 dark:text-emerald-400" : "text-muted"
          )}
        />
      ))}
      {range && !/₩|W|\$/.test(range) && (
        <span className="ml-1 text-[10px] text-muted-foreground">{range}</span>
      )}
    </div>
  );
}

function StarRating({ rating, count }: { rating: number; count?: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
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
      </div>
      <span className="text-xs font-medium">{rating.toFixed(1)}</span>
      {count && <span className="text-[10px] text-muted-foreground">({count.toLocaleString()})</span>}
    </div>
  );
}

function RestaurantItem({ restaurant, index }: { restaurant: Restaurant; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      className={cn(
        "relative rounded-xl border bg-card p-3 transition-shadow hover:shadow-md",
        restaurant.recommended && "border-primary/30 bg-primary/5"
      )}
    >
      {restaurant.recommended && (
        <span className="absolute -top-2 left-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
          추천
        </span>
      )}

      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold">{restaurant.name}</span>
            {restaurant.cuisine && (
              <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                {restaurant.cuisine}
              </span>
            )}
            {restaurant.reservationRequired && (
              <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] text-red-600 dark:bg-red-900/20 dark:text-red-400">
                예약 필수
              </span>
            )}
          </div>

          {restaurant.rating !== undefined && (
            <div className="mt-1">
              <StarRating rating={restaurant.rating} count={restaurant.reviewCount} />
            </div>
          )}

          {restaurant.description && (
            <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">{restaurant.description}</p>
          )}

          <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-muted-foreground">
            {restaurant.address && (
              <span className="flex items-center gap-0.5">
                <MapPin className="h-2.5 w-2.5" />
                {restaurant.address}
              </span>
            )}
            {restaurant.hours && (
              <span className="flex items-center gap-0.5">
                <Clock className="h-2.5 w-2.5" />
                {restaurant.hours}
              </span>
            )}
          </div>

          {restaurant.mustTry && restaurant.mustTry.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {restaurant.mustTry.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-medium text-orange-700 dark:bg-orange-900/20 dark:text-orange-400"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {restaurant.tags && restaurant.tags.length > 0 && (
            <div className="mt-1.5 flex flex-wrap gap-1">
              {restaurant.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="shrink-0 flex flex-col items-end gap-1">
          <PriceRange range={restaurant.priceRange} />
          {restaurant.url && (
            <a
              href={restaurant.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-0.5 text-[10px] text-primary hover:underline"
            >
              더 보기 <ExternalLink className="h-2.5 w-2.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function RestaurantList({ result }: RestaurantListProps) {
  const [showAll, setShowAll] = useState(false);
  const restaurants = result.restaurants || result.recommendations || [];
  const displayRestaurants = showAll ? restaurants : restaurants.slice(0, 4);
  const hasMore = restaurants.length > 4;

  return (
    <div className="mt-2 space-y-2">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Utensils className="h-3.5 w-3.5 text-primary" />
        <span className="font-medium text-foreground">맛집 추천</span>
        {result.city && <span>{result.city}</span>}
        {result.cuisine && <span>· {result.cuisine}</span>}
      </div>

      <div className="space-y-2">
        {displayRestaurants.map((restaurant, i) => (
          <RestaurantItem key={i} restaurant={restaurant} index={i} />
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
            <><ChevronDown className="h-3.5 w-3.5" /> {restaurants.length - 4}개 더 보기</>
          )}
        </button>
      )}

      {result.tips && (
        <div className="rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700 dark:bg-amber-900/20 dark:text-amber-400">
          💡 {result.tips}
        </div>
      )}

      {result.summary && (
        <p className="rounded-lg bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
          {result.summary}
        </p>
      )}
    </div>
  );
}
