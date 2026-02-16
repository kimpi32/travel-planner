"use client";

import { motion } from "framer-motion";
import type { GeoNode } from "@/types/geography";
import { getPlaceholderGradient } from "./hex-utils";

interface HexTileProps {
  item: GeoNode;
  index: number;
  onClick: () => void;
}

const tileVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.15 },
  },
};

export default function HexTile({ item, index, onClick }: HexTileProps) {
  const gradient = getPlaceholderGradient(item);

  return (
    <motion.button
      className="hex-tile group relative cursor-pointer focus:outline-none"
      variants={tileVariants}
      custom={index}
      whileHover={{ scale: 1.1, zIndex: 10 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      aria-label={`${item.name} (${item.nameEn})`}
    >
      {/* 배경 그라데이션 (이미지 대체) */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-300 group-hover:scale-110`}
        style={{ clipPath: "inherit" }}
      />

      {/* 어두운 오버레이 */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/50 transition-colors duration-300 group-hover:from-black/0 group-hover:to-black/40"
        style={{ clipPath: "inherit" }}
      />

      {/* 콘텐츠 */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-2 text-white drop-shadow-lg">
        {item.icon && <span className="mb-1 text-2xl">{item.icon}</span>}
        <span className="text-base font-bold leading-tight">{item.name}</span>
        <span className="mt-0.5 text-xs font-medium opacity-75">{item.nameEn}</span>
        {item.childCount && (
          <span className="mt-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium backdrop-blur-sm">
            {item.childCount}
            {item.level === "continent" || item.level === "subregion" ? "개국" : "곳"}
          </span>
        )}
      </div>
    </motion.button>
  );
}
