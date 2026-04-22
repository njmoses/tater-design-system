import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-coolicons';
import { useTokens } from '@/tokens';
import type { Theme } from '@/tokens';

export interface PaginationArrowProps {
  status: 'default' | 'hover' | 'focus' | 'disabled';
  type: 'next' | 'previous';
  onClick?: () => void;
  theme?: Theme;
}

export function PaginationArrow({
  status,
  type,
  onClick,
  theme = 'light',
}: PaginationArrowProps) {
  const t = useTokens(theme);
  const [interactionStatus, setInteractionStatus] = useState(status);

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
  let iconColor: string;

  if (interactionStatus === 'disabled') {
    backgroundColor = t.surface.disabled.default;
    iconColor = t.icon.disabled.default;
  } else if (interactionStatus === 'hover') {
    backgroundColor = t.surface.primary.defaultSubtleHover;
    iconColor = t.icon.primary.defaultHover;
  } else {
    backgroundColor = t.base;
    iconColor = t.icon.primary.default;
  }

  const Icon = type === 'next' ? ChevronRight : ChevronLeft;

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
      <Icon width={24} height={24} color={iconColor} />
    </div>
  );
}
