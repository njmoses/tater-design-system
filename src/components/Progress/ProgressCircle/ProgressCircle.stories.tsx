import type { Meta, StoryObj } from '@storybook/react';
import { ProgressCircle } from '.';

const meta: Meta<typeof ProgressCircle> = {
  title: 'Components/Progress/ProgressCircle',
  component: ProgressCircle,
  argTypes: {
    theme: { control: 'inline-radio', options: ['light', 'dark'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressCircle>;

export const SmallAt80: Story = {
  args: { size: 'sm', progress: 80, showPercentage: true, theme: 'light' },
};

export const MediumAt80: Story = {
  args: { size: 'md', progress: 80, showPercentage: true, theme: 'light' },
};

export const LargeAt80: Story = {
  args: { size: 'lg', progress: 80, showPercentage: true, theme: 'light' },
};

export const Empty: Story = {
  args: { size: 'md', progress: 0, showPercentage: true, theme: 'light' },
};

export const Full: Story = {
  args: { size: 'md', progress: 100, showPercentage: true, theme: 'light' },
};

export const WithoutPercentage: Story = {
  args: { size: 'md', progress: 80, showPercentage: false, theme: 'light' },
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <ProgressCircle {...args} size="sm" progress={80} />
      <ProgressCircle {...args} size="md" progress={80} />
      <ProgressCircle {...args} size="lg" progress={80} />
    </div>
  ),
  args: { showPercentage: true, theme: 'light' },
};
