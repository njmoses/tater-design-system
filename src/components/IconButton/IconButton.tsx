import { useState, useRef } from 'react';
import { useTokens } from '@/tokens';
import type { Theme } from '@/tokens';

export type IconButtonType = 'primary' | 'secondary' | 'tertiary';
export type IconButtonState = 'default' | 'hover' | 'focus' | 'disabled';

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
  /** Callback when button is clicked */
  onClick?: () => void;
  /** HTML button type attribute */
  htmlType?: 'button' | 'submit' | 'reset';
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
    return {
      backgroundColor: state === 'hover' ? t.surface.primary.defaultHover : t.surface.primary.default,
      border: 'none',
      iconColor: t.icon.primary.onColor,
    };
  }

  if (type === 'secondary') {
    return {
      backgroundColor: state === 'default' ? 'transparent' : t.surface.primary.defaultSubtle,
      border: `${t.borderWidth.sm}px solid ${t.border.primary.default}`,
      iconColor: t.icon.primary.default,
    };
  }

  // tertiary
  return {
    backgroundColor: state === 'hover' ? t.surface.primary.defaultSubtle : 'transparent',
    border: 'none',
    iconColor: t.icon.primary.default,
  };
}

export function IconButton({
  type = 'primary',
  state = 'default',
  Icon,
  theme = 'light',
  className,
  onClick,
  htmlType = 'button',
}: IconButtonProps) {
  const t = useTokens(theme);
  const [interactionStatus, setInteractionStatus] = useState<IconButtonState>(state);
  const isFocusedRef = useRef(false);

  const isDisabled = state === 'disabled';
  const styles = getIconButtonStyles(t, type, interactionStatus);

  // Focus ring sits 3px outside the button edge.
  // Secondary adds 2px for its border, so the ring insets 5px from the padding box.
  const focusInset = type === 'secondary' ? -(3 + t.borderWidth.sm) : -3;

  const handleMouseEnter = () => {
    if (!isDisabled && !isFocusedRef.current) setInteractionStatus('hover');
  };

  const handleMouseLeave = () => {
    if (!isFocusedRef.current) setInteractionStatus(state);
  };

  const handleFocus = () => {
    isFocusedRef.current = true;
    setInteractionStatus('focus');
  };

  const handleBlur = () => {
    isFocusedRef.current = false;
    setInteractionStatus(state);
  };

  const handleClick = () => {
    if (!isDisabled) onClick?.();
  };

  return (
    <button
      type={htmlType}
      disabled={isDisabled}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
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
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        outline: 'none',
        appearance: 'none',
        WebkitAppearance: 'none',
      }}
    >
      {interactionStatus === 'focus' && (
        <div
          style={{
            position: 'absolute',
            inset: focusInset,
            border: `${t.borderWidth.xs}px solid ${t.border.primary.focus}`,
            borderRadius: `${t.borderRadius[400]}px`,
            pointerEvents: 'none',
          }}
        />
      )}

      <Icon width={ICON_SIZE} height={ICON_SIZE} color={styles.iconColor} />
    </button>
  );
}
