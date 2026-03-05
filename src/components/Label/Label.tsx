// Correct — React compatible version
import { Info } from 'react-coolicons';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export interface LabelProps {
  /** The label text */
  text: string;
  /** Controls the status indicator appended to the label */
  status?: 'default' | 'required' | 'optional';
  /** Shows an info tip icon after the label */
  showInfoTip?: boolean;
  /** Links the label to its form input for accessibility */
  htmlFor?: string;
  /** Applies disabled styling */
  disabled?: boolean;
  /** Visual theme */
  theme?: Theme;
}


export function Label({
  text,
  status = 'default',
  showInfoTip = false,
  htmlFor,
  disabled = false,
  theme = 'light',
}: LabelProps) {
  const t = useTokens(theme);
  const typo = typography.label.primary;

  const textColor = disabled ? t.text.disabled.default : t.text.default.body;

  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        fontFamily: typo.fontFamily,
        fontSize: typo.fontSize,
        fontWeight: typo.fontWeight,
        lineHeight: `${typo.lineHeight}px`,
        letterSpacing: typo.letterSpacing,
        color: textColor,
        cursor: disabled ? 'not-allowed' : 'default',
        userSelect: 'none',
      }}
    >
      <span>{text}</span>

      {status === 'required' && !disabled && (
        <span
          aria-hidden="true"
          style={{ color: t.text.error.default }}
        >
          *
        </span>
      )}

      {status === 'optional' && !disabled && (
        <span
          style={{
            color: t.text.default.caption,
            fontWeight: typography.label.secondary.fontWeight,
          }}
        >
          (optional)
        </span>
      )}

      {showInfoTip && (
        <Info
          width={16}
          height={16}
          color={disabled ? t.icon.disabled.default : t.icon.information.default}
          aria-hidden="true"
        />
      )}
    </label>
  );
}
