import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export type ToggleStatus = 'default' | 'hover' | 'focus' | 'disabled';

export interface ToggleProps {
  status?: ToggleStatus;
  active?: boolean;
  label: string;
  theme?: Theme;
}

const TRACK_WIDTH   = 48;
const TRACK_HEIGHT  = 24;
const KNOB_SIZE     = 20;
const TRACK_PADDING = 2;  // scale/50 = 2px
const FOCUS_GAP     = 2;  // px of visual space between track border and focus ring border

function getTrackStyles(
  t: ReturnType<typeof useTokens>,
  status: ToggleStatus,
  active: boolean
) {
  if (status === 'disabled') {
    return {
      backgroundColor: t.surface.disabled.default,
      borderColor: t.border.disabled.default,
    };
  }
  if (active) {
    return {
      backgroundColor: status === 'hover' ? t.surface.primary.defaultHover : t.surface.primary.default,
      borderColor:     status === 'hover' ? t.border.primary.defaultHover  : t.border.primary.default,
    };
  }
  return {
    backgroundColor: status === 'hover' ? t.surface.primary.defaultSubtleHover : t.base,
    borderColor:     status === 'hover' ? t.border.primary.defaultHover         : t.border.primary.default,
  };
}

function getKnobColor(
  t: ReturnType<typeof useTokens>,
  status: ToggleStatus,
  active: boolean
): string {
  if (status === 'disabled') return t.icon.disabled.default;
  if (active) return t.base;
  if (status === 'hover') return t.surface.primary.defaultHover;
  return t.surface.primary.default;
}

export function Toggle({
  status = 'default',
  active = false,
  label,
  theme = 'light',
}: ToggleProps) {
  const t = useTokens(theme);
  const trackStyles = getTrackStyles(t, status, active);
  const knobColor   = getKnobColor(t, status, active);
  const typo        = typography.body.md;
  const showFocusRing = status === 'focus';

  // Focus ring offset: FOCUS_GAP + track border width, so the visual gap is exactly FOCUS_GAP px
  const focusOffset = -(FOCUS_GAP + t.borderWidth.sm);
  const focusWidth  = TRACK_WIDTH  + 2 * (FOCUS_GAP + t.borderWidth.xs);
  const focusHeight = TRACK_HEIGHT + 2 * (FOCUS_GAP + t.borderWidth.xs);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${t.borderRadius[300]}px`,
        cursor: status === 'disabled' ? 'not-allowed' : 'pointer',
      }}
    >
      {/* Track */}
      <div
        style={{
          position: 'relative',
          flexShrink: 0,
          width: TRACK_WIDTH,
          height: TRACK_HEIGHT,
          backgroundColor: trackStyles.backgroundColor,
          border: `${t.borderWidth.xs}px solid ${trackStyles.borderColor}`,
          borderRadius: `${t.borderRadius.round}px`,
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          padding: `0 ${TRACK_PADDING}px`,
          justifyContent: active ? 'flex-end' : 'flex-start',
        }}
      >
        {showFocusRing && (
          <div
            style={{
              position: 'absolute',
              width: focusWidth,
              height: focusHeight,
              left: focusOffset,
              top: focusOffset,
              border: `${t.borderWidth.xs}px solid ${t.border.primary.default}`,
              borderRadius: `${t.borderRadius.round}px`,
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Knob */}
        <div
          style={{
            flexShrink: 0,
            width: KNOB_SIZE,
            height: KNOB_SIZE,
            borderRadius: '50%',
            backgroundColor: knobColor,
          }}
        />
      </div>

      {/* Label */}
      <span
        style={{
          fontFamily: typo.fontFamily,
          fontSize: `${typo.fontSize}px`,
          fontWeight: typo.fontWeight,
          lineHeight: `${typo.lineHeight}px`,
          letterSpacing: typo.letterSpacing,
          color: status === 'disabled' ? t.text.disabled.default : t.text.default.body,
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </div>
  );
}
