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
}

const ICON_SIZE = 24;

function getMenuItemStyles(
  t: ReturnType<typeof useTokens>,
  state: MenuItemState,
  selected: boolean
) {
  const isDisabled = state === 'disabled';

  if (isDisabled && selected) {
    return {
      backgroundColor: t.surface.disabled.selected,
      borderBottom: 'none',
      textColor: t.text.onColor.placeholder,
      iconColor: t.icon.disabled.onColor,
    };
  }

  if (isDisabled) {
    return {
      backgroundColor: t.surface.disabled.default,
      borderBottom: `${t.borderWidth.xs}px solid ${t.border.disabled.default}`,
      textColor: t.text.disabled.default,
      iconColor: t.icon.disabled.default,
    };
  }

  const isHoverLike = state === 'hover' || state === 'active';

  if (selected) {
    return {
      backgroundColor: isHoverLike ? t.surface.primary.defaultHover : t.surface.primary.default,
      borderBottom: `${t.borderWidth.xs}px solid ${isHoverLike ? t.border.primary.defaultHover : t.border.default.default}`,
      textColor: isHoverLike ? t.text.primary.onColorHover : t.text.primary.onColor,
      iconColor: isHoverLike ? t.icon.primary.onColorHover : t.icon.primary.onColor,
    };
  }

  // Not selected
  return {
    backgroundColor: isHoverLike ? t.surface.primary.defaultSubtleHover : t.base,
    borderBottom: `${t.borderWidth.xs}px solid ${isHoverLike ? t.border.primary.defaultHover : t.border.default.default}`,
    textColor: t.text.default.placeholder,
    iconColor: isHoverLike ? t.icon.primary.defaultHover : t.icon.default.subtle,
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
}: MenuItemProps) {
  const t = useTokens(theme);
  const styles = getMenuItemStyles(t, state, selected);
  const typo = typography.body.md;

  const LeadingIcon = leadingIcon;
  const TrailingIcon = trailingIcon;

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
        cursor: state === 'disabled' ? 'not-allowed' : 'pointer',
        minWidth: 250,
        width: '100%',
      }}
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
