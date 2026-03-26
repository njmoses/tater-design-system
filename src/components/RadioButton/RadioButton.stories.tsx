import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';
import type { RadioButtonProps } from './RadioButton';

const meta: Meta<RadioButtonProps> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus', 'disabled'],
    },
    active: {
      control: 'boolean',
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<RadioButtonProps>;

export const Default: Story = {
  args: {
    status: 'default',
    active: false,
    label: 'Radio Label',
    theme: 'light',
  },
};

export const Hover: Story = {
  args: {
    status: 'hover',
    active: false,
    label: 'Radio Label',
    theme: 'light',
  },
};

export const Focus: Story = {
  args: {
    status: 'focus',
    active: false,
    label: 'Radio Label',
    theme: 'light',
  },
};

export const Disabled: Story = {
  args: {
    status: 'disabled',
    active: false,
    label: 'Radio Label',
    theme: 'light',
  },
};
