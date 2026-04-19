import { useState } from 'react';
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
  /** Called when selected state toggles — receives the new boolean value */
  onSelect?: (selected: boolean) => void;
  /** Visual theme */
  theme?: Theme;
}

export function InteractiveTag({
  label,
  selected = false,
  state = 'default',
  onSelect,
  theme = 'light',
}: InteractiveTagProps) {
  const [selectedState, setSelectedState] = useState(selected);
  const [interactionStatus, setInteractionStatus] = useState(state);
  const t = useTokens(theme);

  const isDisabled = state === 'disabled';
  const isHover = interactionStatus === 'hover';
  const isFocus = interactionStatus === 'focus';

  const handleMouseEnter = () => {
    if (state === 'disabled') return;
    setInteractionStatus('hover');
  };

  const handleMouseLeave = () => {
    if (state === 'disabled') return;
    setInteractionStatus(state);
  };

  const handleFocus = () => {
    if (state === 'disabled') return;
    setInteractionStatus('focus');
  };

  const handleBlur = () => {
    if (state === 'disabled') return;
    setInteractionStatus(state);
  };

  const handleClick = () => {
    if (state === 'disabled') return;
    const next = !selectedState;
    setSelectedState(next);
    onSelect?.(next);
  };

  // ── Background ───────────────────────────────────────────────────────────
  let backgroundColor: string;
  if (isDisabled) {
    backgroundColor = t.surface.disabled.default;
  } else if (selectedState) {
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
  const borderStyle = isDisabled || selectedState ? 'solid' : 'dashed';

  // ── Text & icon colours ───────────────────────────────────────────────────
  let textColor: string;
  let iconColor: string;
  if (isDisabled) {
    textColor = t.text.disabled.default;
    iconColor = t.icon.disabled.default;
  } else if (selectedState) {
    textColor = t.text.primary.onColor;
    iconColor = t.icon.primary.onColor;
  } else {
    textColor = t.text.primary.default;
    iconColor = t.icon.primary.default;
  }

  // ── Padding: unselected → left narrow / right wide; selected → reversed ──
  const paddingLeft = selectedState
    ? `${t.layoutSpacing.xsm}px`
    : `${t.layoutSpacing['2xsm']}px`;
  const paddingRight = selectedState
    ? `${t.layoutSpacing['2xsm']}px`
    : `${t.layoutSpacing.xsm}px`;

  return (
    <div
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      aria-pressed={selectedState}
      aria-disabled={isDisabled ? 'true' : undefined}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
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
      {!selectedState && (
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

      {selectedState && (
        <CloseSm width={24} height={24} color={iconColor} />
      )}
    </div>
  );
}
