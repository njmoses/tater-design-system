import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

const KNOB_DEFAULT      = 'http://localhost:3845/assets/738179f8a43555b344b8a4d90de6461ba0b78468.svg';
const KNOB_HOVER_INACTIVE = 'http://localhost:3845/assets/2509ad43d1ca318bbfde5744417a538d7be733d5.svg';
const KNOB_DISABLED     = 'http://localhost:3845/assets/0ed9cab522bc8da4f0a815d3691dbe7a1a0404f9.svg';
const KNOB_ACTIVE       = 'http://localhost:3845/assets/3e87178dcba89d7765b93399b5b3c3d96a49c48e.svg';

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
const TRACK_PADDING = 2; // scale/50 = 2px

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

function getKnobSrc(status: ToggleStatus, active: boolean): string {
  if (status === 'disabled') return KNOB_DISABLED;
  if (active) return KNOB_ACTIVE;
  if (status === 'hover') return KNOB_HOVER_INACTIVE;
  return KNOB_DEFAULT;
}

export function Toggle({
  status = 'default',
  active = false,
  label,
  theme = 'light',
}: ToggleProps) {
  const t = useTokens(theme);
  const trackStyles = getTrackStyles(t, status, active);
  const typo = typography.body.md;
  const showFocusRing = status === 'focus';

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
              width: 54,
              height: 30,
              left: -3,
              top: -3,
              border: `${t.borderWidth.xs}px solid ${t.border.primary.default}`,
              borderRadius: `${t.borderRadius.round}px`,
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Knob */}
        <div
          style={{
            position: 'relative',
            flexShrink: 0,
            width: KNOB_SIZE,
            height: KNOB_SIZE,
          }}
        >
          <img
            alt=""
            src={getKnobSrc(status, active)}
            style={{
              position: 'absolute',
              display: 'block',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
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
