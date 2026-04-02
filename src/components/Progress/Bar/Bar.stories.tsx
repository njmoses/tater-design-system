import type { Meta, StoryObj } from '@storybook/react';
import { Bar } from '.';

const meta: Meta<typeof Bar> = {
  title: 'Components/Progress/Bar',
  component: Bar,
  argTypes: {
    theme: { control: 'inline-radio', options: ['light', 'dark'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  decorators: [(Story) => <div style={{ width: 500 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Bar>;

export const Sm: Story = {
  args: { size: 'sm', progress: 0, theme: 'light' },
};

export const SmallPartial: Story = {
  args: { size: 'sm', progress: 40, theme: 'light' },
};

export const SmallFull: Story = {
  args: { size: 'sm', progress: 100, theme: 'light' },
};

export const MediumPartial: Story = {
  args: { size: 'md', progress: 60, theme: 'light' },
};

export const LargePartial: Story = {
  args: { size: 'lg', progress: 80, theme: 'light' },
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 500 }}>
      <Bar {...args} size="sm" progress={80} />
      <Bar {...args} size="md" progress={80} />
      <Bar {...args} size="lg" progress={80} />
    </div>
  ),
  args: { theme: 'light' },
};
