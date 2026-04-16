import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';
import { useState, useRef, useEffect } from 'react';

export type IconComponent = React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>;

export type ButtonGroupStatus = 'default' | 'hover' | 'selected' | 'disabled';

export interface ButtonGroupItemProps {
  id?: string;
  status?: ButtonGroupStatus;
  /** Controlled by parent ButtonGroup — drives the selected visual state */
  selected?: boolean;
  /** Suppresses the right divider on the final item in the group */
  isLast?: boolean;
  showLabel?: boolean;
  label?: string;
  showLeadingIcon?: boolean;
  leadingIcon?: IconComponent;
  theme?: Theme;
  onClick?: () => void;
}

const ICON_SIZE = 24;

function getItemStyles(
  t: ReturnType<typeof useTokens>,
  interactionStatus: ButtonGroupStatus,
  selected: boolean
) {
  if (interactionStatus === 'disabled') {
    return {
      backgroundColor: t.surface.disabled.default,
      textColor:       t.text.disabled.default,
      iconColor:       t.icon.disabled.default,
    };
  }
  // selected visual state takes priority over hover
  if (selected) {
    return {
      backgroundColor: t.surface.primary.default,
      textColor:       t.text.primary.onColor,
      iconColor:       t.icon.primary.onColor,
    };
  }
  if (interactionStatus === 'hover') {
    return {
      backgroundColor: t.surface.primary.defaultSubtleHover,
      textColor:       t.text.primary.defaultHover,
      iconColor:       t.icon.primary.defaultHover,
    };
  }
  return {
    backgroundColor: 'transparent',
    textColor:       t.text.primary.default,
    iconColor:       t.icon.primary.default,
  };
}

export function ButtonGroupItem({
  status = 'default',
  selected = false,
  isLast = false,
  showLabel = true,
  label = 'Button Group',
  showLeadingIcon = true,
  leadingIcon,
  theme = 'light',
  onClick,
}: ButtonGroupItemProps) {
  const t = useTokens(theme);
  const [interactionStatus, setInteractionStatus] = useState<ButtonGroupStatus>(status);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync when the external status prop changes
  useEffect(() => {
    setInteractionStatus(status);
  }, [status]);

  // Outside-click resets interaction state
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (status === 'disabled') return;
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setInteractionStatus(status);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [status]);

  const handleMouseEnter = () => {
    if (status === 'disabled') return;
    setInteractionStatus('hover');
  };

  const handleMouseLeave = () => {
    if (status === 'disabled') return;
    setInteractionStatus(status);
  };

  const handleClick = () => {
    if (status === 'disabled') return;
    onClick?.();
  };

  const styles = getItemStyles(t, interactionStatus, selected);
  const typo = typography.body.md;
  const LeadingIcon = leadingIcon;

  return (
    <div
      ref={containerRef}
      tabIndex={status === 'disabled' ? -1 : 0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        display: 'flex',
        flex: '0 0 auto',
        alignItems: 'center',
        justifyContent: 'center',
        gap: `${t.borderRadius[300]}px`,
        height: 48,
        paddingTop: `${t.borderRadius[300]}px`,
        paddingBottom: `${t.borderRadius[300]}px`,
        paddingLeft: `${t.layoutSpacing.sm}px`,
        paddingRight: `${t.layoutSpacing.sm}px`,
        backgroundColor: styles.backgroundColor,
        borderRight: isLast ? 'none' : `${t.borderWidth.sm}px solid ${t.border.primary.default}`,
        boxSizing: 'border-box',
        flexShrink: 0,
        cursor: status === 'disabled' ? 'not-allowed' : 'pointer',
        outline: 'none',
        userSelect: 'none',
      }}
    >
      {showLeadingIcon && LeadingIcon && (
        <span style={{ flexShrink: 0, display: 'flex' }}>
          <LeadingIcon width={ICON_SIZE} height={ICON_SIZE} color={styles.iconColor} />
        </span>
      )}
      {showLabel && (
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
      )}
    </div>
  );
}
