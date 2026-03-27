import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export type IconComponent = React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>;

// 'focus' maps to the "selected" visual state in the Figma design
export type ButtonGroupStatus = 'default' | 'hover' | 'focus' | 'disabled';

export interface ButtonGroupProps {
  status?: ButtonGroupStatus;
  showLabel?: boolean;
  label?: string;
  showLeadingIcon?: boolean;
  leadingIcon?: IconComponent;
  theme?: Theme;
}

const ICON_SIZE = 24;
const ITEM_COUNT = 4;

function getItemStyles(
  t: ReturnType<typeof useTokens>,
  status: ButtonGroupStatus
) {
  switch (status) {
    case 'hover':
      return {
        backgroundColor: t.surface.primary.defaultSubtleHover,
        dividerColor:    t.border.primary.defaultHover,
        textColor:       t.text.primary.defaultHover,
        iconColor:       t.icon.primary.defaultHover,
      };
    case 'focus': // "selected" in Figma — filled primary background
      return {
        backgroundColor: t.surface.primary.default,
        dividerColor:    t.border.primary.default,
        textColor:       t.text.primary.onColor,
        iconColor:       t.icon.primary.onColor,
      };
    case 'disabled':
      return {
        backgroundColor: t.surface.disabled.default,
        dividerColor:    t.border.disabled.default,
        textColor:       t.text.disabled.default,
        iconColor:       t.icon.disabled.default,
      };
    default:
      return {
        backgroundColor: 'transparent',
        dividerColor:    t.border.primary.default,
        textColor:       t.text.primary.default,
        iconColor:       t.icon.primary.default,
      };
  }
}

function getContainerBorderColor(
  t: ReturnType<typeof useTokens>,
  status: ButtonGroupStatus
): string {
  if (status === 'disabled') return t.border.disabled.default;
  if (status === 'hover') return t.border.primary.defaultHover;
  return t.border.primary.default;
}

interface ButtonGroupItemProps {
  t: ReturnType<typeof useTokens>;
  styles: ReturnType<typeof getItemStyles>;
  showLabel: boolean;
  label: string;
  showLeadingIcon: boolean;
  leadingIcon?: IconComponent;
}

function ButtonGroupItem({
  t,
  styles,
  showLabel,
  label,
  showLeadingIcon,
  leadingIcon,
}: ButtonGroupItemProps) {
  const typo = typography.body.md;
  const LeadingIcon = leadingIcon;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: `${t.borderRadius[300]}px`,
        height: 48,
        paddingTop: `${t.borderRadius[300]}px`,
        paddingBottom: `${t.borderRadius[300]}px`,
        paddingLeft: `${t.layoutSpacing.sm}px`,
        paddingRight: `${t.layoutSpacing.sm}px`,
        backgroundColor: styles.backgroundColor,
        // Right border acts as the divider; last item's border is clipped by overflow:hidden
        borderRight: `${t.borderWidth.sm}px solid ${styles.dividerColor}`,
        boxSizing: 'border-box',
        flexShrink: 0,
      }}
    >
      {showLeadingIcon && LeadingIcon && (
        <span style={{ flexShrink: 0, display: 'flex' }}>
          <LeadingIcon width={ICON_SIZE} height={ICON_SIZE} color={styles.iconColor} />
        </span>
      )}
      {showLabel && (
        <span
          style={{
            fontFamily: typo.fontFamily,
            fontSize: `${typo.fontSize}px`,
            fontWeight: typo.fontWeight,
            lineHeight: `${typo.lineHeight}px`,
            letterSpacing: typo.letterSpacing,
            color: styles.textColor,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

export function ButtonGroup({
  status = 'default',
  showLabel = true,
  label = 'Button Group',
  showLeadingIcon = true,
  leadingIcon,
  theme = 'light',
}: ButtonGroupProps) {
  const t = useTokens(theme);
  const styles = getItemStyles(t, status);
  const containerBorderColor = getContainerBorderColor(t, status);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        border: `${t.borderWidth.sm}px solid ${containerBorderColor}`,
        borderRadius: `${t.borderRadius[300]}px`,
        overflow: 'hidden',
        cursor: status === 'disabled' ? 'not-allowed' : 'pointer',
      }}
    >
      {Array.from({ length: ITEM_COUNT }).map((_, i) => (
        <ButtonGroupItem
          key={i}
          t={t}
          styles={styles}
          showLabel={showLabel}
          label={label}
          showLeadingIcon={showLeadingIcon}
          leadingIcon={leadingIcon}
        />
      ))}
    </div>
  );
}
