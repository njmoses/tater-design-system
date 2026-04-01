import { useTokens } from '@/tokens';
import type { Theme } from '@/tokens';
import { Avatar } from '../Avatar';
import type { AvatarProps } from '../Avatar';

export interface AvatarGroupProps {
  /** List of avatars to display. Each item accepts type, label, src, and alt. */
  avatars: Array<Pick<AvatarProps, 'type' | 'label' | 'src' | 'alt'>>;
  /** Uniform size applied to every avatar in the group */
  size?: 'small' | 'medium' | 'large';
  /** Visual theme */
  theme?: Theme;
}

const CONTAINER_SIZE = { large: 64, medium: 40, small: 30 } as const;

export function AvatarGroup({ avatars, size = 'medium', theme = 'light' }: AvatarGroupProps) {
  const t = useTokens(theme);
  const avatarSize = CONTAINER_SIZE[size];

  // Overlap offset per size using layout spacing tokens
  const overlapOffset = {
    large: t.layoutSpacing.sm,      // 16px
    medium: t.layoutSpacing.xsm,    // 8px
    small: t.layoutSpacing['2xsm'], // 4px
  }[size];

  // Ring width matches the Avatar's border width token
  const ringWidth = t.borderWidth.xs;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      {avatars.map((avatar, index) => (
        <div
          key={index}
          style={{
            marginLeft: index === 0 ? 0 : -overlapOffset,
            // Rightmost avatars sit on top
            zIndex: index + 1,
            position: 'relative',
            // Ring outline to visually separate overlapping avatars
            borderRadius: `${t.borderRadius.round}px`,
            boxShadow: `0 0 0 ${ringWidth}px ${t.base}`,
            width: avatarSize,
            height: avatarSize,
            flexShrink: 0,
          }}
        >
          <Avatar {...avatar} size={size} theme={theme} />
        </div>
      ))}
    </div>
  );
}
