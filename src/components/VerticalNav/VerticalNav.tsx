import { useState } from 'react';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';
import { VerticalNavItem } from './VerticalNavItem';
import type {
  IconComponent,
  VerticalNavItemStatus,
} from './VerticalNavItem/VerticalNavItem';

export type { IconComponent, VerticalNavItemStatus, VerticalNavItemProps } from './VerticalNavItem/VerticalNavItem';

export interface VerticalNavItemConfig {
  id: string;
  label?: string;
  status?: VerticalNavItemStatus;
  selected?: boolean;
  level?: 1 | 2;
  showLeadingIcon?: boolean;
  leadingIcon?: IconComponent;
}

export interface VerticalNavProps {
  /** Shared status applied to all items (can be overridden per item) */
  status?: VerticalNavItemStatus;
  /** Shared selected state applied to all items (used when no interaction has occurred) */
  selected?: boolean;
  /** Shared level applied to all items */
  level?: 1 | 2;
  /** Whether to show the leading icon on all items */
  showLeadingIcon?: boolean;
  /** Leading icon component applied to all items */
  leadingIcon?: IconComponent;
  /** Initial list of items — defaults to 4 items */
  initialItems?: VerticalNavItemConfig[];
  theme?: Theme;
  /** Optionally pre-select an item by id on mount */
  defaultSelectedId?: string;
  /** Fired whenever the selected item changes */
  onSelectionChange?: (id: string) => void;
}

const DEFAULT_ITEMS: VerticalNavItemConfig[] = [
  { id: '1', label: 'Anchor Item' },
  { id: '2', label: 'Anchor Item' },
  { id: '3', label: 'Anchor Item' },
  { id: '4', label: 'Anchor Item' },
];

export function VerticalNav({
  status = 'default',
  selected = false,
  level = 1,
  showLeadingIcon = false,
  leadingIcon,
  initialItems = DEFAULT_ITEMS,
  theme = 'light',
  defaultSelectedId,
  onSelectionChange,
}: VerticalNavProps) {
  const [items, setItems] = useState<VerticalNavItemConfig[]>(initialItems);
  const [selectedId, setSelectedId] = useState<string | null>(defaultSelectedId ?? null);

  const addItem = () => {
    setItems((prev) => [...prev, { id: String(Date.now()), label: 'Anchor Item' }]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleItemClick = (id: string) => {
    setSelectedId(id);
    onSelectionChange?.(id);
  };

  const t = useTokens(theme);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {items.map((item) => {
        // When selectedId is set (via interaction or defaultSelectedId), it drives selection.
        // Otherwise fall back to per-item or global selected prop for backward compatibility.
        const isSelected = selectedId !== null
          ? item.id === selectedId
          : (item.selected ?? selected);

        return (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <VerticalNavItem
                label={item.label}
                status={item.status ?? status}
                selected={isSelected}
                level={item.level ?? level}
                showLeadingIcon={item.showLeadingIcon ?? showLeadingIcon}
                leadingIcon={item.leadingIcon ?? leadingIcon}
                theme={theme}
                onClick={() => handleItemClick(item.id)}
              />
            </div>
            <button
              onClick={() => removeItem(item.id)}
              style={{
                marginLeft: `${t.layoutSpacing['2xsm']}px`,
                flexShrink: 0,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: t.text.default.caption,
                fontSize: 12,
                lineHeight: 1,
                padding: `${t.layoutSpacing['2xsm']}px`,
              }}
              aria-label="Remove item"
            >
              ✕
            </button>
          </div>
        );
      })}

      <button
        onClick={addItem}
        style={{
          marginTop: `${t.layoutSpacing['2xsm']}px`,
          alignSelf: 'flex-start',
          background: 'none',
          border: `${t.borderWidth.xs}px dashed ${t.border.default.default}`,
          borderRadius: `${t.borderRadius[100]}px`,
          cursor: 'pointer',
          color: t.text.default.caption,
          fontFamily: typography.body.md.fontFamily,
          fontSize: `${typography.body.md.fontSize}px`,
          padding: `${t.layoutSpacing['2xsm']}px ${t.layoutSpacing.xsm}px`,
        }}
      >
        + Add item
      </button>
    </div>
  );
}
