import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Heart01 } from 'react-coolicons';
import { VerticalNavItem } from './VerticalNavItem';
import type { VerticalNavItemProps } from './VerticalNavItem';

const meta: Meta<VerticalNavItemProps> = {
  title: 'Components/VerticalNavItem',
  component: VerticalNavItem,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus'],
    },
    selected: { control: 'boolean' },
    level: {
      control: 'inline-radio',
      options: [1, 2],
    },
    showLeadingIcon: { control: 'boolean' },
    leadingIcon: { table: { disable: true } },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<VerticalNavItemProps>;

const renderItem = (args: VerticalNavItemProps) => (
  <div style={{ width: 220 }}>
    <VerticalNavItem
      {...args}
      leadingIcon={args.showLeadingIcon ? Heart01 : undefined}
    />
  </div>
);

export const Default: Story = {
  render: renderItem,
  args: {
    label: 'Anchor Item',
    status: 'default',
    selected: false,
    level: 1,
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Hover: Story = {
  render: renderItem,
  args: {
    label: 'Anchor Item',
    status: 'hover',
    selected: false,
    level: 1,
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Focus: Story = {
  render: renderItem,
  args: {
    label: 'Anchor Item',
    status: 'focus',
    selected: false,
    level: 1,
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Selected: Story = {
  render: renderItem,
  args: {
    label: 'Anchor Item',
    status: 'default',
    selected: true,
    level: 1,
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Unselected: Story = {
  render: renderItem,
  args: {
    label: 'Anchor Item',
    status: 'default',
    selected: false,
    level: 1,
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Level1: Story = {
  render: renderItem,
  args: {
    label: 'Anchor Item',
    status: 'default',
    selected: false,
    level: 1,
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Level2: Story = {
  render: renderItem,
  args: {
    label: 'Anchor Item',
    status: 'default',
    selected: false,
    level: 2,
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);
    return (
      <div style={{ width: 220 }}>
        <VerticalNavItem
          label="Anchor Item"
          status="default"
          selected={selected}
          level={1}
          showLeadingIcon
          leadingIcon={Heart01}
          theme="light"
          onClick={() => setSelected((prev) => !prev)}
        />
        <p style={{ fontSize: 12, marginTop: 8, color: '#666' }}>
          Selected: {String(selected)} — click to toggle
        </p>
      </div>
    );
  },
};
