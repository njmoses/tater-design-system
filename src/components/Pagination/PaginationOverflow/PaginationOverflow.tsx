import { useState } from 'react';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export interface PaginationOverflowProps {
  status: 'default' | 'hover' | 'focus' | 'disabled';
  onClick?: () => void;
  theme?: Theme;
}

export function PaginationOverflow({
  status,
  onClick,
  theme = 'light',
}: PaginationOverflowProps) {
  const t = useTokens(theme);
  const [interactionStatus, setInteractionStatus] = useState(status);
  const typo = typography.body.mdSemibold;

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
    onClick?.();
  };

  let backgroundColor: string;
  let textColor: string;

  if (interactionStatus === 'disabled') {
    backgroundColor = t.surface.disabled.default;
    textColor = t.text.disabled.default;
  } else if (interactionStatus === 'hover') {
    backgroundColor = t.surface.primary.defaultSubtleHover;
    textColor = t.text.primary.defaultHover;
  } else {
    backgroundColor = t.base;
    textColor = t.text.primary.default;
  }

  return (
    <div
      role="button"
      tabIndex={status === 'disabled' ? -1 : 0}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: `${t.borderRadius[200]}px`,
        backgroundColor,
        boxSizing: 'border-box',
        flexShrink: 0,
        cursor: status === 'disabled' ? 'not-allowed' : 'pointer',
        outline: 'none',
      }}
    >
      {interactionStatus === 'focus' && (
        <div
          style={{
            position: 'absolute',
            inset: -3,
            border: `${t.borderWidth.xs}px solid ${t.border.primary.default}`,
            borderRadius: `${t.borderRadius[300]}px`,
            pointerEvents: 'none',
          }}
        />
      )}
      <span
        style={{
          fontFamily: typo.fontFamily,
          fontSize: `${typo.fontSize}px`,
          fontWeight: typo.fontWeight,
          lineHeight: `${typo.lineHeight}px`,
          letterSpacing: typo.letterSpacing,
          color: textColor,
        }}
      >
        •••
      </span>
    </div>
  );
}
