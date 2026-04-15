import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';
import { useState, useRef, useEffect } from 'react';

export type RadioButtonStatus = 'default' | 'hover' | 'focus' | 'disabled';

export interface RadioButtonProps {
  status?: RadioButtonStatus;
  active?: boolean;
  label: string;
  theme?: Theme;
  onChange?: (active: boolean) => void;
  onClick?: () => void;
}

const RADIO_SIZE = 26;
const DOT_SIZE = 6;

function getRadioStyles(
  t: ReturnType<typeof useTokens>,
  status: RadioButtonStatus,
  active: boolean
) {
  switch (status) {
    case 'disabled':
      return {
        backgroundColor: active ? t.surface.disabled.selected : t.surface.disabled.default,
        borderColor: t.border.disabled.default,
        dotColor: t.icon.disabled.onColor,
        showFocusRing: false,
        cursor: 'not-allowed' as const,
      };
    case 'hover':
      return {
        backgroundColor: active ? t.surface.primary.defaultHover : t.base,
        borderColor: t.border.primary.defaultHover,
        dotColor: t.icon.primary.onColor,
        showFocusRing: false,
        cursor: 'pointer' as const,
      };
    case 'focus':
      return {
        backgroundColor: active ? t.surface.primary.default : t.base,
        borderColor: t.border.primary.focus,
        dotColor: t.icon.primary.onColor,
        showFocusRing: true,
        cursor: 'pointer' as const,
      };
    default:
      return {
        backgroundColor: active ? t.surface.primary.default : t.base,
        borderColor: active ? t.border.primary.default : t.border.default.default,
        dotColor: t.icon.primary.onColor,
        showFocusRing: false,
        cursor: 'pointer' as const,
      };
  }
}

export function RadioButton({
  status = 'default',
  active = false,
  label,
  theme = 'light',
  onChange,
  onClick,
}: RadioButtonProps) {
  const t = useTokens(theme);
  const typo = typography.body.md;

  const [activeState, setActiveState] = useState(active);
  const [interactionStatus, setInteractionStatus] = useState(status);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (status === 'disabled') return;
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveState(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [status]);

  const handleMouseEnter = () => {
    if (status === 'disabled') return;
    setInteractionStatus('hover');
  };

  const handleMouseLeave = () => {
    if (status === 'disabled') return;
    setInteractionStatus(status);
  };

  const handleFocus = () => {
    if (status === 'disabled') return;
    setInteractionStatus('focus');
  };

  const handleBlur = () => {
    if (status === 'disabled') return;
    setInteractionStatus(status);
  };

  const handleClick = () => {
    if (status === 'disabled') return;
    setActiveState(true);
    onChange?.(true);
    onClick?.();
  };

  const styles = getRadioStyles(t, interactionStatus, activeState);

  return (
    <div
      ref={containerRef}
      tabIndex={status === 'disabled' ? -1 : 0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${t.borderRadius[300]}px`,
        cursor: styles.cursor,
        outline: 'none',
      }}
    >
      <div
        style={{
          position: 'relative',
          flexShrink: 0,
          width: RADIO_SIZE,
          height: RADIO_SIZE,
          backgroundColor: styles.backgroundColor,
          border: `${t.borderWidth.sm}px solid ${styles.borderColor}`,
          borderRadius: `${t.borderRadius[600]}px`,
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
              borderRadius: `${t.borderRadius[600]}px`,
              pointerEvents: 'none',
            }}
          />
        )}

        {activeState && (
          <div
            style={{
              width: DOT_SIZE,
              height: DOT_SIZE,
              backgroundColor: styles.dotColor,
              borderRadius: `${t.borderRadius[600]}px`,
              flexShrink: 0,
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
          color: status === 'disabled' ? t.text.disabled.default : t.text.default.body,
        }}
      >
        {label}
      </span>
    </div>
  );
}
