import { useState } from 'react';
import { useTokens } from '@/tokens';
import type { Theme } from '@/tokens';
import { MenuItem } from './MenuItem/MenuItem';
import type { IconComponent } from './MenuItem/MenuItem';

export interface MenuItemConfig {
  /** Unique identifier used for selection tracking */
  id: string;
  /** Item label text */
  label: string;
  /** Interaction state — controls disabled appearance */
  state?: 'default' | 'disabled';
  /** Shows or hides the leading icon */
  showLeadingIcon?: boolean;
  /** Optional icon component from react-coolicons to render at the start */
  leadingIcon?: IconComponent;
  /** Shows or hides the trailing icon */
  showTrailingIcon?: boolean;
  /** Optional icon component from react-coolicons to render at the end */
  trailingIcon?: IconComponent;
}

export interface MenuProps {
  /** Array of menu item configurations */
  items: MenuItemConfig[];
  /** Id of the item to pre-select on mount */
  defaultSelectedId?: string;
  /** Fired when the selection changes, receives the selected item id */
  onSelectionChange?: (id: string) => void;
  /** Visual theme */
  theme?: Theme;
  /** Additional CSS class name */
  className?: string;
}

export function Menu({
  items,
  defaultSelectedId,
  onSelectionChange,
  theme = 'light',
  className,
}: MenuProps) {
  const t = useTokens(theme);
  const [selectedId, setSelectedId] = useState<string | null>(defaultSelectedId ?? null);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    onSelectionChange?.(id);
  };

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: t.base,
        border: `${t.borderWidth.xs}px solid ${t.border.default.default}`,
        borderRadius: `${t.borderRadius[200]}px`,
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {items.map((item) => (
        <MenuItem
          key={item.id}
          state={item.state ?? 'default'}
          selected={item.id === selectedId}
          label={item.label}
          showLeadingIcon={item.showLeadingIcon}
          leadingIcon={item.leadingIcon}
          showTrailingIcon={item.showTrailingIcon}
          trailingIcon={item.trailingIcon}
          theme={theme}
          onClick={item.state !== 'disabled' ? () => handleSelect(item.id) : undefined}
        />
      ))}
    </div>
  );
}
