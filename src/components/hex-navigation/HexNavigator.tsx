"use client";

import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { geoNodes } from "@/data/geography";
import { buildGeoTree, getChildren, getBreadcrumbs } from "@/lib/geo-tree";
import type { GeoNode, TravelScope } from "@/types/geography";
import HexGrid from "./HexGrid";
import HexBreadcrumb from "./HexBreadcrumb";

export default function HexNavigator() {
  const tree = useMemo(() => buildGeoTree(geoNodes), []);
  const [scope, setScope] = useState<TravelScope>("international");
  const [currentParentId, setCurrentParentId] = useState<string | null>(null);

  const currentItems = useMemo(() => {
    const children = getChildren(tree, currentParentId);
    if (currentParentId !== null) return children;

    // 최상위: scope에 따라 필터
    return children.filter((node) =>
      scope === "domestic" ? node.id.startsWith("domestic-") : !node.id.startsWith("domestic-"),
    );
  }, [tree, currentParentId, scope]);

  const breadcrumbs = useMemo(
    () => (currentParentId ? getBreadcrumbs(tree, currentParentId) : []),
    [tree, currentParentId],
  );

  const handleSelect = useCallback(
    (item: GeoNode) => {
      const children = getChildren(tree, item.id);
      if (children.length > 0) {
        setCurrentParentId(item.id);
      } else {
        // 리프 노드 → 여행지 상세 페이지 (추후 구현)
        console.log("Navigate to destination:", item.slug);
      }
    },
    [tree],
  );

  const handleBreadcrumbNavigate = useCallback((nodeId: string | null) => {
    setCurrentParentId(nodeId);
  }, []);

  const handleScopeChange = useCallback(
    (newScope: TravelScope) => {
      if (newScope !== scope) {
        setScope(newScope);
        setCurrentParentId(null);
      }
    },
    [scope],
  );

  const levelKey = currentParentId ?? `root-${scope}`;

  return (
    <div className="flex min-h-[70vh] flex-col items-center px-4 py-8">
      {/* 스코프 토글 */}
      <div className="mb-6 flex items-center gap-1 rounded-full bg-muted p-1">
        <button
          onClick={() => handleScopeChange("domestic")}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
            scope === "domestic"
              ? "bg-foreground text-background shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          국내여행
        </button>
        <button
          onClick={() => handleScopeChange("international")}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
            scope === "international"
              ? "bg-foreground text-background shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          해외여행
        </button>
      </div>

      {/* 브레드크럼 */}
      {breadcrumbs.length > 0 && (
        <div className="mb-6">
          <HexBreadcrumb
            items={breadcrumbs}
            scope={scope}
            onNavigate={handleBreadcrumbNavigate}
          />
        </div>
      )}

      {/* 현재 레벨 타이틀 */}
      <motion.div
        key={levelKey}
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {currentParentId ? (
          <>
            <h2 className="text-2xl font-bold">{tree.get(currentParentId)?.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {tree.get(currentParentId)?.nameEn}
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold">
              {scope === "domestic" ? "어디로 떠나볼까요?" : "어디로 떠나볼까요?"}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {scope === "domestic" ? "여행하고 싶은 지역을 선택하세요" : "여행하고 싶은 대륙을 선택하세요"}
            </p>
          </>
        )}
      </motion.div>

      {/* 육각 타일 그리드 */}
      <HexGrid items={currentItems} levelKey={levelKey} onSelect={handleSelect} />
    </div>
  );
}
