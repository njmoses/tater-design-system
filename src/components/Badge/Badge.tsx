import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export interface BadgeProps {
  status?: 'default' | 'information' | 'error' | 'warning' | 'success';
  label: string;
  theme?: Theme;
}

const statusTokens = {
  default:     { surface: 'primary',     text: 'primary'     },
  information: { surface: 'information', text: 'information' },
  error:       { surface: 'error',       text: 'error'       },
  warning:     { surface: 'warning',     text: 'warning'     },
  success:     { surface: 'success',     text: 'success'     },
} as const;

export function Badge({ status = 'default', label, theme = 'light' }: BadgeProps) {
  const t = useTokens(theme);
  const { surface, text } = statusTokens[status];

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 24,
        height: 24,
        padding: '0 4px',
        borderRadius: t.borderRadius.round,
        backgroundColor: t.surface[surface].default,
        boxSizing: 'border-box',
      }}
    >
      <span
        style={{
          ...typography.label.primary,
          fontSize: typography.label.primary.fontSize,
          lineHeight: `${typography.label.primary.lineHeight}px`,
          color: t.text[text].onColor,
          whiteSpace: 'nowrap',
          textAlign: 'center',
        }}
      >
        {label}
      </span>
    </div>
  );
}
