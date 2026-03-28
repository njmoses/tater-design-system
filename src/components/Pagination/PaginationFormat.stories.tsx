import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import type { PaginationProps } from './Pagination';

const meta: Meta<PaginationProps> = {
  title: 'Components/Pagination/Pagination',
  component: Pagination,
  argTypes: {
    format: {
      control: 'inline-radio',
      options: ['jumper', 'default'],
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<PaginationProps>;

export const Jumper: Story = {
  args: { format: 'jumper', theme: 'light' },
};

export const Default: Story = {
  args: { format: 'default', theme: 'light' },
};
