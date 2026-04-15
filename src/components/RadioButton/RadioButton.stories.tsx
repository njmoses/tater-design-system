import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
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

export const Interactive: Story = {
  render: (args) => {
    const [isActive, setIsActive] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <RadioButton
          {...args}
          active={isActive}
          onChange={(active) => setIsActive(active)}
          label={isActive ? 'Selected' : 'Click to select'}
        />
        <span style={{ fontSize: 12, color: '#666' }}>
          State: {isActive ? 'active' : 'inactive'}
        </span>
      </div>
    );
  },
  args: {
    status: 'default',
    theme: 'light',
  },
};
