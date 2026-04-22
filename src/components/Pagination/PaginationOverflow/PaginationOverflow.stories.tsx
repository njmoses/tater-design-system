import type { Meta, StoryObj } from '@storybook/react';
import { PaginationOverflow } from '.';

const meta: Meta<typeof PaginationOverflow> = {
  title: 'Components/Pagination/PaginationOverflow',
  component: PaginationOverflow,
  argTypes: {
    status: { control: 'inline-radio', options: ['default', 'hover', 'focus', 'disabled'] },
    theme: { control: 'inline-radio', options: ['light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof PaginationOverflow>;

export const Default: Story = {
  args: { status: 'default', theme: 'light' },
};

export const Hover: Story = {
  args: { status: 'hover', theme: 'light' },
};

export const Focus: Story = {
  args: { status: 'focus', theme: 'light' },
};

export const Disabled: Story = {
  args: { status: 'disabled', theme: 'light' },
};
