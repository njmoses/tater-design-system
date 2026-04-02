import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';
import { Bar } from '../Bar';

export interface ProgressBarProps {
  size: 'sm' | 'md' | 'lg';
  progress: number;
  label?: string;
  showLabel?: boolean;
  theme?: Theme;
}

export function ProgressBar({
  size,
  progress,
  label = 'Completion: 80%',
  showLabel = true,
  theme = 'light',
}: ProgressBarProps) {
  const t = useTokens(theme);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: `${t.layoutSpacing.xsm}px`,
        width: '100%',
      }}
    >
      {showLabel && (
        <span
          style={{
            ...typography.body.md,
            fontSize: typography.body.md.fontSize,
            lineHeight: `${typography.body.md.lineHeight}px`,
            color: t.text.primary.default,
          }}
        >
          {label}
        </span>
      )}
      <Bar size={size} progress={progress} theme={theme} />
    </div>
  );
}
