import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export interface TagProps {
  /** The tag label text */
  label: string;
  /** Colour variant conveying semantic meaning */
  variant?: 'neutral' | 'information' | 'success' | 'warning' | 'error' | 'disabled';
  /** Optional leading icon component from react-coolicons */
  leadingIcon?: React.ComponentType<{ width?: number; height?: number; color?: string }>;
  /** Visual theme */
  theme?: Theme;
}

type VariantTokens = {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  iconColor: string;
};

function useVariantTokens(
  variant: NonNullable<TagProps['variant']>,
  t: ReturnType<typeof useTokens>,
): VariantTokens {
  switch (variant) {
    case 'neutral':
      return {
        backgroundColor: t.default,
        borderColor: t.border.default.default,
        textColor: t.text.default.body,
        iconColor: t.icon.default.regular,
      };
    case 'information':
      return {
        backgroundColor: t.surface.information.defaultSubtle,
        borderColor: t.border.information.default,
        textColor: t.text.information.default,
        iconColor: t.icon.information.default,
      };
    case 'success':
      return {
        backgroundColor: t.surface.success.defaultSubtle,
        borderColor: t.border.success.default,
        textColor: t.text.success.default,
        iconColor: t.icon.success.default,
      };
    case 'warning':
      return {
        backgroundColor: t.surface.warning.defaultSubtle,
        borderColor: t.border.warning.default,
        textColor: t.text.warning.default,
        iconColor: t.icon.warning.default,
      };
    case 'error':
      return {
        backgroundColor: t.surface.error.defaultSubtle,
        borderColor: t.border.error.default,
        textColor: t.text.error.default,
        iconColor: t.icon.error.default,
      };
    case 'disabled':
      return {
        backgroundColor: t.surface.disabled.default,
        borderColor: t.border.disabled.default,
        textColor: t.text.disabled.default,
        iconColor: t.icon.disabled.default,
      };
  }
}

export function Tag({
  label,
  variant = 'neutral',
  leadingIcon: LeadingIcon,
  theme = 'light',
}: TagProps) {
  const t = useTokens(theme);
  const { backgroundColor, borderColor, textColor, iconColor } = useVariantTokens(variant, t);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${t.layoutSpacing.xsm}px`,
        paddingTop: `${t.layoutSpacing['2xsm']}px`,
        paddingBottom: `${t.layoutSpacing['2xsm']}px`,
        paddingLeft: `${t.layoutSpacing.xsm}px`,
        paddingRight: `${t.layoutSpacing.xsm}px`,
        backgroundColor,
        border: `${t.borderWidth.xs}px solid ${borderColor}`,
        borderRadius: `${t.borderRadius[200]}px`,
        boxSizing: 'border-box',
      }}
    >
      {LeadingIcon && (
        <LeadingIcon width={24} height={24} color={iconColor} />
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
    </div>
  );
}
