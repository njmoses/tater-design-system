import { useState } from 'react';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export type NavItemStatus = 'default' | 'hover' | 'focus' | 'selected';

export interface NavItemProps {
  label?: string;
  status?: NavItemStatus;
  selected?: boolean;
  theme?: Theme;
  onClick?: () => void;
}

function getNavItemStyles(
  t: ReturnType<typeof useTokens>,
  interactionStatus: NavItemStatus,
  selected: boolean
) {
  if (selected || interactionStatus === 'selected') {
    return { textColor: t.text.primary.default };
  }
  switch (interactionStatus) {
    case 'hover':
      return { textColor: t.text.primary.defaultHover };
    default:
      return { textColor: t.text.default.body };
  }
}

export function NavItem({
  label = 'Nav Item',
  status = 'default',
  selected = false,
  theme = 'light',
  onClick,
}: NavItemProps) {
  const t = useTokens(theme);
  const [interactionStatus, setInteractionStatus] = useState<NavItemStatus>(status);

  const { textColor } = getNavItemStyles(t, interactionStatus, selected);
  const typo = typography.body.md;
  const isFocus = interactionStatus === 'focus';

  const handleMouseEnter = () => setInteractionStatus('hover');
  const handleMouseLeave = () => setInteractionStatus(status);
  const handleFocus = () => setInteractionStatus('focus');
  const handleBlur = () => setInteractionStatus(status);
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: `${t.layoutSpacing.xsm}px`,
        height: 40,
        padding: `${t.layoutSpacing.xsm}px`,
        boxSizing: 'border-box',
        cursor: 'pointer',
        outline: 'none',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      {isFocus && (
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
