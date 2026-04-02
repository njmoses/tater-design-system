import { useTokens } from '@/tokens';
import type { Theme } from '@/tokens';

export interface BarProps {
  size: 'sm' | 'md' | 'lg';
  progress: number;
  theme?: Theme;
}

const heightMap: Record<BarProps['size'], number> = {
  sm: 4,
  md: 8,
  lg: 12,
};

export function Bar({ size, progress, theme = 'light' }: BarProps) {
  const t = useTokens(theme);
  const height = heightMap[size];
  const fill = Math.min(100, Math.max(0, progress));

  return (
    <div
      style={{
        width: '100%',
        height,
        borderRadius: t.borderRadius.round,
        backgroundColor: t.surface.disabled.default,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${fill}%`,
          height: '100%',
          borderRadius: t.borderRadius.round,
          backgroundColor: t.surface.primary.default,
        }}
      />
    </div>
  );
}
