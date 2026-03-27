import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';
import type { ToggleProps } from './Toggle';

const meta: Meta<ToggleProps> = {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus', 'disabled'],
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<ToggleProps>;

export const Default: Story = {
  args: {
    status: "focus",
    active: false,
    label: 'Toggle Label',
    theme: 'light',
  },
};

export const Hover: Story = {
  args: {
    status: 'hover',
    active: false,
    label: 'Toggle Label',
    theme: 'light',
  },
};

export const Focus: Story = {
  args: {
    status: 'focus',
    active: false,
    label: 'Toggle Label',
    theme: 'light',
  },
};

export const Disabled: Story = {
  args: {
    status: 'disabled',
    active: false,
    label: 'Toggle Label',
    theme: 'light',
  },
};
