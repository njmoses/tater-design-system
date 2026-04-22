import type { Meta, StoryObj } from '@storybook/react';
import { PaginationArrow } from '.';

const meta: Meta<typeof PaginationArrow> = {
  title: 'Components/Pagination/PaginationArrow',
  component: PaginationArrow,
  argTypes: {
    status: { control: 'inline-radio', options: ['default', 'hover', 'focus', 'disabled'] },
    type: { control: 'inline-radio', options: ['next', 'previous'] },
    theme: { control: 'inline-radio', options: ['light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof PaginationArrow>;

export const NextDefault: Story = {
  args: { status: 'default', type: 'next', theme: 'light' },
};

export const NextHover: Story = {
  args: { status: 'hover', type: 'next', theme: 'light' },
};

export const NextFocus: Story = {
  args: { status: 'focus', type: 'next', theme: 'light' },
};

export const NextDisabled: Story = {
  args: { status: 'disabled', type: 'next', theme: 'light' },
};

export const PreviousDefault: Story = {
  args: { status: 'default', type: 'previous', theme: 'light' },
};

export const PreviousDisabled: Story = {
  args: { status: 'disabled', type: 'previous', theme: 'light' },
};
