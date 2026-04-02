import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';
import { ListIndicator } from '../ListIndicator';

export interface ListItemProps {
  indicatorType: 'process' | 'icon';
  indicatorValue?: string;
  indicatorIcon?: React.ComponentType<{ width?: number; height?: number; color?: string }>;
  title: string;
  showTitle?: boolean;
  description: string;
  showDescription?: boolean;
  theme?: Theme;
}

export function ListItem({
  indicatorType,
  indicatorValue,
  indicatorIcon,
  title,
  showTitle = true,
  description,
  showDescription = true,
  theme = 'light',
}: ListItemProps) {
  const t = useTokens(theme);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: `${t.layoutSpacing.sm}px`,
      }}
    >
      <ListIndicator
        type={indicatorType}
        value={indicatorValue}
        icon={indicatorIcon}
        theme={theme}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: `${t.layoutSpacing['2xsm']}px`,
        }}
      >
        {showTitle && (
          <p
            style={{
              margin: 0,
              ...typography.heading.h6,
              fontSize: typography.heading.h6.fontSize,
              lineHeight: `${typography.heading.h6.lineHeight}px`,
              color: t.text.default.heading,
            }}
          >
            {title}
          </p>
        )}
        {showDescription && (
          <p
            style={{
              margin: 0,
              ...typography.body.md,
              fontSize: typography.body.md.fontSize,
              lineHeight: `${typography.body.md.lineHeight}px`,
              color: t.text.default.body,
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
