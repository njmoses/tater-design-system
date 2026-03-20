import { useTokens } from '@/tokens';
import type { Theme } from '@/tokens';

export type IconButtonType = 'primary' | 'secondary' | 'tertiary';
export type IconButtonState = 'default' | 'hover' | 'focused' | 'disabled';

export type IconComponent = React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>;

export interface IconButtonProps {
  /** Visual style variant */
  type?: IconButtonType;
  /** Interaction state */
  state?: IconButtonState;
  /** Icon component from react-coolicons */
  Icon: IconComponent;
  /** Visual theme */
  theme?: Theme;
  /** Additional CSS class name */
  className?: string;
}

const ICON_SIZE = 24;

function getIconButtonStyles(
  t: ReturnType<typeof useTokens>,
  type: IconButtonType,
  state: IconButtonState
) {
  if (state === 'disabled') {
    return {
      backgroundColor: type === 'primary' ? t.surface.disabled.default : 'transparent',
      border: type === 'secondary'
        ? `${t.borderWidth.sm}px solid ${t.border.disabled.default}`
        : 'none',
      iconColor: t.icon.disabled.default,
    };
  }

  if (type === 'primary') {
    const isHover = state === 'hover';
    return {
      backgroundColor: isHover ? t.surface.primary.defaultHover : t.surface.primary.default,
      border: 'none',
      iconColor: isHover ? t.icon.primary.onColorHover : t.icon.primary.onColor,
    };
  }

  if (type === 'secondary') {
    const isHover = state === 'hover';
    return {
      backgroundColor: isHover ? t.surface.primary.defaultSubtleHover : 'transparent',
      border: `${t.borderWidth.sm}px solid ${isHover ? t.border.primary.defaultHover : t.border.primary.default}`,
      iconColor: isHover ? t.icon.primary.defaultHover : t.icon.primary.default,
    };
  }

  // tertiary
  const isHover = state === 'hover';
  return {
    backgroundColor: isHover ? t.surface.primary.defaultSubtleHover : 'transparent',
    border: 'none',
    iconColor: isHover ? t.icon.primary.defaultHover : t.icon.primary.default,
  };
}

export function IconButton({
  type = 'primary',
  state = 'default',
  Icon,
  theme = 'light',
  className,
}: IconButtonProps) {
  const t = useTokens(theme);
  const styles = getIconButtonStyles(t, type, state);

  // Focus ring sits 3px outside the button edge.
  // Secondary adds 2px for its border, so the ring insets 5px from the padding box.
  const focusInset = type === 'secondary' ? -5 : -3;

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `${t.borderRadius[300]}px`,
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

      <Icon width={ICON_SIZE} height={ICON_SIZE} color={styles.iconColor} />
    </div>
  );
}
