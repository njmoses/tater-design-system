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
  | 'error'
  | 'success'
  | 'disabled';

export interface FieldProps {
  /** The input value or placeholder when empty */
  text?: string;
  /** Placeholder text when field is empty */
  placeholder?: string;
  /** Status variant controlling border, background, and icon colors */
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

export function Field({
  text = '',
  placeholder = 'Placeholder',
  status = 'default',
  filled,
  leadingIcon,
  trailingIcon,
  theme = 'light',
  className,
}: FieldProps) {
  const t = useTokens(theme);
  const isFilled = filled ?? text.length > 0;
  const displayText = isFilled ? text : placeholder;
  const styles = getFieldStyles(t, status, isFilled);
  const typo = typography.body.md;

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: t.layoutSpacing.xsm,
        height: 40,
        paddingLeft: t.layoutSpacing.xsm,
        paddingRight: t.layoutSpacing.xsm,
        paddingTop: t.borderWidth.lg,
        paddingBottom: t.borderWidth.lg,
        width: 250,
        backgroundColor: styles.backgroundColor,
        border: `${t.borderWidth.sm}px solid ${styles.borderColor}`,
        borderRadius: t.borderRadius[200],
        boxSizing: 'border-box',
      }}
    >
      {status === 'focus' && (
        <div
          style={{
            position: 'absolute',
            inset: -(3 + t.borderWidth.sm),
            border: `${t.borderWidth.sm}px solid ${t.border.primary.focus}`,
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

      <span
        style={{
          flex: '1 0 0',
          minWidth: 0,
          fontFamily: typo.fontFamily,
          fontSize: typo.fontSize,
          fontWeight: typo.fontWeight,
          lineHeight: typo.lineHeight,
          letterSpacing: typo.letterSpacing,
          color: styles.textColor,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {displayText}
      </span>

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
