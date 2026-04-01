import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';
import { Avatar } from '../Avatar';

export interface AvatarCaptionProps {
  /** Determines the content displayed inside the avatar */
  type?: 'placeholder' | 'initials' | 'image';
  /** Size of the avatar and text pairing */
  size?: 'small' | 'medium' | 'large';
  /** Two capital letters shown when type is 'initials' */
  label?: string;
  /** Image URL shown when type is 'image' */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Name displayed next to the avatar (all sizes) */
  name?: string;
  /** Title displayed below the name (large only) */
  title?: string;
  /** Controls whether the title line is visible (large only) */
  showTitle?: boolean;
  /** Visual theme */
  theme?: Theme;
}

export function AvatarCaption({
  type = 'placeholder',
  size = 'medium',
  label = 'NM',
  src,
  alt = '',
  name = 'Nathan Moses',
  title = 'Portsmith Design',
  showTitle = true,
  theme = 'light',
}: AvatarCaptionProps) {
  const t = useTokens(theme);

  const nameTypo = {
    large: typography.heading.h5,
    medium: typography.heading.h6,
    small: typography.body.mdSemibold,
  }[size];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: `${t.layoutSpacing.xsm}px`,
      }}
    >
      <Avatar
        type={type}
        size={size}
        label={label}
        src={src}
        alt={alt}
        theme={theme}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: `${t.layoutSpacing.none}px`,
          flex: '1 0 0',
          minWidth: 0,
        }}
      >
        <span
          style={{
            fontFamily: nameTypo.fontFamily,
            fontSize: `${nameTypo.fontSize}px`,
            fontWeight: nameTypo.fontWeight,
            lineHeight: `${nameTypo.lineHeight}px`,
            letterSpacing: nameTypo.letterSpacing,
            color: t.text.default.heading,
            display: 'block',
          }}
        >
          {name}
        </span>

        {size === 'large' && showTitle && (
          <span
            style={{
              fontFamily: typography.body.md.fontFamily,
              fontSize: `${typography.body.md.fontSize}px`,
              fontWeight: typography.body.md.fontWeight,
              lineHeight: `${typography.body.md.lineHeight}px`,
              letterSpacing: typography.body.md.letterSpacing,
              color: t.text.default.body,
              display: 'block',
            }}
          >
            {title}
          </span>
        )}
      </div>
    </div>
  );
}
