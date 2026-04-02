import type { Meta, StoryObj } from '@storybook/react';
import { TreeItem } from '.';

const meta: Meta<typeof TreeItem> = {
  title: 'Components/Tree/TreeItem',
  component: TreeItem,
  argTypes: {
    theme: { control: 'inline-radio', options: ['light', 'dark'] },
    status: { control: 'inline-radio', options: ['default', 'hover', 'focus'] },
    level: { control: 'inline-radio', options: ['01', '02', '03'] },
  },
};

export default meta;
type Story = StoryObj<typeof TreeItem>;

export const DefaultClosed: Story = {
  args: {
    status: "hover",
    selected: false,
    level: '01',
    label: 'Tree Item',
    showIcon: true,
    open: false,
    theme: 'light',
  },
};

export const DefaultOpen: Story = {
  args: {
    status: 'default',
    selected: false,
    level: '01',
    label: 'Tree Item',
    showIcon: true,
    open: true,
    theme: 'light',
  },
};

export const Hover: Story = {
  args: {
    status: 'hover',
    selected: false,
    level: '01',
    label: 'Tree Item',
    showIcon: true,
    open: false,
    theme: 'light',
  },
};

export const Focus: Story = {
  args: {
    status: 'focus',
    selected: false,
    level: '01',
    label: 'Tree Item',
    showIcon: true,
    open: false,
    theme: 'light',
  },
};

export const SelectedLevel01: Story = {
  args: {
    status: 'default',
    selected: true,
    level: '01',
    label: 'Tree Item',
    showIcon: true,
    open: true,
    theme: 'light',
  },
};

export const SelectedLevel02: Story = {
  args: {
    status: 'default',
    selected: true,
    level: '02',
    label: 'Tree Item',
    showIcon: true,
    open: true,
    theme: 'light',
  },
};

export const SelectedLevel03: Story = {
  args: {
    status: 'default',
    selected: true,
    level: '03',
    label: 'Tree Item',
    showIcon: true,
    open: false,
    theme: 'light',
  },
};

export const WithIcon: Story = {
  args: {
    status: 'default',
    selected: false,
    level: '01',
    label: 'Tree Item',
    showIcon: true,
    open: false,
    theme: 'light',
  },
};

export const WithoutIcon: Story = {
  args: {
    status: 'default',
    selected: false,
    level: '01',
    label: 'Tree Item',
    showIcon: false,
    open: false,
    theme: 'light',
  },
};
