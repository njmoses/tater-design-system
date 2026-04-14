import { Check } from 'react-coolicons';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';
import { useState, useRef } from 'react';

export type CheckboxState = 'default' | 'hover' | 'focus' | 'disabled' | 'error';
export type CheckboxStatus = 'default' | 'selected' | 'intermediate';

export interface CheckboxProps {
  state?: CheckboxState;
  status?: CheckboxStatus;
  label: string;
  theme?: Theme;
  onChange?: (selected: boolean) => void;
  onClick?: () => void;
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
  onChange,
  onClick,
}: CheckboxProps) {
  const t = useTokens(theme);
  const typo = typography.body.md;

  const [checkState, setCheckState] = useState<CheckboxStatus>(status);
  const [interactionStatus, setInteractionStatus] = useState<CheckboxState>(state);

  const containerRef = useRef<HTMLDivElement>(null);

  const styles = getBoxStyles(t, interactionStatus, checkState);

  const handleMouseEnter = () => {
    if (state === 'disabled') return;
    setInteractionStatus('hover');
  };

  const handleMouseLeave = () => {
    if (state === 'disabled') return;
    setInteractionStatus(state);
  };

  const handleFocus = () => {
    if (state === 'disabled') return;
    setInteractionStatus('focus');
  };

  const handleBlur = () => {
    if (state === 'disabled') return;
    setInteractionStatus(state);
  };

  const handleClick = () => {
    if (state === 'disabled') return;
    onClick?.();
    const next: CheckboxStatus = checkState === 'selected' ? 'default' : 'selected';
    setCheckState(next);
    onChange?.(next === 'selected');
  };

  return (
    <div
      ref={containerRef}
      tabIndex={state === 'disabled' ? -1 : 0}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${t.borderRadius[300]}px`,
        cursor: styles.cursor,
        outline: 'none',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
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

        {checkState === 'selected' && (
          <Check
            width={ICON_SIZE}
            height={ICON_SIZE}
            color={styles.iconColor}
          />
        )}

        {checkState === 'intermediate' && (
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
