import type { Meta, StoryObj } from '@storybook/react';
import { PaginationPage } from '.';

const meta: Meta<typeof PaginationPage> = {
  title: 'Components/Pagination/PaginationPage',
  component: PaginationPage,
  argTypes: {
    status: { control: 'inline-radio', options: ['default', 'hover', 'focus', 'disabled'] },
    theme: { control: 'inline-radio', options: ['light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof PaginationPage>;

export const Default: Story = {
  args: { status: 'default', selected: false, label: '1', theme: 'light' },
};

export const Selected: Story = {
  args: { status: 'default', selected: true, label: '1', theme: 'light' },
};

export const Hover: Story = {
  args: { status: 'hover', selected: false, label: '2', theme: 'light' },
};

export const Focus: Story = {
  args: { status: 'focus', selected: false, label: '3', theme: 'light' },
};

export const Disabled: Story = {
  args: { status: 'disabled', selected: false, label: '4', theme: 'light' },
};
