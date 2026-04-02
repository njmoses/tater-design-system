import type { Meta, StoryObj } from '@storybook/react';
import { TreeIndicator } from '.';

const meta: Meta<typeof TreeIndicator> = {
  title: 'Components/Tree/TreeIndicator',
  component: TreeIndicator,
  argTypes: {
    theme: { control: 'inline-radio', options: ['light', 'dark'] },
    status: { control: 'inline-radio', options: ['default', 'hover'] },
  },
};

export default meta;
type Story = StoryObj<typeof TreeIndicator>;

export const ClosedDefault: Story = {
  args: { status: 'default', open: false, theme: 'light' },
};

export const ClosedHover: Story = {
  args: { status: 'hover', open: false, theme: 'light' },
};

export const OpenDefault: Story = {
  args: { status: 'default', open: true, theme: 'light' },
};

export const OpenHover: Story = {
  args: { status: 'hover', open: true, theme: 'light' },
};
