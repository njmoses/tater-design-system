import { useState } from 'react';
import { Show, ChevronDown } from 'react-coolicons';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';
import { Label } from '@/components/Label';
import type { LabelProps } from '@/components/Label';
import { Menu } from '@/components/Menu';
import type { MenuItemConfig, MenuProps } from '@/components/Menu';

/** Menu row shape for `items` — alias of {@link MenuItemConfig}. */
export type DropdownItem = MenuItemConfig;

export interface DropdownProps extends Omit<LabelProps, 'theme'>, Omit<MenuProps, 'theme'> {
  /** Visual theme */
  theme?: Theme;
  /** Hint text rendered between the label and menu */
  hint?: string;
  /** Controls open (true) or closed (false) state */
  state?: boolean;
}

export function Dropdown({
  // Label props
  text,
  status,
  showInfoTip,
  htmlFor,
  disabled,
  // Hint
  hint,
  // Menu props
  items,
  className,
  // Shared
  state = false,
  theme = 'light',
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(state);
  const t = useTokens(theme);
  const hintTypo = typography.body.sm;

  const triggerField = (
    <div
      onClick={() => setIsOpen(prev => !prev)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: `${t.layoutSpacing.xsm}px`,
        height: `${t.layoutSpacing.xlg}px`,
        paddingTop: `${t.layoutSpacing.xsm}px`,
        paddingBottom: `${t.layoutSpacing.xsm}px`,
        paddingLeft: `${t.borderRadius[300]}px`,
        paddingRight: `${t.borderRadius[300]}px`,
        backgroundColor: t.base,
        border: `${t.borderWidth.xs}px solid ${t.border.default.default}`,
        borderRadius: `${t.borderRadius[200]}px`,
        boxSizing: 'border-box',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      <Show width={24} height={24} color={t.icon.default.subtle} />
      <span
        style={{
          flex: '1 0 0',
          fontFamily: hintTypo.fontFamily,
          fontSize: `${hintTypo.fontSize}px`,
          fontWeight: hintTypo.fontWeight,
          lineHeight: `${hintTypo.lineHeight}px`,
          letterSpacing: hintTypo.letterSpacing,
          color: t.text.disabled.default,
        }}
      >
        Placeholder
      </span>
      <ChevronDown width={24} height={24} color={t.icon.default.subtle} />
    </div>
  );

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: `${t.layoutSpacing.xsm}px`,
        width: 250,
      }}
    >
      <Label
        text={text}
        status={status}
        showInfoTip={showInfoTip}
        htmlFor={htmlFor}
        disabled={disabled}
        theme={theme}
      />

      {hint && (
        <span
          style={{
            fontFamily: hintTypo.fontFamily,
            fontSize: `${hintTypo.fontSize}px`,
            fontWeight: hintTypo.fontWeight,
            lineHeight: `${hintTypo.lineHeight}px`,
            letterSpacing: hintTypo.letterSpacing,
            color: t.text.default.caption,
          }}
        >
          {hint}
        </span>
      )}

      {triggerField}

      {isOpen && <Menu items={items} theme={theme} className={className} />}
    </div>
  );
}
