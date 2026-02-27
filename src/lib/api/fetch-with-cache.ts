// In-memory cache with TTL support

export type CacheEntry<T> = {
  data: T;
  expiresAt: number;
};

// TTL constants (milliseconds)
export const CACHE_5MIN = 5 * 60 * 1000;
export const CACHE_1HR = 60 * 60 * 1000;
export const CACHE_24HR = 24 * 60 * 60 * 1000;

const cache = new Map<string, CacheEntry<unknown>>();

/**
 * Fetches data with in-memory caching.
 * If a valid cached entry exists, returns it without calling the fetcher.
 */
export async function fetchWithCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttlMs: number = CACHE_5MIN,
): Promise<T> {
  const now = Date.now();
  const cached = cache.get(key);

  if (cached && cached.expiresAt > now) {
    return cached.data as T;
  }

  const data = await fetcher();

  cache.set(key, {
    data,
    expiresAt: now + ttlMs,
  });

  return data;
}

/**
 * Invalidates all cache entries whose keys start with the given prefix.
 */
export function invalidateCache(keyPrefix: string): void {
  for (const key of cache.keys()) {
    if (key.startsWith(keyPrefix)) {
      cache.delete(key);
    }
  }
}

/**
 * Returns the current number of cache entries (for diagnostics).
 */
export function getCacheSize(): number {
  return cache.size;
}

/**
 * Clears the entire cache.
 */
export function clearCache(): void {
  cache.clear();
}
