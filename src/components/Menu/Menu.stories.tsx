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
    onSelectionChange: { action: 'selectionChanged' },
  },
};

export default meta;
type Story = StoryObj<MenuProps>;

export const Default: Story = {
  args: {
    theme: 'light',
    items: [
      { id: 'profile',   label: 'Profile',   state: 'default', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
      { id: 'dashboard', label: 'Dashboard', state: 'default', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
      { id: 'settings',  label: 'Settings',  state: 'default', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
      { id: 'help',      label: 'Help',      state: 'default', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
    ],
  },
};

export const WithTrailingIcons: Story = {
  args: {
    theme: 'light',
    items: [
      { id: 'profile',   label: 'Profile',   state: 'default', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: true, trailingIcon: Show },
      { id: 'dashboard', label: 'Dashboard', state: 'default', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: true, trailingIcon: Show },
      { id: 'settings',  label: 'Settings',  state: 'default', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: true, trailingIcon: Show },
      { id: 'help',      label: 'Help',      state: 'default', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: true, trailingIcon: Show },
    ],
  },
};

export const NoIcons: Story = {
  args: {
    theme: 'light',
    items: [
      { id: 'profile',   label: 'Profile',   state: 'default', showLeadingIcon: false, showTrailingIcon: false },
      { id: 'dashboard', label: 'Dashboard', state: 'default', showLeadingIcon: false, showTrailingIcon: false },
      { id: 'settings',  label: 'Settings',  state: 'default', showLeadingIcon: false, showTrailingIcon: false },
      { id: 'help',      label: 'Help',      state: 'default', showLeadingIcon: false, showTrailingIcon: false },
    ],
  },
};

export const WithHoverAndDisabled: Story = {
  args: {
    theme: 'light',
    items: [
      { id: 'profile',   label: 'Profile',   state: 'default',   showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: true, trailingIcon: Show },
      { id: 'dashboard', label: 'Dashboard', state: 'default',   showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: true, trailingIcon: Show },
      { id: 'settings',  label: 'Settings',  state: 'default',   showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: true, trailingIcon: Show },
      { id: 'favorites', label: 'Favorites', state: 'default',   showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: true, trailingIcon: Show },
      { id: 'help',      label: 'Help',      state: 'disabled',  showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: true, trailingIcon: Show },
    ],
  },
};

export const AllStates: Story = {
  args: {
    theme: 'light',
    items: [
      { id: 'default',           label: 'Default',             state: 'default',  showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: true, trailingIcon: Show },
      { id: 'disabled',          label: 'Disabled',            state: 'disabled', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: true, trailingIcon: Show },
      { id: 'selected',          label: 'Selected',            state: 'default',  showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: true, trailingIcon: Show },
      { id: 'selected-disabled', label: 'Selected + Disabled', state: 'disabled', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: true, trailingIcon: Show },
    ],
  },
};

export const LongList: Story = {
  args: {
    theme: 'light',
    items: Array.from({ length: 12 }, (_, i) => ({
      id: `item-${i + 1}`,
      label: `Menu item ${i + 1}`,
      state: 'default' as const,
      showLeadingIcon: true,
      leadingIcon: Show,
      showTrailingIcon: false,
    })),
  },
};

export const Interactive: Story = {
  args: {
    theme: 'light',
    items: [
      { id: 'profile',   label: 'Profile',   state: 'default', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
      { id: 'dashboard', label: 'Dashboard', state: 'default', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
      { id: 'settings',  label: 'Settings',  state: 'default', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
      { id: 'help',      label: 'Help',      state: 'default', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
    ],
  },
};

export const WithDefaultSelection: Story = {
  args: {
    theme: 'light',
    defaultSelectedId: 'settings',
    items: [
      { id: 'profile',   label: 'Profile',   state: 'default', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
      { id: 'dashboard', label: 'Dashboard', state: 'default', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
      { id: 'settings',  label: 'Settings',  state: 'default', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
      { id: 'help',      label: 'Help',      state: 'default', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
    ],
  },
};

export const WithDisabledItems: Story = {
  args: {
    theme: 'light',
    items: [
      { id: 'profile',   label: 'Profile',   state: 'default',  showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
      { id: 'dashboard', label: 'Dashboard', state: 'disabled', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
      { id: 'settings',  label: 'Settings',  state: 'default',  showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
      { id: 'help',      label: 'Help',      state: 'disabled', showLeadingIcon: true, leadingIcon: Show, showTrailingIcon: false },
    ],
  },
};
