"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GeoNode } from "@/types/geography";
import HexTile from "./HexTile";
import { splitIntoHoneycombRows } from "./hex-utils";

interface HexGridProps {
  items: GeoNode[];
  levelKey: string;
  onSelect: (item: GeoNode) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export default function HexGrid({ items, levelKey, onSelect }: HexGridProps) {
  const rows = useMemo(() => splitIntoHoneycombRows(items), [items]);

  // 글로벌 인덱스 계산 (stagger 애니메이션용)
  let globalIndex = 0;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={levelKey}
        className="flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="relative flex justify-center"
            style={{
              marginTop: rowIndex > 0 ? "calc(var(--hex-size, 180px) * -0.28)" : 0,
              zIndex: rows.length - rowIndex,
            }}
          >
            {row.map((item) => {
              const idx = globalIndex++;
              return (
                <div key={item.id} className="hex-wrapper">
                  <HexTile item={item} index={idx} onClick={() => onSelect(item)} />
                </div>
              );
            })}
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
