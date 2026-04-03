import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-coolicons';
import { useTokens } from '@/tokens';
import type { Theme } from '@/tokens';

export type CarouselArrowStatus = 'default' | 'hover' | 'focus' | 'disabled';
export type CarouselArrowDirection = 'left' | 'right';

export interface CarouselArrowProps {
  status?: CarouselArrowStatus;
  direction: CarouselArrowDirection;
  onClick?: () => void;
  theme?: Theme;
}

const ICON_SIZE = 20;
const BUTTON_SIZE = 40;

function getArrowStyles(
  t: ReturnType<typeof useTokens>,
  status: CarouselArrowStatus
) {
  switch (status) {
    case 'hover':
      return {
        borderColor: t.border.primary.defaultHover,
        iconColor: t.icon.primary.defaultHover,
        backgroundColor: t.surface.primary.defaultSubtle,
      };
    case 'focus':
      return {
        borderColor: t.border.primary.focus,
        iconColor: t.icon.primary.default,
        backgroundColor: t.surface.primary.defaultSubtle,
      };
    case 'disabled':
      return {
        borderColor: t.border.disabled.default,
        iconColor: t.icon.disabled.default,
        backgroundColor: 'transparent',
      };
    default:
      return {
        borderColor: t.border.primary.default,
        iconColor: t.icon.primary.default,
        backgroundColor: 'transparent',
      };
  }
}

export function CarouselArrow({
  status = 'default',
  direction,
  onClick,
  theme = 'light',
}: CarouselArrowProps) {
  const t = useTokens(theme);
  const styles = getArrowStyles(t, status);
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;

  const handleClick = () => {
    if (status !== 'disabled' && onClick) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `${BUTTON_SIZE}px`,
        height: `${BUTTON_SIZE}px`,
        borderRadius: `${t.borderRadius.round}px`,
        border: `${t.borderWidth.sm}px solid ${styles.borderColor}`,
        backgroundColor: styles.backgroundColor,
        cursor: status === 'disabled' ? 'not-allowed' : 'pointer',
        boxSizing: 'border-box',
        flexShrink: 0,
      }}
    >
      <Icon width={ICON_SIZE} height={ICON_SIZE} color={styles.iconColor} />
    </div>
  );
}
