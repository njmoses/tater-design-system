import { useState, useRef } from 'react';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export type IconComponent = React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>;

export type AreaFieldStatus =
  | 'default'
  | 'hover'
  | 'active'
  | 'error'
  | 'success'
  | 'disabled';

export interface AreaFieldProps {
  /** The textarea value or placeholder when empty */
  text?: string;
  /** Placeholder text for the textarea */
  placeholder?: string;
  /** Status variant controlling border, background, and icon colors */
  status?: AreaFieldStatus;
  /** Whether the field has content (affects background) */
  filled?: boolean;
  /** Optional icon component from react-coolicons to render at the start of the field */
  leadingIcon?: IconComponent;
  /** Optional icon component from react-coolicons to render at the end of the field */
  trailingIcon?: IconComponent;
  /** Visual theme */
  theme?: Theme;
  /** Additional CSS class name */
  className?: string;
  /** Controlled textarea value */
  value?: string;
  /** Callback on textarea change */
  onChange?: (value: string) => void;
  /** Callback when field is focused */
  onFocus?: () => void;
  /** Callback when field loses focus */
  onBlur?: () => void;
  /** When true, the field stretches to the width of its container */
  fullWidth?: boolean;
}

const ICON_SIZE = 24;

function getAreaFieldStyles(
  t: ReturnType<typeof useTokens>,
  status: AreaFieldStatus,
  filled: boolean
) {
  switch (status) {
    case 'disabled':
      return {
        backgroundColor: t.surface.disabled.default,
        borderColor: t.border.disabled.default,
        textColor: t.text.disabled.default,
        iconColor: t.icon.disabled.default,
      };
    case 'error':
      return {
        backgroundColor: filled ? t.surface.error.defaultSubtle : t.base,
        borderColor: t.border.error.default,
        textColor: filled ? t.text.default.body : t.text.default.placeholder,
        iconColor: t.icon.error.default,
      };
    case 'success':
      return {
        backgroundColor: filled ? t.surface.success.defaultSubtle : t.base,
        borderColor: t.border.success.default,
        textColor: filled ? t.text.default.body : t.text.default.placeholder,
        iconColor: t.icon.success.default,
      };
    case 'hover':
      return {
        backgroundColor: filled ? t.surface.primary.defaultSubtle : t.base,
        borderColor: t.border.primary.defaultHover,
        textColor: t.text.default.body,
        iconColor: t.icon.primary.defaultHover,
      };
    case 'active':
      return {
        backgroundColor: t.base,
        borderColor: t.border.primary.focus,
        textColor: t.text.default.body,
        iconColor: t.icon.primary.default,
      };
    default:
      return {
        backgroundColor: t.base,
        borderColor: t.border.default.default,
        textColor: filled ? t.text.default.body : t.text.default.placeholder,
        iconColor: t.icon.default.regular,
      };
  }
}

const PLACEHOLDER_CLASS = {
  light: 'tater-area-field-placeholder-light',
  dark: 'tater-area-field-placeholder-dark',
} as const;

export function AreaField({
  text = '',
  placeholder = 'Placeholder',
  status = 'default',
  filled,
  leadingIcon,
  trailingIcon,
  theme = 'light',
  className,
  value,
  onChange,
  onFocus,
  onBlur,
  fullWidth = false,
}: AreaFieldProps) {
  const t = useTokens(theme);
  const [interactionStatus, setInteractionStatus] = useState<AreaFieldStatus>(status);
  const isFocusedRef = useRef(false);

  const isDisabled = status === 'disabled';
  const currentValue = value ?? text;
  const isFilled = filled ?? currentValue.length > 0;
  const styles = getAreaFieldStyles(t, interactionStatus, isFilled);
  const typo = typography.body.md;

  const showFocusRing = interactionStatus === 'active';

  const placeholderClass = PLACEHOLDER_CLASS[theme] ?? PLACEHOLDER_CLASS.light;

  const handleMouseEnter = () => {
    if (isDisabled || isFocusedRef.current) return;
    setInteractionStatus('hover');
  };

  const handleMouseLeave = () => {
    if (!isFocusedRef.current) setInteractionStatus(status);
  };

  const handleFocus = () => {
    if (isDisabled) return;
    isFocusedRef.current = true;
    setInteractionStatus('active');
    onFocus?.();
  };

  const handleBlur = () => {
    isFocusedRef.current = false;
    setInteractionStatus(status);
    onBlur?.();
  };

  const textareaValueProps =
    value !== undefined
      ? { value, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => onChange?.(e.target.value) }
      : { defaultValue: text };

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: t.layoutSpacing.xsm,
        height: t.layoutSpacing.xlg * 2,
        paddingLeft: t.borderRadius[300],
        paddingRight: t.borderRadius[300],
        paddingTop: t.borderWidth.lg,
        paddingBottom: t.borderWidth.lg,
        width: fullWidth ? '100%' : 250,
        backgroundColor: styles.backgroundColor,
        border: `${t.borderWidth.xs}px solid ${styles.borderColor}`,
        borderRadius: t.borderRadius[200],
        boxSizing: 'border-box',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`.${placeholderClass}::placeholder { color: ${t.text.default.placeholder}; }`}</style>

      {showFocusRing && (
        <div
          style={{
            position: 'absolute',
            inset: -(3 + t.borderWidth.xs),
            border: `${t.borderWidth.xs}px solid ${t.border.primary.focus}`,
            borderRadius: t.borderRadius[300],
            pointerEvents: 'none',
          }}
        />
      )}

      {leadingIcon && (() => {
        const LeadingIcon = leadingIcon;
        return (
          <span style={{ flexShrink: 0, display: 'flex' }}>
            <LeadingIcon width={ICON_SIZE} height={ICON_SIZE} color={styles.iconColor} />
          </span>
        );
      })()}

      <textarea
        className={placeholderClass}
        placeholder={placeholder}
        disabled={isDisabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...textareaValueProps}
        style={{
          flex: '1 0 0',
          minWidth: 0,
          width: '100%',
          height: '100%',
          resize: 'none',
          fontFamily: typo.fontFamily,
          fontSize: typo.fontSize,
          fontWeight: typo.fontWeight,
          lineHeight: `${typo.lineHeight}px`,
          letterSpacing: typo.letterSpacing,
          color: t.text.default.body,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          padding: 0,
          cursor: isDisabled ? 'not-allowed' : 'text',
          boxSizing: 'border-box',
        }}
      />

      {trailingIcon && (() => {
        const TrailingIcon = trailingIcon;
        return (
          <span style={{ flexShrink: 0, display: 'flex' }}>
            <TrailingIcon width={ICON_SIZE} height={ICON_SIZE} color={styles.iconColor} />
          </span>
        );
      })()}
    </div>
  );
}
