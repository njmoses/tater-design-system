import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';
import { ListItem } from './ListItem';

export interface ListItemConfig {
  indicatorType: 'process' | 'icon';
  indicatorValue?: string;
  indicatorIcon?: React.ComponentType<{ width?: number; height?: number; color?: string }>;
  title: string;
  showTitle?: boolean;
  description: string;
  showDescription?: boolean;
}

export interface ListProps {
  heading?: string;
  showHeading?: boolean;
  items: ListItemConfig[];
  theme?: Theme;
}

export function List({
  heading = 'Heading',
  showHeading = true,
  items,
  theme = 'light',
}: ListProps) {
  const t = useTokens(theme);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      {showHeading && (
        <p
          style={{
            margin: 0,
            marginBottom: `${t.layoutSpacing.md}px`,
            ...typography.heading.h4,
            fontSize: typography.heading.h4.fontSize,
            lineHeight: `${typography.heading.h4.lineHeight}px`,
            color: t.text.default.heading,
          }}
        >
          {heading}
        </p>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: `${t.layoutSpacing.sm}px`,
          width: '100%',
        }}
      >
        {items.map((item, index) => (
          <ListItem
            key={index}
            indicatorType={item.indicatorType}
            indicatorValue={
              item.indicatorType === 'process'
                ? (item.indicatorValue ?? String(index + 1))
                : item.indicatorValue
            }
            indicatorIcon={item.indicatorIcon}
            title={item.title}
            showTitle={item.showTitle}
            description={item.description}
            showDescription={item.showDescription}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
}
