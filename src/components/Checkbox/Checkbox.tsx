import { Check } from 'react-coolicons';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export type CheckboxState = 'default' | 'hover' | 'focus' | 'disabled' | 'error';
export type CheckboxStatus = 'default' | 'selected' | 'intermediate';

export interface CheckboxProps {
  state?: CheckboxState;
  status?: CheckboxStatus;
  label: string;
  theme?: Theme;
}

const CHECKBOX_SIZE = 24;
const ICON_SIZE = 16;

function getBoxStyles(
  t: ReturnType<typeof useTokens>,
  state: CheckboxState,
  status: CheckboxStatus
) {
  const isChecked = status === 'selected' || status === 'intermediate';

  switch (state) {
    case 'disabled':
      return {
        backgroundColor: isChecked ? t.surface.disabled.selected : t.surface.disabled.default,
        borderColor: t.border.disabled.default,
        iconColor: t.icon.disabled.onColor,
        showFocusRing: false,
        cursor: 'not-allowed' as const,
      };
    case 'error':
      return {
        backgroundColor: isChecked ? t.surface.error.default : 'transparent',
        borderColor: t.border.error.default,
        iconColor: t.icon.primary.onColor,
        showFocusRing: false,
        cursor: 'pointer' as const,
      };
    case 'hover':
      return {
        backgroundColor: isChecked ? t.surface.primary.defaultHover : 'transparent',
        borderColor: t.border.primary.defaultHover,
        iconColor: t.icon.primary.onColor,
        showFocusRing: false,
        cursor: 'pointer' as const,
      };
    case 'focus':
      return {
        backgroundColor: isChecked ? t.surface.primary.default : 'transparent',
        borderColor: t.border.primary.focus,
        iconColor: t.icon.primary.onColor,
        showFocusRing: true,
        cursor: 'pointer' as const,
      };
    default:
      return {
        backgroundColor: isChecked ? t.surface.primary.default : 'transparent',
        borderColor: isChecked ? t.border.primary.default : t.border.default.default,
        iconColor: t.icon.primary.onColor,
        showFocusRing: false,
        cursor: 'pointer' as const,
      };
  }
}

export function Checkbox({
  state = 'default',
  status = 'default',
  label,
  theme = 'light',
}: CheckboxProps) {
  const t = useTokens(theme);
  const styles = getBoxStyles(t, state, status);
  const typo = typography.body.md;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${t.borderRadius[300]}px`,
        cursor: styles.cursor,
      }}
    >
      <div
        style={{
          position: 'relative',
          flexShrink: 0,
          width: CHECKBOX_SIZE,
          height: CHECKBOX_SIZE,
          backgroundColor: styles.backgroundColor,
          border: `${t.borderWidth.sm}px solid ${styles.borderColor}`,
          borderRadius: `${t.borderRadius[100]}px`,
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {styles.showFocusRing && (
          <div
            style={{
              position: 'absolute',
              inset: -(3 + t.borderWidth.sm),
              border: `${t.borderWidth.sm}px solid ${t.border.primary.focus}`,
              borderRadius: `${t.borderRadius[200]}px`,
              pointerEvents: 'none',
            }}
          />
        )}

        {status === 'selected' && (
          <Check
            width={ICON_SIZE}
            height={ICON_SIZE}
            color={styles.iconColor}
          />
        )}

        {status === 'intermediate' && (
          <div
            style={{
              width: 12,
              height: `${t.borderWidth.sm}px`,
              backgroundColor: styles.iconColor,
              borderRadius: `${t.borderRadius[100]}px`,
            }}
          />
        )}
      </div>

      <span
        style={{
          fontFamily: typo.fontFamily,
          fontSize: `${typo.fontSize}px`,
          fontWeight: typo.fontWeight,
          lineHeight: `${typo.lineHeight}px`,
          letterSpacing: typo.letterSpacing,
          color: state === 'disabled' ? t.text.disabled.default : t.text.default.body,
        }}
      >
        {label}
      </span>
    </div>
  );
}
