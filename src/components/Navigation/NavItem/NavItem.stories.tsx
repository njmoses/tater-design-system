import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { NavItem } from './NavItem';
import type { NavItemProps } from './NavItem';

const meta: Meta<NavItemProps> = {
  title: 'Components/NavItem',
  component: NavItem,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus', 'selected'],
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<NavItemProps>;

export const Default: Story = {
  args: {
    label: 'Nav Item',
    status: 'default',
    theme: 'light',
  },
};

export const Hover: Story = {
  args: {
    label: 'Nav Item',
    status: 'hover',
    theme: 'light',
  },
};

export const Focus: Story = {
  args: {
    label: 'Nav Item',
    status: 'focus',
    theme: 'light',
  },
};

export const Selected: Story = {
  args: {
    label: 'Nav Item',
    status: 'selected',
    theme: 'light',
  },
};

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);
    return (
      <div>
        <NavItem
          label="Nav Item"
          status="default"
          selected={selected}
          theme="light"
          onClick={() => setSelected((prev) => !prev)}
        />
        <p style={{ fontSize: 12, marginTop: 8, color: '#666', fontFamily: 'sans-serif' }}>
          Selected: {String(selected)} — click to toggle
        </p>
      </div>
    );
  },
};
