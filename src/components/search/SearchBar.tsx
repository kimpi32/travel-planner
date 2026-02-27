"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Building2, Landmark, Globe, X } from "lucide-react";
import { searchItems, type SearchItem } from "@/lib/search-index";

const typeConfig: Record<
  SearchItem["type"],
  { icon: typeof MapPin; label: string; color: string }
> = {
  country: { icon: Globe, label: "국가", color: "text-blue-500" },
  city: { icon: Building2, label: "도시", color: "text-emerald-500" },
  attraction: { icon: Landmark, label: "명소", color: "text-amber-500" },
  region: { icon: MapPin, label: "지역", color: "text-purple-500" },
};

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length >= 1) {
      const items = searchItems(query);
      setResults(items);
      setIsOpen(items.length > 0);
      setSelectedIdx(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navigate = useCallback(
    (item: SearchItem) => {
      setQuery("");
      setIsOpen(false);
      router.push(item.href);
    },
    [router],
  );

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter" && selectedIdx >= 0) {
      e.preventDefault();
      navigate(results[selectedIdx]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  }

  // Global shortcut: Ctrl/Cmd + K
  useEffect(() => {
    function handleGlobalKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleGlobalKey);
    return () => document.removeEventListener("keydown", handleGlobalKey);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="도시, 국가, 명소 검색... (⌘K)"
          className="h-9 w-full rounded-full border bg-muted/50 pl-9 pr-8 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50 focus:bg-background focus:ring-1 focus:ring-primary/20"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 top-full z-50 mt-2 max-h-80 overflow-auto rounded-xl border bg-popover shadow-lg"
          >
            {results.map((item, i) => {
              const config = typeConfig[item.type];
              const Icon = config.icon;
              return (
                <button
                  key={`${item.type}-${item.href}`}
                  onClick={() => navigate(item)}
                  onMouseEnter={() => setSelectedIdx(i)}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    i === selectedIdx ? "bg-accent" : "hover:bg-accent/50"
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${config.color}`} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="truncate text-sm font-medium">
                        {item.icon && <span className="mr-1">{item.icon}</span>}
                        {item.name}
                      </span>
                      <span className="truncate text-xs text-muted-foreground">
                        {item.nameEn}
                      </span>
                    </div>
                    {item.breadcrumb && (
                      <p className="truncate text-xs text-muted-foreground/70">
                        {item.breadcrumb}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {config.label}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
