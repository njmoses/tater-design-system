import type { Meta, StoryObj } from '@storybook/react';
import { Pagination, PaginationItem } from './Pagination';
import type { PaginationProps, PaginationItemProps } from './Pagination';

// ─── PaginationItem ───────────────────────────────────────────────────────────

const meta: Meta<PaginationItemProps> = {
  title: 'Components/Pagination/PaginationItem',
  component: PaginationItem,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus', 'disabled'],
    },
    type: {
      control: 'inline-radio',
      options: ['next', 'previous', 'overflow', 'numeric', 'selected'],
    },
    number: { control: { type: 'number', min: 1, max: 999 } },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type ItemStory = StoryObj<PaginationItemProps>;

export const Default: ItemStory = {
  args: { status: 'default', type: 'numeric', number: 1, theme: 'light' },
};

export const Hover: ItemStory = {
  args: { status: 'hover', type: 'numeric', number: 1, theme: 'light' },
};

export const Focus: ItemStory = {
  args: { status: 'focus', type: 'numeric', number: 1, theme: 'light' },
};

export const Disabled: ItemStory = {
  args: { status: 'disabled', type: 'numeric', number: 1, theme: 'light' },
};

export const TypeNext: ItemStory = {
  name: 'Type: Next',
  args: { status: 'default', type: 'next', theme: 'light' },
};

export const TypePrevious: ItemStory = {
  name: 'Type: Previous',
  args: { status: 'default', type: 'previous', theme: 'light' },
};

export const TypeOverflow: ItemStory = {
  name: 'Type: Overflow',
  args: { status: 'default', type: 'overflow', theme: 'light' },
};

export const TypeNumeric: ItemStory = {
  name: 'Type: Numeric',
  args: { status: 'default', type: 'numeric', number: 5, theme: 'light' },
};

export const TypeSelected: ItemStory = {
  name: 'Type: Selected',
  args: { status: 'default', type: 'selected', number: 3, theme: 'light' },
};

export const AllStatuses: ItemStory = {
  name: 'All Statuses',
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <PaginationItem status="default" type="numeric" number={1} />
      <PaginationItem status="hover" type="numeric" number={1} />
      <PaginationItem status="focus" type="numeric" number={1} />
      <PaginationItem status="disabled" type="numeric" number={1} />
    </div>
  ),
};

export const AllTypes: ItemStory = {
  name: 'All Types',
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <PaginationItem type="previous" />
      <PaginationItem type="numeric" number={1} />
      <PaginationItem type="selected" number={2} />
      <PaginationItem type="overflow" />
      <PaginationItem type="next" />
    </div>
  ),
};

// ─── Pagination ───────────────────────────────────────────────────────────────

export const FormatJumper: StoryObj<PaginationProps> = {
  render: (args) => <Pagination {...args} />,
  name: 'Format: Jumper',
  args: { format: 'jumper', theme: 'light' },
};

export const FormatDefault: StoryObj<PaginationProps> = {
  render: (args) => <Pagination {...args} />,
  name: 'Format: Default',
  args: { format: 'default', theme: 'light' },
};
