import { useState } from 'react';
import { useTokens } from '@/tokens';
import type { Theme } from '@/tokens';
import { TreeItem } from './TreeItem';

export interface TreeItemConfig {
  id: string;
  label: string;
  level: '01' | '02' | '03';
  showIcon?: boolean;
  children?: TreeItemConfig[];
}

export interface TreeProps {
  items: TreeItemConfig[];
  theme?: Theme;
}

interface FlatItem {
  id: string;
  label: string;
  level: '01' | '02' | '03';
  showIcon: boolean;
  hasChildren: boolean;
  parentId: string | null;
  depth: number;
}

function flatten(
  items: TreeItemConfig[],
  openIds: Set<string>,
  parentId: string | null = null,
  depth = 0
): FlatItem[] {
  const result: FlatItem[] = [];
  for (const item of items) {
    const hasChildren = !!(item.children && item.children.length > 0);
    result.push({
      id: item.id,
      label: item.label,
      level: item.level,
      showIcon: item.showIcon ?? true,
      hasChildren,
      parentId,
      depth,
    });
    if (hasChildren && openIds.has(item.id)) {
      result.push(...flatten(item.children!, openIds, item.id, depth + 1));
    }
  }
  return result;
}

export function Tree({ items, theme = 'light' }: TreeProps) {
  const t = useTokens(theme);
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const flatItems = flatten(items, openIds);

  function handleClick(item: FlatItem) {
    setSelectedId(item.id);
    if (item.hasChildren) {
      setOpenIds((prev) => {
        const next = new Set(prev);
        if (next.has(item.id)) {
          next.delete(item.id);
        } else {
          next.add(item.id);
        }
        return next;
      });
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}
    >
      {flatItems.map((item) => {
        const isSelected = selectedId === item.id;
        const isHovered = hoveredId === item.id;
        const status = isHovered ? 'hover' : 'default';

        return (
          <TreeItem
            key={item.id}
            status={status}
            selected={isSelected}
            level={item.level}
            label={item.label}
            showIcon={item.showIcon}
            open={openIds.has(item.id)}
            theme={theme}
            onClick={() => handleClick(item)}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          />
        );
      })}
    </div>
  );
}
