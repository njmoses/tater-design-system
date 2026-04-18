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
  onClick?: () => void;
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

  const borderWidth = selected ? t.borderWidth.md : isHover ? t.borderWidth.sm : t.borderWidth.xs;

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
  onClick,
}: VerticalNavItemProps) {
  const t = useTokens(theme);
  const [interactionStatus, setInteractionStatus] = useState<VerticalNavItemStatus>(status);

  const { borderColor, borderWidth, backgroundColor, textColor, iconColor, typo, isFocus } =
    getItemStyles(t, interactionStatus, selected);

  const paddingLeft = level === 2 ? t.layoutSpacing.sm : t.layoutSpacing.xsm;

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
            left: -4,
            right: -2,
            border: `${t.borderWidth.xs}px solid ${t.border.primary.focus}`,
            borderRadius: `${t.borderRadius[100]}px`,
            pointerEvents: 'none',
          }}
        />
      )}

      {showLeadingIcon &&
        leadingIcon &&
        (() => {
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
