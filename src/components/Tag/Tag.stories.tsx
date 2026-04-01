import type { Meta, StoryObj } from '@storybook/react';
import { Info } from 'react-coolicons';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['neutral', 'information', 'success', 'warning', 'error', 'disabled'],
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
  args: {
    label: 'Tag',
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

// ── Individual variants (no icon) ────────────────────────────────────────────

export const Neutral: Story = {
  args: { variant: 'neutral' },
};

export const Information: Story = {
  args: { variant: 'information' },
};

export const Success: Story = {
  args: { variant: 'success' },
};

export const Warning: Story = {
  args: { variant: 'warning' },
};

export const Error: Story = {
  args: { variant: 'error' },
};

export const Disabled: Story = {
  args: { variant: 'disabled' },
};

// ── With leading icon ────────────────────────────────────────────────────────

export const NeutralWithIcon: Story = {
  args: { variant: 'neutral', leadingIcon: Info },
};

export const InformationWithIcon: Story = {
  args: { variant: 'information', leadingIcon: Info },
};

export const SuccessWithIcon: Story = {
  args: { variant: 'success', leadingIcon: Info },
};

export const WarningWithIcon: Story = {
  args: { variant: 'warning', leadingIcon: Info },
};

export const ErrorWithIcon: Story = {
  args: { variant: 'error', leadingIcon: Info },
};

export const DisabledWithIcon: Story = {
  args: { variant: 'disabled', leadingIcon: Info },
};

// ── All variants side by side ────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        {(['neutral', 'information', 'success', 'warning', 'error', 'disabled'] as const).map(
          (variant) => (
            <Tag key={variant} label={variant} variant={variant} />
          ),
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        {(['neutral', 'information', 'success', 'warning', 'error', 'disabled'] as const).map(
          (variant) => (
            <Tag key={variant} label={variant} variant={variant} leadingIcon={Info} />
          ),
        )}
      </div>
    </div>
  ),
};
