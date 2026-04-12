import { useState, useRef } from 'react';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export type IconComponent = React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>;

export type ButtonType = 'primary' | 'secondary' | 'tertiary';
export type ButtonState = 'default' | 'hover' | 'focus' | 'disabled';

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
  /** Callback when button is clicked */
  onClick?: () => void;
  /** HTML button type attribute */
  htmlType?: 'button' | 'submit' | 'reset';
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
    return {
      backgroundColor: state === 'hover' ? t.surface.primary.defaultHover : t.surface.primary.default,
      border: 'none',
      textColor: t.text.primary.onColor,
      iconColor: t.icon.primary.onColor,
    };
  }

  if (type === 'secondary') {
    return {
      backgroundColor: state === 'default' ? 'transparent' : t.surface.primary.defaultSubtle,
      border: `${t.borderWidth.sm}px solid ${t.border.primary.default}`,
      textColor: t.text.primary.default,
      iconColor: t.icon.primary.default,
    };
  }

  // tertiary
  return {
    backgroundColor: state === 'hover' ? t.surface.primary.defaultSubtle : 'transparent',
    border: 'none',
    textColor: t.text.primary.default,
    iconColor: t.icon.primary.default,
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
  onClick,
  htmlType = 'button',
}: ButtonProps) {
  const t = useTokens(theme);
  const [interactionStatus, setInteractionStatus] = useState<ButtonState>(state);
  const isFocusedRef = useRef(false);

  const isDisabled = state === 'disabled';
  const styles = getButtonStyles(t, type, interactionStatus);
  const typo = typography.body.md;

  // Focus ring sits 3px outside the button's border box.
  // Secondary has a 2px border, so account for it in the inset.
  const focusInset = type === 'secondary' ? -(3 + t.borderWidth.sm) : -3;

  const LeadingIcon = leadingIcon;
  const TrailingIcon = trailingIcon;

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
    </button>
  );
}
