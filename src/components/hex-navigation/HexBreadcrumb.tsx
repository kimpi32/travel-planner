"use client";

import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import type { GeoNode } from "@/types/geography";

interface HexBreadcrumbProps {
  items: GeoNode[];
  scope: "domestic" | "international";
  onNavigate: (nodeId: string | null) => void;
}

export default function HexBreadcrumb({ items, scope, onNavigate }: HexBreadcrumbProps) {
  return (
    <motion.nav
      className="flex items-center gap-1 text-sm"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={() => onNavigate(null)}
        className="flex items-center gap-1 rounded-md px-2 py-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      >
        <Home className="h-3.5 w-3.5" />
        <span>{scope === "domestic" ? "국내" : "해외"}</span>
      </button>

      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-1">
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
          <button
            onClick={() => onNavigate(item.id)}
            className="rounded-md px-2 py-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            {item.name}
          </button>
        </div>
      ))}
    </motion.nav>
  );
}
