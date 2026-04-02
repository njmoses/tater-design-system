import { ChevronRight, ChevronDown } from 'react-coolicons';
import { useTokens } from '@/tokens';
import type { Theme } from '@/tokens';

export interface TreeIndicatorProps {
  status: 'default' | 'hover';
  open: boolean;
  theme?: Theme;
}

export function TreeIndicator({ status, open, theme = 'light' }: TreeIndicatorProps) {
  const t = useTokens(theme);
  const isHover = status === 'hover';
  const iconColor = isHover ? t.icon.default.regular : t.icon.default.subtle;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: `${t.layoutSpacing['2xsm']}px`,
        borderRadius: t.borderRadius.round,
        backgroundColor: isHover ? t.surface.primary.defaultSubtleHover : 'transparent',
        flexShrink: 0,
      }}
    >
      {open
        ? <ChevronDown width={16} height={16} color={iconColor} />
        : <ChevronRight width={16} height={16} color={iconColor} />
      }
    </div>
  );
}
