import type { Meta, StoryObj } from '@storybook/react';
import { Show } from 'react-coolicons';
import { Dropdown } from './Dropdown';
import type { DropdownProps } from './Dropdown';
import type { MenuItemProps } from '@/components/Menu';

type StoryArgs = DropdownProps & {
  showLeadingIcon: boolean;
  showTrailingIcon: boolean;
};

const meta: Meta<StoryArgs> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    status: {
      control: 'inline-radio',
      options: ['default', 'required', 'optional'],
    },
    showLeadingIcon: { control: 'boolean' },
    showTrailingIcon: { control: 'boolean' },
    items: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<StoryArgs>;

const baseItems: MenuItemProps[] = [
  { label: 'Profile',   state: 'default', selected: false, leadingIcon: Show, trailingIcon: Show },
  { label: 'Dashboard', state: 'default', selected: true,  leadingIcon: Show, trailingIcon: Show },
  { label: 'Settings',  state: 'default', selected: false, leadingIcon: Show, trailingIcon: Show },
  { label: 'Help',      state: 'default', selected: false, leadingIcon: Show, trailingIcon: Show },
];

export const Closed: Story = {
  args: {
    text: 'Label',
    hint: 'Hint Text',
    state: false,
    theme: 'light',
    showLeadingIcon: true,
    showTrailingIcon: false,
  },
  render: ({ showLeadingIcon, showTrailingIcon, ...args }) => (
    <Dropdown
      {...args}
      items={baseItems.map(item => ({
        ...item,
        showLeadingIcon,
        showTrailingIcon,
      }))}
    />
  ),
};

export const Open: Story = {
  args: {
    text: 'Label',
    hint: 'Hint Text',
    state: true,
    theme: 'light',
    showLeadingIcon: true,
    showTrailingIcon: false,
  },
  render: ({ showLeadingIcon, showTrailingIcon, ...args }) => (
    <Dropdown
      {...args}
      items={baseItems.map(item => ({
        ...item,
        showLeadingIcon,
        showTrailingIcon,
      }))}
    />
  ),
};
