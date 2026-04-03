import React from 'react';
import { useTokens } from '@/tokens';
import type { Theme } from '@/tokens';

export type CarouselIndicatorState = 'active' | 'inactive';

export interface CarouselIndicatorProps {
  state?: CarouselIndicatorState;
  theme?: Theme;
}

export function CarouselIndicator({
  state = 'inactive',
  theme = 'light',
}: CarouselIndicatorProps) {
  const t = useTokens(theme);
  const isActive = state === 'active';

  return (
    <div
      style={{
        width: isActive ? '24px' : '8px',
        height: '8px',
        borderRadius: `${t.borderRadius.round}px`,
        backgroundColor: isActive
          ? t.surface.primary.default
          : t.surface.disabled.selected,
        transition: 'width 0.3s ease',
        flexShrink: 0,
      }}
    />
  );
}
