import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export type IconComponent = React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>;

export type ButtonType = 'primary' | 'secondary' | 'tertiary';
export type ButtonState = 'default' | 'hover' | 'focused' | 'disabled';

export interface ButtonProps {
  /** Visual style variant */
  type?: ButtonType;
  /** Interaction state */
  state?: ButtonState;
  /** Button label text */
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

function getButtonStyles(
  t: ReturnType<typeof useTokens>,
  type: ButtonType,
  state: ButtonState
) {
  if (state === 'disabled') {
    return {
      backgroundColor: type === 'primary' ? t.surface.disabled.default : 'transparent',
      border: type === 'secondary'
        ? `${t.borderWidth.sm}px solid ${t.border.disabled.default}`
        : 'none',
      textColor: t.text.disabled.default,
      iconColor: t.icon.disabled.default,
    };
  }

  if (type === 'primary') {
    const isHover = state === 'hover';
    return {
      backgroundColor: isHover ? t.surface.primary.defaultHover : t.surface.primary.default,
      border: 'none',
      textColor: isHover ? t.text.primary.onColorHover : t.text.primary.onColor,
      iconColor: isHover ? t.icon.primary.onColorHover : t.icon.primary.onColor,
    };
  }

  if (type === 'secondary') {
    const isHover = state === 'hover';
    return {
      backgroundColor: isHover ? t.surface.primary.defaultSubtleHover : 'transparent',
      border: `${t.borderWidth.sm}px solid ${isHover ? t.border.primary.defaultHover : t.border.primary.default}`,
      textColor: isHover ? t.text.primary.defaultHover : t.text.primary.default,
      iconColor: isHover ? t.icon.primary.defaultHover : t.icon.primary.default,
    };
  }

  // tertiary
  const isHover = state === 'hover';
  return {
    backgroundColor: isHover ? t.surface.primary.defaultSubtleHover : 'transparent',
    border: 'none',
    textColor: isHover ? t.text.primary.defaultHover : t.text.primary.default,
    iconColor: isHover ? t.icon.primary.defaultHover : t.icon.primary.default,
  };
}

export function Button({
  type = 'primary',
  state = 'default',
  label,
  showLeadingIcon = false,
  leadingIcon,
  showTrailingIcon = false,
  trailingIcon,
  theme = 'light',
  className,
}: ButtonProps) {
  const t = useTokens(theme);
  const styles = getButtonStyles(t, type, state);
  const typo = typography.body.md;

  // Focus ring extends 3px outside the button edge.
  // Secondary adds 2px for the existing border, so ring is 5px from the padding box.
  const focusInset = type === 'secondary' ? -5 : -3;

  const LeadingIcon = leadingIcon;
  const TrailingIcon = trailingIcon;

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${t.borderRadius[300]}px`,
        height: `${t.layoutSpacing['2xlg']}px`,
        paddingTop: `${t.borderRadius[300]}px`,
        paddingBottom: `${t.borderRadius[300]}px`,
        paddingLeft: `${t.borderRadius[400]}px`,
        paddingRight: `${t.borderRadius[400]}px`,
        backgroundColor: styles.backgroundColor,
        border: styles.border,
        borderRadius: `${t.borderRadius[300]}px`,
        boxSizing: 'border-box',
        cursor: state === 'disabled' ? 'not-allowed' : 'pointer',
      }}
    >
      {state === 'focused' && (
        <div
          style={{
            position: 'absolute',
            inset: focusInset,
            border: `${t.borderWidth.xs}px solid ${t.border.primary.default}`,
            borderRadius: `${t.borderRadius[400]}px`,
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
          fontSize: typo.fontSize,
          fontWeight: typo.fontWeight,
          lineHeight: typo.lineHeight,
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
