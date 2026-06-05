import { Label } from '@/components/Label';
import type { LabelProps } from '@/components/Label';
import { AreaField } from '@/components/AreaField';
import type { AreaFieldProps } from '@/components/AreaField';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export interface TextAreaProps
  extends Omit<LabelProps, 'theme' | 'text' | 'status' | 'disabled'>,
          Omit<AreaFieldProps, 'theme'> {
  /** Text rendered by the Label sub-component */
  label: string;
  /** Controls the required/optional annotation on the Label */
  labelStatus?: LabelProps['status'];
  /** Helper text displayed below the label and above the field */
  hintText?: string;
  /** When false, hint text is hidden even if hintText is provided */
  showHintText?: boolean;
  /** When true, only the field is rendered (placeholder-only layouts) */
  hideLabel?: boolean;
  theme?: Theme;
}

export function TextArea({
  // Label props
  label,
  labelStatus,
  showInfoTip,
  htmlFor,
  // Hint
  hintText,
  showHintText = true,
  // AreaField props
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
  fullWidth,
  hideLabel = false,
  // Shared
  theme = 'light',
}: TextAreaProps) {
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

      {showHintText && hintText && (
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
          {hintText}
        </span>
      )}

      <AreaField
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
        fullWidth={fullWidth}
        theme={theme}
      />
    </div>
  );
}
