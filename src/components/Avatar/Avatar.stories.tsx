import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['placeholder', 'initials', 'image'],
    },
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
type Story = StoryObj<typeof Avatar>;

// --- Placeholder ---

export const PlaceholderLarge: Story = {
  args: { type: 'placeholder', size: 'large', theme: 'light' },
};

export const PlaceholderMedium: Story = {
  args: { type: 'placeholder', size: 'medium', theme: 'light' },
};

export const PlaceholderSmall: Story = {
  args: { type: 'placeholder', size: 'small', theme: 'light' },
};

// --- Initials ---

export const InitialsLarge: Story = {
  args: { type: 'initials', size: 'large', label: 'NM', theme: 'light' },
};

export const InitialsMedium: Story = {
  args: { type: 'initials', size: 'medium', label: 'NM', theme: 'light' },
};

export const InitialsSmall: Story = {
  args: { type: 'initials', size: 'small', label: 'NM', theme: 'light' },
};

// --- Image ---

export const ImageLarge: Story = {
  args: {
    type: 'image',
    size: 'large',
    src: 'https://i.pravatar.cc/300',
    alt: 'Avatar',
    theme: 'light',
  },
};

export const ImageMedium: Story = {
  args: {
    type: 'image',
    size: 'medium',
    src: 'https://i.pravatar.cc/300',
    alt: 'Avatar',
    theme: 'light',
  },
};

export const ImageSmall: Story = {
  args: {
    type: 'image',
    size: 'small',
    src: 'https://i.pravatar.cc/300',
    alt: 'Avatar',
    theme: 'light',
  },
};

// --- All variants grid ---

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {(['large', 'medium', 'small'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Avatar type="placeholder" size={size} />
          <Avatar type="initials" size={size} label="NM" />
          <Avatar type="image" size={size} src="https://i.pravatar.cc/300" alt="Avatar" />
        </div>
      ))}
    </div>
  ),
};
