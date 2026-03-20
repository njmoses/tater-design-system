import { useTokens } from '@/tokens';
import type { Theme } from '@/tokens';
import { MenuItem } from './MenuItem/MenuItem';
import type { MenuItemProps } from './MenuItem/MenuItem';

export interface MenuProps {
  /** Array of menu item configurations */
  items: MenuItemProps[];
  /** Visual theme */
  theme?: Theme;
  /** Additional CSS class name */
  className?: string;
}

export function Menu({ items, theme = 'light', className }: MenuProps) {
  const t = useTokens(theme);

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
      {items.map((item, index) => (
        <MenuItem key={index} {...item} theme={theme} />
      ))}
    </div>
  );
}
