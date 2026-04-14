import type { Meta, StoryObj } from '@storybook/react';
import { Show } from 'react-coolicons';
import { Dropdown } from './Dropdown';
import type { DropdownProps, DropdownItem } from './Dropdown';

const meta: Meta<DropdownProps> = {
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
    items: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<DropdownProps>;

const baseItems: DropdownItem[] = [
  { id: 'profile',   label: 'Profile',   state: 'default', showLeadingIcon: true, leadingIcon: Show },
  { id: 'dashboard', label: 'Dashboard', state: 'default', showLeadingIcon: true, leadingIcon: Show },
  { id: 'settings',  label: 'Settings',  state: 'default', showLeadingIcon: true, leadingIcon: Show },
  { id: 'help',      label: 'Help',      state: 'default', showLeadingIcon: true, leadingIcon: Show },
];

// ── Closed (existing, unchanged behaviour) ────────────────────────────────────
export const Closed: Story = {
  args: {
    text: 'Label',
    hint: 'Hint Text',
    status: 'default',
    theme: 'light',
    leadingIcon: Show,
    items: baseItems,
    state: false,
  },
};

// ── Open (existing, unchanged behaviour) ──────────────────────────────────────
export const Open: Story = {
  args: {
    text: 'Label',
    hint: 'Hint Text',
    status: 'default',
    theme: 'light',
    leadingIcon: Show,
    items: baseItems,
    state: true,
  },
};

// ── Interactive ────────────────────────────────────────────────────────────────
// Full open/close and selection behaviour — click the field to open, pick an
// item to select it, click outside to close.
export const Interactive: Story = {
  args: {
    text: 'Label',
    hint: 'Hint Text',
    placeholder: 'Select an option',
    status: 'default',
    theme: 'light',
    leadingIcon: Show,
    items: baseItems,
  },
};

// ── WithDefaultSelection ───────────────────────────────────────────────────────
// One item pre-selected on mount via defaultSelectedId.
export const WithDefaultSelection: Story = {
  args: {
    text: 'Label',
    hint: 'Hint Text',
    placeholder: 'Select an option',
    status: 'default',
    theme: 'light',
    leadingIcon: Show,
    items: baseItems,
    defaultSelectedId: 'dashboard',
  },
};

// ── WithDisabledItems ──────────────────────────────────────────────────────────
// Some items are disabled and cannot be selected.
export const WithDisabledItems: Story = {
  args: {
    text: 'Label',
    hint: 'Hint Text',
    placeholder: 'Select an option',
    status: 'default',
    theme: 'light',
    items: [
      { id: 'profile',   label: 'Profile',   state: 'default',  showLeadingIcon: true, leadingIcon: Show },
      { id: 'dashboard', label: 'Dashboard', state: 'disabled', showLeadingIcon: true, leadingIcon: Show },
      { id: 'settings',  label: 'Settings',  state: 'default',  showLeadingIcon: true, leadingIcon: Show },
      { id: 'help',      label: 'Help',      state: 'disabled', showLeadingIcon: true, leadingIcon: Show },
    ],
    state: true,
  },
};

// ── Disabled ───────────────────────────────────────────────────────────────────
// The entire field is disabled — no hover states, menu never opens.
export const Disabled: Story = {
  args: {
    text: 'Label',
    hint: 'Hint Text',
    status: 'default',
    disabled: true,
    theme: 'light',
    items: baseItems,
  },
};
