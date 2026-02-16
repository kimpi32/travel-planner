import type { GeoNode } from "@/types/geography";

export type GeoTree = Map<string, GeoNode>;

export function buildGeoTree(nodes: GeoNode[]): GeoTree {
  return new Map(nodes.map((node) => [node.id, node]));
}

export function getChildren(tree: GeoTree, parentId: string | null): GeoNode[] {
  return Array.from(tree.values()).filter(
    (node) => node.parentId === parentId,
  );
}

export function getAncestors(tree: GeoTree, nodeId: string): GeoNode[] {
  const ancestors: GeoNode[] = [];
  let current = tree.get(nodeId);
  while (current?.parentId) {
    const parent = tree.get(current.parentId);
    if (parent) {
      ancestors.unshift(parent);
      current = parent;
    } else {
      break;
    }
  }
  return ancestors;
}

export function getBreadcrumbs(
  tree: GeoTree,
  currentId: string | null,
): GeoNode[] {
  if (!currentId) return [];
  const current = tree.get(currentId);
  if (!current) return [];
  return [...getAncestors(tree, currentId), current];
}
