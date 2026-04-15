import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
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
    status: "default",
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

export const Interactive: Story = {
  render: (args) => {
    const [isActive, setIsActive] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Toggle
          {...args}
          active={isActive}
          onChange={(active) => setIsActive(active)}
          label={isActive ? 'On' : 'Off'}
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
