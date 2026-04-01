import type { Meta, StoryObj } from '@storybook/react';
import { AvatarCaption } from './AvatarCaption';

const meta: Meta<typeof AvatarCaption> = {
  title: 'Components/AvatarCaption',
  component: AvatarCaption,
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['placeholder', 'initials', 'image'],
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    showTitle: {
      control: 'boolean',
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarCaption>;

// --- Placeholder ---

export const PlaceholderSmall: Story = {
  args: { type: 'placeholder', size: 'small', name: 'Nathan Moses', theme: 'light' },
};

export const PlaceholderMedium: Story = {
  args: { type: 'placeholder', size: 'medium', name: 'Nathan Moses', theme: 'light' },
};

export const PlaceholderLarge: Story = {
  args: { type: 'placeholder', size: 'large', name: 'Nathan Moses', title: 'Portsmith Design', showTitle: true, theme: 'light' },
};

export const PlaceholderLargeNoTitle: Story = {
  args: { type: 'placeholder', size: 'large', name: 'Nathan Moses', title: 'Portsmith Design', showTitle: false, theme: 'light' },
};

// --- Initials ---

export const InitialsSmall: Story = {
  args: { type: 'initials', size: 'small', label: 'NM', name: 'Nathan Moses', theme: 'light' },
};

export const InitialsMedium: Story = {
  args: { type: 'initials', size: 'medium', label: 'NM', name: 'Nathan Moses', theme: 'light' },
};

export const InitialsLarge: Story = {
  args: { type: 'initials', size: 'large', label: 'NM', name: 'Nathan Moses', title: 'Portsmith Design', showTitle: true, theme: 'light' },
};

// --- Image ---

export const ImageSmall: Story = {
  args: {
    type: 'image',
    size: 'small',
    src: 'https://i.pravatar.cc/300',
    alt: 'Avatar',
    name: 'Nathan Moses',
    theme: 'light',
  },
};

export const ImageMedium: Story = {
  args: {
    type: 'image',
    size: 'medium',
    src: 'https://i.pravatar.cc/300',
    alt: 'Avatar',
    name: 'Nathan Moses',
    theme: 'light',
  },
};

export const ImageLarge: Story = {
  args: {
    type: 'image',
    size: 'large',
    src: 'https://i.pravatar.cc/300',
    alt: 'Avatar',
    name: 'Nathan Moses',
    title: 'Portsmith Design',
    showTitle: true,
    theme: 'light',
  },
};

// --- All variants grid ---

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {(['large', 'medium', 'small'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <AvatarCaption type="placeholder" size={size} name="Nathan Moses" title="Portsmith Design" showTitle />
          <AvatarCaption type="initials" size={size} label="NM" name="Nathan Moses" title="Portsmith Design" showTitle />
          <AvatarCaption
            type="image"
            size={size}
            src="https://i.pravatar.cc/300"
            alt="Avatar"
            name="Nathan Moses"
            title="Portsmith Design"
            showTitle
          />
        </div>
      ))}
    </div>
  ),
};
