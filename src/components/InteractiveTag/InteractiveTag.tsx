import { AddPlus, CloseSm } from 'react-coolicons';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export interface InteractiveTagProps {
  /** The tag label text */
  label: string;
  /** Whether the tag is in its selected (filled) state */
  selected?: boolean;
  /** Visual interaction state */
  state?: 'default' | 'hover' | 'focus' | 'disabled';
  /** Called when the unselected tag is clicked */
  onSelect?: () => void;
  /** Called when the selected tag's close icon is clicked */
  onDeselect?: () => void;
  /** Visual theme */
  theme?: Theme;
}

export function InteractiveTag({
  label,
  selected = false,
  state = 'default',
  onSelect,
  onDeselect,
  theme = 'light',
}: InteractiveTagProps) {
  const t = useTokens(theme);
  const isDisabled = state === 'disabled';
  const isHover = state === 'hover';
  const isFocus = state === 'focus';

  // ── Background ───────────────────────────────────────────────────────────
  let backgroundColor: string;
  if (isDisabled) {
    backgroundColor = t.surface.disabled.default;
  } else if (selected) {
    backgroundColor = isHover
      ? t.surface.primary.defaultHover
      : t.surface.primary.default;
  } else {
    backgroundColor = isHover
      ? t.surface.primary.defaultSubtle
      : t.base;
  }

  // ── Border ───────────────────────────────────────────────────────────────
  const borderColor = isDisabled
    ? t.border.disabled.default
    : t.border.primary.default;
  const borderStyle = isDisabled || selected ? 'solid' : 'dashed';

  // ── Text & icon colours ───────────────────────────────────────────────────
  let textColor: string;
  let iconColor: string;
  if (isDisabled) {
    textColor = t.text.disabled.default;
    iconColor = t.icon.disabled.default;
  } else if (selected) {
    textColor = t.text.primary.onColor;
    iconColor = t.icon.primary.onColor;
  } else {
    textColor = t.text.primary.default;
    iconColor = t.icon.primary.default;
  }

  // ── Padding: unselected → left narrow / right wide; selected → reversed ──
  const paddingLeft = selected
    ? `${t.layoutSpacing.xsm}px`
    : `${t.layoutSpacing['2xsm']}px`;
  const paddingRight = selected
    ? `${t.layoutSpacing['2xsm']}px`
    : `${t.layoutSpacing.xsm}px`;

  const handleClick = () => {
    if (isDisabled) return;
    if (selected) onDeselect?.();
    else onSelect?.();
  };

  return (
    <div
      onClick={handleClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${t.layoutSpacing['2xsm']}px`,
        paddingTop: `${t.layoutSpacing['2xsm']}px`,
        paddingBottom: `${t.layoutSpacing['2xsm']}px`,
        paddingLeft,
        paddingRight,
        backgroundColor,
        border: `${t.borderWidth.xs}px ${borderStyle} ${borderColor}`,
        borderRadius: `${t.borderRadius[200]}px`,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        outline: isFocus ? `2px solid ${t.border.primary.focus}` : 'none',
        outlineOffset: isFocus ? '2px' : undefined,
        boxSizing: 'border-box',
        userSelect: 'none',
      }}
    >
      {!selected && (
        <AddPlus width={24} height={24} color={iconColor} />
      )}

      <span
        style={{
          fontFamily: typography.body.md.fontFamily,
          fontSize: `${typography.body.md.fontSize}px`,
          fontWeight: typography.body.md.fontWeight,
          lineHeight: `${typography.body.md.lineHeight}px`,
          letterSpacing: typography.body.md.letterSpacing,
          color: textColor,
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>

      {selected && (
        <CloseSm width={24} height={24} color={iconColor} />
      )}
    </div>
  );
}
