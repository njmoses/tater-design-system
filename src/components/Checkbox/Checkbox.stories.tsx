import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import type { CheckboxProps } from './Checkbox';

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    state: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus', 'disabled', 'error'],
    },
    status: {
      control: 'inline-radio',
      options: ['default', 'selected', 'intermediate'],
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    state: 'default',
    status: 'default',
    label: 'Check Label',
    theme: 'light',
  },
};

export const Hover: Story = {
  args: {
    state: 'hover',
    status: 'default',
    label: 'Check Label',
    theme: 'light',
  },
};

export const Focus: Story = {
  args: {
    state: 'focus',
    status: 'default',
    label: 'Check Label',
    theme: 'light',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    status: 'default',
    label: 'Check Label',
    theme: 'light',
  },
};

export const Error: Story = {
  args: {
    state: 'error',
    status: 'default',
    label: 'Check Label',
    theme: 'light',
  },
};
