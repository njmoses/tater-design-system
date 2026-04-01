import { User01 } from 'react-coolicons';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export interface AvatarProps {
  /** Determines the content displayed inside the avatar */
  type?: 'placeholder' | 'initials' | 'image';
  /** Size of the avatar */
  size?: 'small' | 'medium' | 'large';
  /** Two capital letters shown when type is 'initials' */
  label?: string;
  /** Image URL shown when type is 'image' */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Visual theme */
  theme?: Theme;
}

const CONTAINER_SIZE = { large: 64, medium: 40, small: 30 } as const;
const ICON_SIZE = { large: 36, medium: 24, small: 18 } as const;

const initialsTypography = {
  large: typography.heading.h5,
  medium: typography.heading.h6,
  small: typography.body.mdSemibold,
} as const;

export function Avatar({
  type = 'placeholder',
  size = 'medium',
  label = 'NM',
  src,
  alt = '',
  theme = 'light',
}: AvatarProps) {
  const t = useTokens(theme);
  const containerSize = CONTAINER_SIZE[size];
  const iconSize = ICON_SIZE[size];
  const typo = initialsTypography[size];

  return (
    <div
      style={{
        width: containerSize,
        height: containerSize,
        borderRadius: `${t.borderRadius.round}px`,
        border: `${t.borderWidth.xs}px solid ${t.border.default.default}`,
        backgroundColor: t.base,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flexShrink: 0,
        boxSizing: 'border-box',
      }}
    >
      {type === 'placeholder' && (
        <User01
          width={iconSize}
          height={iconSize}
          color={t.icon.default.regular}
        />
      )}

      {type === 'initials' && (
        <span
          style={{
            fontFamily: typo.fontFamily,
            fontSize: `${typo.fontSize}px`,
            fontWeight: typo.fontWeight,
            lineHeight: `${typo.lineHeight}px`,
            letterSpacing: typo.letterSpacing,
            color: t.text.default.heading,
            userSelect: 'none',
          }}
        >
          {label}
        </span>
      )}

      {type === 'image' && src && (
        <img
          src={src}
          alt={alt}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}
    </div>
  );
}
