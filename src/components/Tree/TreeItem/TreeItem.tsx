import { Folder } from 'react-coolicons';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';
import { TreeIndicator } from '../TreeIndicator';

export interface TreeItemProps {
  status: 'default' | 'hover' | 'focus';
  selected: boolean;
  level: '01' | '02' | '03';
  label: string;
  showIcon: boolean;
  open?: boolean;
  theme?: Theme;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}


export function TreeItem({
  status,
  selected,
  level,
  label,
  showIcon,
  open = false,
  theme = 'light',
  onClick,
  onMouseEnter,
  onMouseLeave,
}: TreeItemProps) {
  const t = useTokens(theme);

  // Background and text colour
  let backgroundColor: string;
  let textColor: string;

  if (selected) {
    backgroundColor = 'transparent';
    textColor = status === 'hover' ? t.text.primary.defaultHover : t.text.primary.default;
  } else if (status === 'focus') {
    backgroundColor = t.surface.primary.defaultSubtle;
    textColor = t.text.primary.default;
  } else if (status === 'hover') {
    backgroundColor = 'transparent';
    textColor = t.text.primary.defaultHover;
  } else {
    backgroundColor = 'transparent';
    textColor = t.text.default.body;
  }

  // Left padding by level
  const paddingLeftMap: Record<TreeItemProps['level'], number> = {
    '01': t.layoutSpacing.none,
    '02': t.layoutSpacing.lg,
    '03': t.layoutSpacing['2xlg'],
  };
  const paddingLeft = paddingLeftMap[level];

  const paddingV = level === '03' ? t.layoutSpacing.xsm : t.layoutSpacing['2xsm'];

  const iconColor = selected
    ? (status === 'hover' ? t.icon.primary.defaultHover : t.icon.primary.default)
    : t.icon.default.regular;

  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${t.layoutSpacing['2xsm']}px`,
        paddingTop: `${paddingV}px`,
        paddingBottom: `${paddingV}px`,
        gap: `${t.layoutSpacing.xsm}px`,
        backgroundColor,
        outline: status === 'focus'
          ? `${t.borderWidth.xs}px solid ${t.border.primary.focus}`
          : 'none',
        outlineOffset: '2px',
        borderRadius: status === 'focus' ? t.borderRadius[100] : undefined,
        boxSizing: 'border-box',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      {/* Indicator — only for level 01 and 02 */}
      {level !== '03' && (
        <TreeIndicator
          status={status === 'focus' ? 'default' : status}
          open={open}
          theme={theme}
        />
      )}

      {/* Icon + label */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: `${t.layoutSpacing['2xsm']}px`,
        }}
      >
        {showIcon && (
          <Folder width={16} height={16} color={iconColor} />
        )}
        <span
          style={{
            ...typography.body.md,
            fontSize: typography.body.md.fontSize,
            lineHeight: `${typography.body.md.lineHeight}px`,
            color: textColor,
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
