import React from 'react';
import { alias } from '@/tokens';
import type { Theme } from '@/tokens';

export interface LoaderProps {
  /** Visual style — primary uses brand purple, secondary uses neutral grey */
  type?: 'primary' | 'secondary';
  /** Overall diameter of the loader */
  size?: 'xSmall' | 'small' | 'medium' | 'large';
  /** Visual theme */
  theme?: Theme;
}

const SIZE_MAP: Record<NonNullable<LoaderProps['size']>, number> = {
  xSmall: 16,
  small:  24,
  medium: 32,
  large:  40,
};

const COLOR_MAP: Record<NonNullable<LoaderProps['type']>, string> = {
  primary:   alias.primary[500],
  secondary: alias.neutral[400],
};

/** Opacity for each dot (index 0 = top/12 o'clock, going clockwise).
 *  Leading dot (0) is full opacity; trailing dots fade progressively. */
const DOT_OPACITIES = [1, 0.83, 0.66, 0.5, 0.33, 0.16];

const DOT_COUNT      = 6;
const RADIUS_FACTOR  = 0.36; // fraction of container diameter
const DOT_SIZE_FACTOR = 0.20; // fraction of container diameter

const KEYFRAMES = `
@keyframes portsmith-loader-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
`;

function getDotStyle(
  index: number,
  containerSize: number,
  color: string,
): React.CSSProperties {
  const angleDeg = (index * 360) / DOT_COUNT;
  const angleRad = (angleDeg * Math.PI) / 180;
  const radius   = containerSize * RADIUS_FACTOR;
  const dotSize  = containerSize * DOT_SIZE_FACTOR;
  const centre   = containerSize / 2;

  const left = centre + radius * Math.sin(angleRad) - dotSize / 2;
  const top  = centre - radius * Math.cos(angleRad) - dotSize / 2;

  return {
    position: 'absolute',
    left:            `${left}px`,
    top:             `${top}px`,
    width:           `${dotSize}px`,
    height:          `${dotSize}px`,
    borderRadius:    '50%',
    backgroundColor: color,
    opacity:         DOT_OPACITIES[index],
  };
}

export function Loader({
  type  = 'primary',
  size  = 'medium',
  theme: _theme = 'light',
}: LoaderProps) {
  const containerSize = SIZE_MAP[size];
  const color         = COLOR_MAP[type];

  return (
    <>
      <style>{KEYFRAMES}</style>
      <div
        style={{
          position: 'relative',
          width:    `${containerSize}px`,
          height:   `${containerSize}px`,
          animation: 'portsmith-loader-spin 1600ms linear infinite',
          flexShrink: 0,
        }}
        role="status"
        aria-label="Loading"
      >
        {Array.from({ length: DOT_COUNT }, (_, i) => (
          <div key={i} style={getDotStyle(i, containerSize, color)} />
        ))}
      </div>
    </>
  );
}
