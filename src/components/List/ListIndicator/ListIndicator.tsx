import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export interface ListIndicatorProps {
  type: 'process' | 'icon';
  value?: string;
  icon?: React.ComponentType<{ width?: number; height?: number; color?: string }>;
  theme?: Theme;
}

export function ListIndicator({
  type,
  value = '1',
  icon: Icon,
  theme = 'light',
}: ListIndicatorProps) {
  const t = useTokens(theme);

  return (
    <div
      style={{
        width: 24,
        height: 24,
        flexShrink: 0,
        borderRadius: t.borderRadius.round,
        backgroundColor: t.surface.primary.defaultSubtle,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {type === 'process' && (
        <span
          style={{
            ...typography.label.primary,
            fontSize: typography.label.primary.fontSize,
            lineHeight: `${typography.label.primary.lineHeight}px`,
            color: t.text.primary.default,
            whiteSpace: 'nowrap',
          }}
        >
          {value}
        </span>
      )}
      {type === 'icon' && Icon && (
        <Icon width={16} height={16} color={t.icon.primary.default} />
      )}
    </div>
  );
}
