import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export interface ProgressCircleProps {
  size: 'sm' | 'md' | 'lg';
  progress: number;
  showPercentage?: boolean;
  theme?: Theme;
}

interface SizeConfig {
  diameter: number;
  strokeWidth: number;
  labelStyle: typeof typography.body.sm | typeof typography.body.md | typeof typography.heading.h4;
}

const sizeConfig: Record<ProgressCircleProps['size'], SizeConfig> = {
  sm: { diameter: 64,  strokeWidth: 4, labelStyle: typography.body.sm },
  md: { diameter: 96,  strokeWidth: 6, labelStyle: typography.body.md },
  lg: { diameter: 128, strokeWidth: 8, labelStyle: typography.heading.h4 },
};

export function ProgressCircle({
  size,
  progress,
  showPercentage = true,
  theme = 'light',
}: ProgressCircleProps) {
  const t = useTokens(theme);
  const { diameter, strokeWidth, labelStyle } = sizeConfig[size];

  const fill = Math.min(100, Math.max(0, progress));
  const radius = (diameter - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - fill / 100);
  const center = diameter / 2;

  return (
    <div
      style={{
        position: 'relative',
        width: diameter,
        height: diameter,
        flexShrink: 0,
      }}
    >
      <svg
        width={diameter}
        height={diameter}
        viewBox={`0 0 ${diameter} ${diameter}`}
        style={{ display: 'block' }}
      >
        {/* Track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={t.surface.disabled.default}
          strokeWidth={strokeWidth}
        />
        {/* Progress arc — starts from top via rotate(-90deg) */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={t.surface.primary.default}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>

      {/* Percentage label */}
      {showPercentage && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              ...labelStyle,
              fontSize: labelStyle.fontSize,
              lineHeight: `${labelStyle.lineHeight}px`,
              color: t.text.primary.default,
              textAlign: 'center',
            }}
          >
            {fill}%
          </span>
        </div>
      )}
    </div>
  );
}
