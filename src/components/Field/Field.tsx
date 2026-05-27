import { useState, useRef } from 'react';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export type IconComponent = React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>;

export type FieldStatus =
  | 'default'
  | 'hover'
  | 'focus'
  | 'active'
  | 'error'
  | 'success'
  | 'disabled';

export interface FieldProps {
  /** The input value or placeholder when empty */
  text?: string;
  /** Placeholder text for the input */
  placeholder?: string;
  /** Status variant controlling border, background, and icon colors.
   *  Use 'error', 'success', or 'disabled' to set a controlled state.
   *  'hover' and 'focus' are also accepted for static story display. */
  status?: FieldStatus;
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
  /** Controlled input value */
  value?: string;
  /** Callback on input change */
  onChange?: (value: string) => void;
  /** Callback when field is focused */
  onFocus?: () => void;
  /** Callback when field loses focus */
  onBlur?: () => void;
  /** HTML input type (e.g. password, email) */
  inputType?: React.HTMLInputTypeAttribute;
  /** When true, the field stretches to the width of its container */
  fullWidth?: boolean;
}

const ICON_SIZE = 24;

function getFieldStyles(
  t: ReturnType<typeof useTokens>,
  status: FieldStatus,
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
    case 'focus':
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

// Stable class per theme so we can target ::placeholder without CSS modules
const PLACEHOLDER_CLASS = {
  light: 'tater-field-placeholder-light',
  dark: 'tater-field-placeholder-dark',
} as const;

export function Field({
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
  inputType = 'text',
  fullWidth = false,
}: FieldProps) {
  const t = useTokens(theme);
  const [interactionStatus, setInteractionStatus] = useState<FieldStatus>(status);
  const isFocusedRef = useRef(false);

  const isDisabled = status === 'disabled';
  const currentValue = value ?? text;
  const isFilled = filled ?? currentValue.length > 0;
  const styles = getFieldStyles(t, interactionStatus, isFilled);
  const typo = typography.body.md;

  const showFocusRing = interactionStatus === 'focus';

  const placeholderClass = PLACEHOLDER_CLASS[theme] ?? PLACEHOLDER_CLASS.light;

  const handleMouseEnter = () => {
    if (!isDisabled && !isFocusedRef.current) setInteractionStatus('hover');
  };

  const handleMouseLeave = () => {
    if (!isFocusedRef.current) setInteractionStatus(status);
  };

  const handleFocus = () => {
    isFocusedRef.current = true;
    setInteractionStatus('focus');
    onFocus?.();
  };

  const handleBlur = () => {
    isFocusedRef.current = false;
    setInteractionStatus(status);
    onBlur?.();
  };

  // Controlled vs uncontrolled: if `value` is provided, bind it; otherwise let
  // the input be uncontrolled with `defaultValue` from the `text` prop.
  const inputValueProps =
    value !== undefined
      ? { value, onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value) }
      : { defaultValue: text };

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: t.layoutSpacing.xsm,
        height: t.layoutSpacing['2xlg'],
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
      {/* Inject placeholder colour via a <style> tag — inline styles can't target ::placeholder */}
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

      <input
        type={inputType}
        className={placeholderClass}
        placeholder={placeholder}
        disabled={isDisabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...inputValueProps}
        style={{
          flex: '1 0 0',
          minWidth: 0,
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
          width: '100%',
          cursor: isDisabled ? 'not-allowed' : 'text',
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
