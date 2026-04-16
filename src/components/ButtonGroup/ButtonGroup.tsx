import { useTokens } from '@/tokens';
import type { Theme } from '@/tokens';
import { useState } from 'react';
import { ButtonGroupItem } from './ButtonGroupItem/ButtonGroupItem';
import type { ButtonGroupStatus, IconComponent } from './ButtonGroupItem/ButtonGroupItem';

export type { ButtonGroupStatus, IconComponent };

export interface ButtonGroupItemConfig {
  id: string;
  label?: string;
  status?: ButtonGroupStatus;
  showLabel?: boolean;
  showLeadingIcon?: boolean;
  leadingIcon?: IconComponent;
}

export interface ButtonGroupProps {
  // ─── Existing props (kept for backward compatibility) ───────────────────────
  /** Applies a uniform visual status to all auto-generated items when `items` is not provided */
  status?: ButtonGroupStatus;
  showLabel?: boolean;
  label?: string;
  showLeadingIcon?: boolean;
  leadingIcon?: IconComponent;
  theme?: Theme;
  // ─── New interactive props ───────────────────────────────────────────────────
  /** Explicit list of items; enables interactive selection mode */
  items?: ButtonGroupItemConfig[];
  /** Pre-select an item by id on mount (interactive mode only) */
  defaultSelectedId?: string;
  /** Fired whenever the selected item changes (interactive mode only) */
  onSelectionChange?: (id: string) => void;
}

const ITEM_COUNT = 4;

function getContainerBorderColor(
  t: ReturnType<typeof useTokens>,
  status: ButtonGroupStatus
): string {
  if (status === 'disabled') return t.border.disabled.default;
  if (status === 'hover') return t.border.primary.defaultHover;
  return t.border.primary.default;
}

export function ButtonGroup({
  status = 'default',
  showLabel = true,
  label = 'Button Group',
  showLeadingIcon = true,
  leadingIcon,
  theme = 'light',
  items,
  defaultSelectedId,
  onSelectionChange,
}: ButtonGroupProps) {
  const t = useTokens(theme);

  const [selectedId, setSelectedId] = useState<string | null>(
    defaultSelectedId ?? null
  );

  const handleItemClick = (id: string, itemStatus?: ButtonGroupStatus) => {
    if (itemStatus === 'disabled') return;
    setSelectedId(id);
    onSelectionChange?.(id);
  };

  const containerBorderColor = items
    ? t.border.primary.default
    : getContainerBorderColor(t, status);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignSelf: 'flex-start',
        alignItems: 'center',
        height: 48,
        border: `${t.borderWidth.sm}px solid ${containerBorderColor}`,
        borderRadius: `${t.borderRadius[300]}px`,
        overflow: 'hidden',
        cursor: !items && status === 'disabled' ? 'not-allowed' : 'default',
      }}
    >
      {items
        ? items.map((item, i) => (
            <ButtonGroupItem
              key={item.id}
              id={item.id}
              status={item.status}
              selected={item.id === selectedId}
              isLast={i === items.length - 1}
              showLabel={item.showLabel ?? showLabel}
              label={item.label ?? label}
              showLeadingIcon={item.showLeadingIcon ?? showLeadingIcon}
              leadingIcon={item.leadingIcon ?? leadingIcon}
              theme={theme}
              onClick={() => handleItemClick(item.id, item.status)}
            />
          ))
        : Array.from({ length: ITEM_COUNT }).map((_, i) => (
            <ButtonGroupItem
              key={i}
              status={status === 'selected' ? 'default' : status}
              selected={status === 'selected'}
              isLast={i === ITEM_COUNT - 1}
              showLabel={showLabel}
              label={label}
              showLeadingIcon={showLeadingIcon}
              leadingIcon={leadingIcon}
              theme={theme}
            />
          ))}
    </div>
  );
}
