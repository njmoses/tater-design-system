import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';
import { useState } from 'react';

export type IconComponent = React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>;

export type TabStatus = 'default' | 'hover' | 'focus' | 'disabled';

export interface TabItemProps {
  status?: TabStatus;
  active: boolean;
  label: string;
  showLeadingIcon?: boolean;
  leadingIcon?: IconComponent;
  showTrailingIcon?: boolean;
  trailingIcon?: IconComponent;
  theme?: Theme;
  onClick?: () => void;
}

const ICON_SIZE = 24;

function getTabItemStyles(
  t: ReturnType<typeof useTokens>,
  status: TabStatus,
  active: boolean
) {
  if (status === 'disabled') {
    return {
      backgroundColor: 'transparent',
      bottomBorderColor: active ? t.border.disabled.default : null,
      textColor: t.text.disabled.default,
      iconColor: t.icon.disabled.default,
      semibold: false,
    };
  }

  if (status === 'hover') {
    return {
      backgroundColor: t.surface.primary.defaultSubtleHover,
      bottomBorderColor: active ? t.border.primary.defaultHover : null,
      textColor: t.text.primary.defaultHover,
      iconColor: t.icon.primary.defaultHover,
      semibold: false,
    };
  }

  // default or focus
  if (active) {
    return {
      backgroundColor: status === 'focus' ? t.surface.primary.defaultSubtle : 'transparent',
      bottomBorderColor: t.border.primary.default,
      textColor: t.text.default.body,
      iconColor: t.icon.primary.default,
      semibold: true,
    };
  }

  return {
    backgroundColor: 'transparent',
    bottomBorderColor: null as string | null,
    textColor: t.text.default.body,
    iconColor: t.icon.default.regular,
    semibold: false,
  };
}

export function TabItem({
  status = 'default',
  active,
  label,
  showLeadingIcon = false,
  leadingIcon,
  showTrailingIcon = false,
  trailingIcon,
  theme = 'light',
  onClick,
}: TabItemProps) {
  const t = useTokens(theme);
  const [interactionStatus, setInteractionStatus] = useState(status);

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

  const styles = getTabItemStyles(t, interactionStatus, active);
  const typo = styles.semibold ? typography.body.mdSemibold : typography.body.md;
  const LeadingIcon = leadingIcon;
  const TrailingIcon = trailingIcon;
  const showFocusRing = interactionStatus === 'focus';

  return (
    <div
      tabIndex={status === 'disabled' ? -1 : 0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${t.layoutSpacing.xsm}px`,
        paddingTop: `${t.borderRadius[300]}px`,
        paddingBottom: `${t.borderRadius[300]}px`,
        paddingLeft: `${t.layoutSpacing.sm}px`,
        paddingRight: `${t.layoutSpacing.sm}px`,
        backgroundColor: styles.backgroundColor,
        borderBottom: styles.bottomBorderColor
          ? `${t.borderWidth.md}px solid ${styles.bottomBorderColor}`
          : 'none',
        boxSizing: 'border-box',
        cursor: status === 'disabled' ? 'not-allowed' : 'pointer',
        outline: 'none',
      }}
    >
      {showFocusRing && (
        <div
          style={{
            position: 'absolute',
            top: -2,
            right: -2,
            bottom: active ? -6 : -2,
            left: -2,
            border: `${t.borderWidth.xs}px solid ${t.border.primary.default}`,
            borderRadius: `${t.borderRadius[100]}px`,
            pointerEvents: 'none',
          }}
        />
      )}

      {showLeadingIcon && LeadingIcon && (
        <span style={{ flexShrink: 0, display: 'flex' }}>
          <LeadingIcon width={ICON_SIZE} height={ICON_SIZE} color={styles.iconColor} />
        </span>
      )}

      <span
        style={{
          fontFamily: typo.fontFamily,
          fontSize: `${typo.fontSize}px`,
          fontWeight: typo.fontWeight,
          lineHeight: `${typo.lineHeight}px`,
          letterSpacing: typo.letterSpacing,
          color: styles.textColor,
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        {label}
      </span>

      {showTrailingIcon && TrailingIcon && (
        <span style={{ flexShrink: 0, display: 'flex' }}>
          <TrailingIcon width={ICON_SIZE} height={ICON_SIZE} color={styles.iconColor} />
        </span>
      )}
    </div>
  );
}
