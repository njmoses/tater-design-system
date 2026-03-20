import type { Meta, StoryObj } from '@storybook/react';
import { Show } from 'react-coolicons';
import { Menu } from './Menu';
import type { MenuProps } from './Menu';

const meta: Meta<MenuProps> = {
  title: 'Components/Menu/Menu',
  component: Menu,
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    items: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<MenuProps>;

export const Default: Story = {
  args: {
    theme: 'light',
    items: [
      { label: 'Profile', state: 'default', selected: false, showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
      { label: 'Dashboard', state: 'default', selected: true,  showLeadingIcon: true, leadingIcon: Show,   showTrailingIcon: false },
      { label: 'Settings',  state: 'default', selected: false, showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
      { label: 'Help',      state: 'default', selected: false, showLeadingIcon: true, leadingIcon: Show,   showTrailingIcon: false },
    ],
  },
};

export const WithTrailingIcons: Story = {
  args: {
    theme: 'light',
    items: [
      { label: 'Profile',   state: 'default', selected: false, showLeadingIcon: true, leadingIcon: Show,     showTrailingIcon: true, trailingIcon: Show },
      { label: 'Dashboard', state: 'default', selected: true,  showLeadingIcon: true, leadingIcon: Show,       showTrailingIcon: true, trailingIcon: Show },
      { label: 'Settings',  state: 'default', selected: false, showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: true, trailingIcon: Show },
      { label: 'Help',      state: 'default', selected: false, showLeadingIcon: true, leadingIcon: Show,       showTrailingIcon: true, trailingIcon: Show },
    ],
  },
};

export const NoIcons: Story = {
  args: {
    theme: 'light',
    items: [
      { label: 'Profile',   state: 'default', selected: false, showLeadingIcon: false, showTrailingIcon: false },
      { label: 'Dashboard', state: 'default', selected: true,  showLeadingIcon: false, showTrailingIcon: false },
      { label: 'Settings',  state: 'default', selected: false, showLeadingIcon: false, showTrailingIcon: false },
      { label: 'Help',      state: 'default', selected: false, showLeadingIcon: false, showTrailingIcon: false },
    ],
  },
};

export const WithHoverAndDisabled: Story = {
  args: {
    theme: 'light',
    items: [
      { label: 'Profile',   state: 'default',  selected: false, showLeadingIcon: true, leadingIcon: Show,     showTrailingIcon: true, trailingIcon: Show },
      { label: 'Dashboard', state: 'hover',     selected: false, showLeadingIcon: true, leadingIcon: Show,       showTrailingIcon: true, trailingIcon: Show },
      { label: 'Settings',  state: 'default',   selected: true,  showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: true, trailingIcon: Show },
      { label: 'Favorites', state: 'default',   selected: false, showLeadingIcon: true, leadingIcon: Show,    showTrailingIcon: true, trailingIcon: Show },
      { label: 'Help',      state: 'disabled',  selected: false, showLeadingIcon: true, leadingIcon: Show,       showTrailingIcon: true, trailingIcon: Show },
    ],
  },
};

export const AllStates: Story = {
  args: {
    theme: 'light',
    items: [
      { label: 'Default',           state: 'default',  selected: false, showLeadingIcon: true, leadingIcon: Show,  showTrailingIcon: true, trailingIcon: Show },
      { label: 'Hover',             state: 'hover',    selected: false, showLeadingIcon: true, leadingIcon: Show,  showTrailingIcon: true, trailingIcon: Show },
      { label: 'Active',            state: 'active',   selected: false, showLeadingIcon: true, leadingIcon: Show,  showTrailingIcon: true, trailingIcon: Show },
      { label: 'Disabled',          state: 'disabled', selected: false, showLeadingIcon: true, leadingIcon: Show,  showTrailingIcon: true, trailingIcon: Show },
      { label: 'Selected',          state: 'default',  selected: true,  showLeadingIcon: true, leadingIcon: Show,  showTrailingIcon: true, trailingIcon: Show },
      { label: 'Selected + Hover',  state: 'hover',    selected: true,  showLeadingIcon: true, leadingIcon: Show,  showTrailingIcon: true, trailingIcon: Show },
      { label: 'Selected + Active', state: 'active',   selected: true,  showLeadingIcon: true, leadingIcon: Show,  showTrailingIcon: true, trailingIcon: Show },
      { label: 'Selected + Disabled', state: 'disabled', selected: true, showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: true, trailingIcon: Show },
    ],
  },
};

export const LongList: Story = {
  args: {
    theme: 'light',
    items: Array.from({ length: 12 }, (_, i) => ({
      label: `Menu item ${i + 1}`,
      state: 'default' as const,
      selected: i === 2,
      showLeadingIcon: true,
      leadingIcon: Show,
      showTrailingIcon: false,
    })),
  },
};
