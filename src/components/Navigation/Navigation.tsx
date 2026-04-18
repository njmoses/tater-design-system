import { useState } from 'react';
import { useTokens } from '@/tokens';
import type { Theme } from '@/tokens';
import { Button } from '@/components/Button/Button';
import type { ButtonProps, ButtonState } from '@/components/Button/Button';
import { NavItem } from './NavItem';
import type { NavItemStatus } from './NavItem/NavItem';

export type { NavItemStatus } from './NavItem/NavItem';

export interface NavItemConfig {
  id: string;
  label?: string;
  status?: NavItemStatus;
}

export interface NavigationProps {
  /** Status applied to all nav items (can be overridden per item) */
  status?: NavItemStatus;
  /** State for the Login (tertiary) button */
  loginButtonState?: ButtonState;
  /** State for the Signup (primary) button */
  signupButtonState?: ButtonState;
  /** Props forwarded to the Login button (merged with defaults) */
  loginButtonProps?: Partial<Omit<ButtonProps, 'label' | 'type'>>;
  /** Props forwarded to the Signup button (merged with defaults) */
  signupButtonProps?: Partial<Omit<ButtonProps, 'label' | 'type'>>;
  theme?: Theme;
  /** Nav items to render — defaults to 4 unlabelled items */
  navItems?: NavItemConfig[];
  /** Optionally pre-select a nav item by id on mount */
  defaultSelectedId?: string;
  /** Fired whenever the selected nav item changes */
  onSelectionChange?: (id: string) => void;
  /** Callback for the Login button */
  onLoginClick?: () => void;
  /** Callback for the Signup button */
  onSignupClick?: () => void;
}

const DEFAULT_NAV_ITEMS: NavItemConfig[] = [
  { id: 'nav-1', label: 'Nav Item' },
  { id: 'nav-2', label: 'Nav Item' },
  { id: 'nav-3', label: 'Nav Item' },
  { id: 'nav-4', label: 'Nav Item' },
];

export function Navigation({
  status = 'default',
  loginButtonState = 'default',
  signupButtonState = 'default',
  loginButtonProps,
  signupButtonProps,
  theme = 'light',
  navItems = DEFAULT_NAV_ITEMS,
  defaultSelectedId,
  onSelectionChange,
  onLoginClick,
  onSignupClick,
}: NavigationProps) {
  const t = useTokens(theme);
  const [selectedId, setSelectedId] = useState<string | null>(defaultSelectedId ?? null);

  const handleItemClick = (id: string) => {
    setSelectedId(id);
    onSelectionChange?.(id);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: `${t.layoutSpacing.xsm}px`,
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Nav items — left aligned */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: `${t.layoutSpacing.xsm}px`,
          flex: '1 0 0',
          minWidth: 0,
        }}
      >
        {navItems.map((item) => {
          // selectedId (from interaction or defaultSelectedId) drives selection.
          // Fall back to per-item status === 'selected' for backward compatibility.
          const isSelected = selectedId !== null
            ? item.id === selectedId
            : item.status === 'selected';

          return (
            <NavItem
              key={item.id}
              label={item.label}
              status={item.status ?? status}
              selected={isSelected}
              theme={theme}
              onClick={() => handleItemClick(item.id)}
            />
          );
        })}
      </div>

      {/* Buttons — right aligned */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: `${t.layoutSpacing.xsm}px`,
          flexShrink: 0,
        }}
      >
        <Button
          type="tertiary"
          label="Login"
          state={loginButtonState}
          theme={theme}
          onClick={onLoginClick}
          {...loginButtonProps}
        />
        <Button
          type="primary"
          label="Signup"
          state={signupButtonState}
          theme={theme}
          onClick={onSignupClick}
          {...signupButtonProps}
        />
      </div>
    </div>
  );
}
