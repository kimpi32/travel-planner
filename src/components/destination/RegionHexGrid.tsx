"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { RegionInfo } from "@/data/country-details";

interface RegionHexGridProps {
  countrySlug: string;
  regions: RegionInfo[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const tileVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
    },
  }),
};

export default function RegionHexGrid({ countrySlug, regions }: RegionHexGridProps) {
  // 벌집 배열: 첫 행 넓게, 다음 행 좁게
  const maxPerRow = regions.length <= 4 ? 2 : 3;
  const rows: RegionInfo[][] = [];
  let i = 0;
  let isWide = true;
  while (i < regions.length) {
    const size = isWide ? maxPerRow : Math.max(1, maxPerRow - 1);
    rows.push(regions.slice(i, i + Math.min(size, regions.length - i)));
    i += size;
    isWide = !isWide;
  }

  let globalIdx = 0;

  return (
    <motion.div
      className="flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="relative flex justify-center"
          style={{
            marginTop: rowIndex > 0 ? "calc(var(--region-hex, 140px) * -0.28)" : 0,
            zIndex: rows.length - rowIndex,
          }}
        >
          {row.map((region) => {
            const idx = globalIdx++;
            return (
              <div key={region.slug} className="mx-[2px]" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))" }}>
                <Link href={`/destination/${countrySlug}/${region.slug}`}>
                  <motion.div
                    className="region-hex group relative cursor-pointer"
                    variants={tileVariants}
                    custom={idx}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${region.gradient} transition-transform duration-300 group-hover:scale-110`}
                      style={{ clipPath: "inherit" }}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/50 transition-colors duration-300 group-hover:from-black/0 group-hover:to-black/40"
                      style={{ clipPath: "inherit" }}
                    />
                    <div className="relative z-10 flex h-full flex-col items-center justify-center px-2 text-white drop-shadow-lg">
                      <span className="mb-1 text-xl">{region.icon}</span>
                      <span className="text-sm font-bold leading-tight">{region.name}</span>
                      <span className="mt-0.5 text-[10px] font-medium opacity-75">{region.nameEn}</span>
                      <span className="mt-1 rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-medium backdrop-blur-sm">
                        {region.cities.length}개 도시
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </div>
            );
          })}
        </div>
      ))}
    </motion.div>
  );
}
