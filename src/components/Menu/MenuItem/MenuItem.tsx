import { useState } from 'react';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export type MenuItemState = 'default' | 'hover' | 'active' | 'disabled';

export type IconComponent = React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>;

export interface MenuItemProps {
  /** Interaction state */
  state?: MenuItemState;
  /** Whether the item is currently selected */
  selected?: boolean;
  /** Item label text */
  label: string;
  /** Shows or hides the leading icon */
  showLeadingIcon?: boolean;
  /** Optional icon component from react-coolicons to render at the start */
  leadingIcon?: IconComponent;
  /** Shows or hides the trailing icon */
  showTrailingIcon?: boolean;
  /** Optional icon component from react-coolicons to render at the end */
  trailingIcon?: IconComponent;
  /** Visual theme */
  theme?: Theme;
  /** Additional CSS class name */
  className?: string;
  /** Callback when item is clicked */
  onClick?: () => void;
}

const ICON_SIZE = 24;

function getMenuItemStyles(
  t: ReturnType<typeof useTokens>,
  state: MenuItemState,
  selected: boolean
) {
  const borderBottom = `${t.borderWidth.xs}px solid ${t.border.default.default}`;
  const isHoverLike = state === 'hover' || state === 'active';

  if (state === 'disabled') {
    return {
      backgroundColor: selected ? t.surface.disabled.selected : t.surface.disabled.default,
      borderBottom,
      textColor: selected ? t.text.disabled.onColor : t.text.disabled.default,
      iconColor: selected ? t.icon.disabled.onColor : t.icon.disabled.default,
    };
  }

  if (selected) {
    return {
      backgroundColor: isHoverLike ? t.surface.primary.defaultHover : t.surface.primary.default,
      borderBottom,
      textColor: t.text.primary.onColor,
      iconColor: t.icon.primary.onColor,
    };
  }

  // Not selected
  return {
    backgroundColor: isHoverLike ? t.surface.primary.defaultSubtle : 'transparent',
    borderBottom,
    textColor: isHoverLike ? t.text.primary.default : t.text.default.body,
    iconColor: isHoverLike ? t.icon.primary.default : t.icon.default.regular,
  };
}

export function MenuItem({
  state = 'default',
  selected = false,
  label,
  showLeadingIcon = false,
  leadingIcon,
  showTrailingIcon = false,
  trailingIcon,
  theme = 'light',
  className,
  onClick,
}: MenuItemProps) {
  const t = useTokens(theme);
  const [interactionStatus, setInteractionStatus] = useState<MenuItemState>(state);

  const isDisabled = state === 'disabled';
  const styles = getMenuItemStyles(t, interactionStatus, selected);
  const typo = typography.body.md;

  const LeadingIcon = leadingIcon;
  const TrailingIcon = trailingIcon;

  const handleMouseEnter = () => {
    if (!isDisabled) setInteractionStatus('hover');
  };

  const handleMouseLeave = () => {
    setInteractionStatus(state);
  };

  const handleClick = () => {
    if (!isDisabled) onClick?.();
  };

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: `${t.layoutSpacing.xsm}px`,
        height: `${t.layoutSpacing['2xlg']}px`,
        paddingTop: `${t.layoutSpacing.xsm}px`,
        paddingBottom: `${t.layoutSpacing.xsm}px`,
        paddingLeft: `${t.borderRadius[300]}px`,
        paddingRight: `${t.borderRadius[300]}px`,
        backgroundColor: styles.backgroundColor,
        borderBottom: styles.borderBottom,
        boxSizing: 'border-box',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        minWidth: 250,
        width: '100%',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {showLeadingIcon && LeadingIcon && (
        <span style={{ flexShrink: 0, display: 'flex' }}>
          <LeadingIcon width={ICON_SIZE} height={ICON_SIZE} color={styles.iconColor} />
        </span>
      )}

      <span
        style={{
          flex: '1 0 0',
          fontFamily: typo.fontFamily,
          fontSize: `${typo.fontSize}px`,
          fontWeight: typo.fontWeight,
          lineHeight: `${typo.lineHeight}px`,
          letterSpacing: typo.letterSpacing,
          color: styles.textColor,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          minWidth: 0,
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
