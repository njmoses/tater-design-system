import { useTokens } from '@/tokens';
import type { Theme } from '@/tokens';
import { useState } from 'react';
import { TabItem } from './TabItem/TabItem';
import type { TabStatus, IconComponent } from './TabItem/TabItem';

export type { TabStatus, IconComponent };

export interface TabItemConfig {
  id: string;
  label: string;
  status?: TabStatus;
  showLeadingIcon?: boolean;
  leadingIcon?: IconComponent;
  showTrailingIcon?: boolean;
  trailingIcon?: IconComponent;
}

export interface TabProps {
  items: TabItemConfig[];
  defaultActiveId?: string;
  onTabChange?: (id: string) => void;
  theme?: Theme;
}

export function Tab({
  items,
  defaultActiveId,
  onTabChange,
  theme = 'light',
}: TabProps) {
  const t = useTokens(theme);

  const firstEnabled = items.find((item) => item.status !== 'disabled');
  const [activeId, setActiveId] = useState<string>(
    defaultActiveId ?? firstEnabled?.id ?? ''
  );

  const handleTabClick = (id: string) => {
    setActiveId(id);
    onTabChange?.(id);
  };

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex' }}>
        {items.map((item) => (
          <TabItem
            key={item.id}
            status={item.status}
            active={item.id === activeId}
            label={item.label}
            showLeadingIcon={item.showLeadingIcon}
            leadingIcon={item.leadingIcon}
            showTrailingIcon={item.showTrailingIcon}
            trailingIcon={item.trailingIcon}
            theme={theme}
            onClick={() => handleTabClick(item.id)}
          />
        ))}
      </div>
      {/* Keyline */}
      <div
        style={{
          height: t.borderWidth.xs,
          backgroundColor: t.border.default.default,
          width: '100%',
        }}
      />
    </div>
  );
}
