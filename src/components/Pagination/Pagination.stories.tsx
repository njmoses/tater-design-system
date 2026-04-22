import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination/Pagination',
  component: Pagination,
  argTypes: {
    format: { control: 'inline-radio', options: ['default', 'jumper'] },
    theme: { control: 'inline-radio', options: ['light', 'dark'] },
    totalPages: { control: { type: 'number', min: 1 } },
    defaultPage: { control: { type: 'number', min: 1 } },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const DefaultFourPages: Story = {
  args: { format: 'default', totalPages: 4, defaultPage: 1, theme: 'light' },
};

export const DefaultTenPages: Story = {
  args: { format: 'default', totalPages: 10, defaultPage: 1, theme: 'light' },
};

export const JumperFormat: Story = {
  args: { format: 'jumper', totalPages: 20, defaultPage: 1, theme: 'light' },
};

export const FirstPageSelected: Story = {
  args: { format: 'default', totalPages: 5, defaultPage: 1, theme: 'light' },
};

export const LastPageSelected: Story = {
  args: { format: 'default', totalPages: 5, defaultPage: 5, theme: 'light' },
};

export const Interactive: Story = {
  args: {
    format: 'default',
    totalPages: 8,
    defaultPage: 3,
    theme: 'light',
    onPageChange: (page: number) => console.log('Page changed to', page),
  },
};
