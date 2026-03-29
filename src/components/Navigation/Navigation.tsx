import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';
import { Button } from '@/components/Button/Button';
import type { ButtonProps, ButtonState } from '@/components/Button/Button';

export type IconComponent = React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>;

export type NavItemStatus = 'default' | 'hover' | 'focus' | 'selected';

// ─── NavItem ─────────────────────────────────────────────────────────────────

export interface NavItemProps {
  label?: string;
  status?: NavItemStatus;
  theme?: Theme;
}

function getNavItemStyles(t: ReturnType<typeof useTokens>, status: NavItemStatus) {
  switch (status) {
    case 'hover':
      return { textColor: t.text.primary.defaultHover };
    case 'selected':
      return { textColor: t.text.primary.default };
    default:
      return { textColor: t.text.default.body };
  }
}

export function NavItem({ label = 'Nav Item', status = 'default', theme = 'light' }: NavItemProps) {
  const t = useTokens(theme);
  const { textColor } = getNavItemStyles(t, status);
  const typo = typography.body.md;

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: `${t.layoutSpacing.xsm}px`,
        height: 40,
        padding: `${t.layoutSpacing.xsm}px`,
        boxSizing: 'border-box',
      }}
    >
      {status === 'focus' && (
        <div
          style={{
            position: 'absolute',
            top: -2,
            bottom: -2,
            left: -2,
            right: -2,
            border: `${t.borderWidth.xs}px solid ${t.border.primary.focus}`,
            borderRadius: `${t.borderRadius[100]}px`,
            pointerEvents: 'none',
          }}
        />
      )}

      <span
        style={{
          fontFamily: typo.fontFamily,
          fontSize: `${typo.fontSize}px`,
          fontWeight: typo.fontWeight,
          lineHeight: `${typo.lineHeight}px`,
          letterSpacing: typo.letterSpacing,
          color: textColor,
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavigationProps {
  /** Status applied to all nav items */
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
}

export function Navigation({
  status = 'default',
  loginButtonState = 'default',
  signupButtonState = 'default',
  loginButtonProps,
  signupButtonProps,
  theme = 'light',
}: NavigationProps) {
  const t = useTokens(theme);

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
        <NavItem label="Nav Item" status={status} theme={theme} />
        <NavItem label="Nav Item" status={status} theme={theme} />
        <NavItem label="Nav Item" status={status} theme={theme} />
        <NavItem label="Nav Item" status={status} theme={theme} />
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
          {...loginButtonProps}
        />
        <Button
          type="primary"
          label="Signup"
          state={signupButtonState}
          theme={theme}
          {...signupButtonProps}
        />
      </div>
    </div>
  );
}
