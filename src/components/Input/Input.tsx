import { Label } from '@/components/Label';
import type { LabelProps } from '@/components/Label';
import { Field } from '@/components/Field';
import type { FieldProps } from '@/components/Field';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

// LabelProps.text (label copy) and FieldProps.text (input value) conflict, so we
// lift Label's text to `label` and keep Field's text as `text`.
// LabelProps.status (required/optional marker) and FieldProps.status (visual state)
// are unrelated, so LabelProps.status becomes `labelStatus`.
// LabelProps.disabled is derived from status === 'disabled' automatically.
export interface InputProps
  extends Omit<LabelProps, 'theme' | 'text' | 'status' | 'disabled'>,
          Omit<FieldProps, 'theme'> {
  /** Text rendered by the Label sub-component */
  label: string;
  /** Controls the required/optional annotation on the Label */
  labelStatus?: LabelProps['status'];
  /** Optional hint text rendered between the Label and Field */
  hint?: string;
  /** When true, only the field is rendered (placeholder-only layouts) */
  hideLabel?: boolean;
  theme?: Theme;
}

export function Input({
  // Label props
  label,
  labelStatus,
  showInfoTip,
  htmlFor,
  // Hint
  hint,
  // Field props
  text,
  placeholder,
  status = 'default',
  filled,
  leadingIcon,
  trailingIcon,
  className,
  value,
  onChange,
  onFocus,
  onBlur,
  inputType,
  fullWidth,
  hideLabel = false,
  // Shared
  theme = 'light',
}: InputProps) {
  const t = useTokens(theme);
  const typo = typography.body.sm;
  const isDisabled = status === 'disabled';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: hideLabel ? 0 : `${t.layoutSpacing.xsm}px`,
        width: fullWidth ? '100%' : 250,
      }}
    >
      {!hideLabel && (
        <Label
          text={label}
          status={labelStatus}
          showInfoTip={showInfoTip}
          htmlFor={htmlFor}
          disabled={isDisabled}
          theme={theme}
        />
      )}

      {hint && (
        <span
          style={{
            fontFamily: typo.fontFamily,
            fontSize: `${typo.fontSize}px`,
            fontWeight: typo.fontWeight,
            lineHeight: `${typo.lineHeight}px`,
            letterSpacing: typo.letterSpacing,
            color: isDisabled ? t.text.disabled.default : t.text.default.caption,
          }}
        >
          {hint}
        </span>
      )}

      <Field
        text={text}
        placeholder={placeholder}
        status={status}
        filled={filled}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
        className={className}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        inputType={inputType}
        fullWidth={fullWidth}
        theme={theme}
      />
    </div>
  );
}
