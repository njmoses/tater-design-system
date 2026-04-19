import { useState } from 'react';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export type IconComponent = React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>;

export type LinkStatus = 'default' | 'hover' | 'focus' | 'disabled';
export type LinkType = 'basic' | 'inline';

export interface LinkProps {
  status?: LinkStatus;
  type?: LinkType;
  label: string;
  showLeadingIcon: boolean;
  leadingIcon?: IconComponent;
  showTrailingIcon: boolean;
  trailingIcon?: IconComponent;
  theme?: Theme;
  onClick?: () => void;
  href?: string;
}

const ICON_SIZE = 24;

function getLinkStyles(t: ReturnType<typeof useTokens>, status: LinkStatus) {
  switch (status) {
    case 'hover':
      return {
        textColor: t.text.primary.default,
        iconColor: t.icon.primary.default,
        backgroundColor: t.surface.primary.defaultSubtleHover,
        borderRadius: `${t.borderRadius[100]}px`,
      };
    case 'disabled':
      return {
        textColor: t.text.disabled.default,
        iconColor: t.icon.disabled.default,
        backgroundColor: t.surface.disabled.default,
        borderRadius: `${t.borderRadius[100]}px`,
      };
    default:
      return {
        textColor: t.text.primary.default,
        iconColor: t.icon.primary.default,
        backgroundColor: 'transparent',
        borderRadius: undefined,
      };
  }
}

export function Link({
  status = 'default',
  type = 'basic',
  label,
  showLeadingIcon,
  leadingIcon,
  showTrailingIcon,
  trailingIcon,
  theme = 'light',
  onClick,
  href,
}: LinkProps) {
  const [interactionStatus, setInteractionStatus] = useState(status);
  const t = useTokens(theme);

  const handleMouseEnter = () => {
    if (status === 'disabled') return;
    setInteractionStatus('hover');
  };

  const handleMouseLeave = () => {
    if (status === 'disabled') return;
    setInteractionStatus(status);
  };

  const handleFocus = () => {
    if (status === 'disabled') return;
    setInteractionStatus('focus');
  };

  const handleBlur = () => {
    if (status === 'disabled') return;
    setInteractionStatus(status);
  };

  const handleClick = () => {
    if (status === 'disabled') return;
    onClick?.();
  };

  const { textColor, iconColor, backgroundColor, borderRadius } = getLinkStyles(t, interactionStatus);
  const typo = type === 'inline' ? typography.body.mdLink : typography.body.md;

  const LeadingIcon = leadingIcon;
  const TrailingIcon = trailingIcon;

  const isDisabled = status === 'disabled';

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: `${t.layoutSpacing.xsm}px`,
    backgroundColor,
    borderRadius,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
  };

  const content = (
    <>
      {interactionStatus === 'focus' && (
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

      {showLeadingIcon && LeadingIcon && (
        <span style={{ flexShrink: 0, display: 'flex' }}>
          <LeadingIcon width={ICON_SIZE} height={ICON_SIZE} color={iconColor} />
        </span>
      )}

      <span
        style={{
          fontFamily: typo.fontFamily,
          fontSize: `${typo.fontSize}px`,
          fontWeight: typo.fontWeight,
          lineHeight: `${typo.lineHeight}px`,
          letterSpacing: typo.letterSpacing,
          textDecoration: typo.textDecoration,
          color: textColor,
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        {label}
      </span>

      {showTrailingIcon && TrailingIcon && (
        <span style={{ flexShrink: 0, display: 'flex' }}>
          <TrailingIcon width={ICON_SIZE} height={ICON_SIZE} color={iconColor} />
        </span>
      )}
    </>
  );

  if (isDisabled) {
    return (
      <span style={containerStyle} aria-disabled="true">
        {content}
      </span>
    );
  }

  return (
    <a
      href={href}
      role="link"
      tabIndex={0}
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
    >
      {content}
    </a>
  );
}
