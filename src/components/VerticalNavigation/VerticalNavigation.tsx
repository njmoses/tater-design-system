import { useState } from 'react';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export type IconComponent = React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>;

export type VerticalNavItemStatus = 'default' | 'hover' | 'focus';

export interface VerticalNavItemProps {
  label?: string;
  status?: VerticalNavItemStatus;
  selected?: boolean;
  level?: 1 | 2;
  showLeadingIcon: boolean;
  leadingIcon?: IconComponent;
  theme?: Theme;
}

const ICON_SIZE = 20;

function getItemStyles(
  t: ReturnType<typeof useTokens>,
  status: VerticalNavItemStatus,
  selected: boolean
) {
  const isHover = status === 'hover';
  const isFocus = status === 'focus';

  const borderColor = isHover
    ? t.border.primary.defaultHover
    : selected
    ? t.border.primary.default
    : t.border.default.default;

  const borderWidth = isHover || selected
    ? t.borderWidth.sm
    : t.borderWidth.xs;

  const backgroundColor = isHover
    ? t.surface.primary.defaultSubtleHover
    : 'transparent';

  const textColor = isHover
    ? t.text.primary.defaultHover
    : selected
    ? t.text.primary.default
    : t.text.default.body;

  const iconColor = isHover
    ? t.icon.primary.defaultHover
    : selected
    ? t.icon.primary.default
    : t.icon.default.regular;

  const typo = selected ? typography.body.mdSemibold : typography.body.md;

  return { borderColor, borderWidth, backgroundColor, textColor, iconColor, typo, isFocus };
}

export function VerticalNavItem({
  label = 'Anchor Item',
  status = 'default',
  selected = false,
  level = 1,
  showLeadingIcon,
  leadingIcon,
  theme = 'light',
}: VerticalNavItemProps) {
  const t = useTokens(theme);
  const { borderColor, borderWidth, backgroundColor, textColor, iconColor, typo, isFocus } =
    getItemStyles(t, status, selected);

  const paddingLeft = level === 2 ? t.layoutSpacing.sm : t.layoutSpacing.xsm;

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: `${t.layoutSpacing.xsm}px`,
        height: 40,
        paddingTop: `${t.layoutSpacing.xsm}px`,
        paddingBottom: `${t.layoutSpacing.xsm}px`,
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${t.layoutSpacing.xsm}px`,
        backgroundColor,
        borderLeft: `${borderWidth}px solid ${borderColor}`,
        boxSizing: 'border-box',
      }}
    >
      {isFocus && (
        <div
          style={{
            position: 'absolute',
            top: -2,
            bottom: -2,
            left: -4,
            right: -2,
            border: `${t.borderWidth.xs}px solid ${t.border.primary.focus}`,
            borderRadius: `${t.borderRadius[100]}px`,
            pointerEvents: 'none',
          }}
        />
      )}

      {showLeadingIcon && leadingIcon && (() => {
        const LeadingIcon = leadingIcon;
        return (
          <span style={{ flexShrink: 0, display: 'flex' }}>
            <LeadingIcon width={ICON_SIZE} height={ICON_SIZE} color={iconColor} />
          </span>
        );
      })()}

      <span
        style={{
          flexShrink: 0,
          fontFamily: typo.fontFamily,
          fontSize: `${typo.fontSize}px`,
          fontWeight: typo.fontWeight,
          lineHeight: `${typo.lineHeight}px`,
          letterSpacing: typo.letterSpacing,
          color: textColor,
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── VerticalNavigation ───────────────────────────────────────────────────────

export interface VerticalNavigationItemConfig {
  id: string;
  label?: string;
  status?: VerticalNavItemStatus;
  selected?: boolean;
  level?: 1 | 2;
  showLeadingIcon?: boolean;
  leadingIcon?: IconComponent;
}

export interface VerticalNavigationProps {
  /** Shared status applied to all items (can be overridden per item) */
  status?: VerticalNavItemStatus;
  /** Shared selected state applied to all items */
  selected?: boolean;
  /** Shared level applied to all items */
  level?: 1 | 2;
  /** Whether to show the leading icon on all items */
  showLeadingIcon?: boolean;
  /** Leading icon component applied to all items */
  leadingIcon?: IconComponent;
  /** Initial list of items — defaults to 4 items */
  initialItems?: VerticalNavigationItemConfig[];
  theme?: Theme;
}

const DEFAULT_ITEMS: VerticalNavigationItemConfig[] = [
  { id: '1', label: 'Anchor Item' },
  { id: '2', label: 'Anchor Item' },
  { id: '3', label: 'Anchor Item' },
  { id: '4', label: 'Anchor Item' },
];

export function VerticalNavigation({
  status = 'default',
  selected = false,
  level = 1,
  showLeadingIcon = false,
  leadingIcon,
  initialItems = DEFAULT_ITEMS,
  theme = 'light',
}: VerticalNavigationProps) {
  const [items, setItems] = useState<VerticalNavigationItemConfig[]>(initialItems);

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      { id: String(Date.now()), label: 'Anchor Item' },
    ]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const t = useTokens(theme);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {items.map((item) => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <VerticalNavItem
              label={item.label}
              status={item.status ?? status}
              selected={item.selected ?? selected}
              level={item.level ?? level}
              showLeadingIcon={item.showLeadingIcon ?? showLeadingIcon}
              leadingIcon={item.leadingIcon ?? leadingIcon}
              theme={theme}
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
      ))}

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
