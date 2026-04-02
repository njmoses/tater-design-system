import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '.';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Progress/ProgressBar',
  component: ProgressBar,
  argTypes: {
    theme: { control: 'inline-radio', options: ['light', 'dark'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  decorators: [(Story) => <div style={{ width: 500 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const WithLabel: Story = {
  args: { size: 'md', progress: 80, showLabel: true, label: 'Completion: 80%', theme: 'light' },
};

export const WithoutLabel: Story = {
  args: { size: 'md', progress: 80, showLabel: false, theme: 'light' },
};

export const SmallWithLabel: Story = {
  args: { size: 'sm', progress: 80, showLabel: true, label: 'Completion: 80%', theme: 'light' },
};

export const MediumWithLabel: Story = {
  args: { size: 'md', progress: 80, showLabel: true, label: 'Completion: 80%', theme: 'light' },
};

export const LargeWithLabel: Story = {
  args: { size: 'lg', progress: 80, showLabel: true, label: 'Completion: 80%', theme: 'light' },
};

export const Empty: Story = {
  args: { size: 'md', progress: 0, showLabel: true, label: 'Completion: 0%', theme: 'light' },
};

export const Full: Story = {
  args: { size: 'md', progress: 100, showLabel: true, label: 'Completion: 100%', theme: 'light' },
};
