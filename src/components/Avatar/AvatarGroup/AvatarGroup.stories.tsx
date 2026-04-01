import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup } from './AvatarGroup';

const PLACEHOLDER_AVATARS = [
  { type: 'placeholder' as const },
  { type: 'placeholder' as const },
  { type: 'placeholder' as const },
  { type: 'placeholder' as const },
];

const INITIALS_AVATARS = [
  { type: 'initials' as const, label: 'NM' },
  { type: 'initials' as const, label: 'AB' },
  { type: 'initials' as const, label: 'JK' },
  { type: 'initials' as const, label: 'RT' },
];

const IMAGE_AVATARS = [
  { type: 'image' as const, src: 'https://i.pravatar.cc/300?img=1', alt: 'User 1' },
  { type: 'image' as const, src: 'https://i.pravatar.cc/300?img=2', alt: 'User 2' },
  { type: 'image' as const, src: 'https://i.pravatar.cc/300?img=3', alt: 'User 3' },
  { type: 'image' as const, src: 'https://i.pravatar.cc/300?img=4', alt: 'User 4' },
];

const meta: Meta<typeof AvatarGroup> = {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

// --- Placeholder ---

export const PlaceholderSmall: Story = {
  args: { avatars: PLACEHOLDER_AVATARS, size: 'small', theme: 'light' },
};

export const PlaceholderMedium: Story = {
  args: { avatars: PLACEHOLDER_AVATARS, size: 'medium', theme: 'light' },
};

export const PlaceholderLarge: Story = {
  args: { avatars: PLACEHOLDER_AVATARS, size: 'large', theme: 'light' },
};

// --- Initials ---

export const InitialsSmall: Story = {
  args: { avatars: INITIALS_AVATARS, size: 'small', theme: 'light' },
};

export const InitialsMedium: Story = {
  args: { avatars: INITIALS_AVATARS, size: 'medium', theme: 'light' },
};

export const InitialsLarge: Story = {
  args: { avatars: INITIALS_AVATARS, size: 'large', theme: 'light' },
};

// --- Image ---

export const ImageSmall: Story = {
  args: { avatars: IMAGE_AVATARS, size: 'small', theme: 'light' },
};

export const ImageMedium: Story = {
  args: { avatars: IMAGE_AVATARS, size: 'medium', theme: 'light' },
};

export const ImageLarge: Story = {
  args: { avatars: IMAGE_AVATARS, size: 'large', theme: 'light' },
};

// --- All variants grid ---

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {(['large', 'medium', 'small'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <AvatarGroup avatars={PLACEHOLDER_AVATARS} size={size} />
          <AvatarGroup avatars={INITIALS_AVATARS} size={size} />
          <AvatarGroup avatars={IMAGE_AVATARS} size={size} />
        </div>
      ))}
    </div>
  ),
};
