import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Show } from 'react-coolicons';
import { TabItem } from './TabItem';
import type { TabItemProps } from './TabItem';

const meta: Meta<TabItemProps> = {
  title: 'Components/TabItem',
  component: TabItem,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus', 'disabled'],
    },
    active: { control: 'boolean' },
    showLeadingIcon: { control: 'boolean' },
    showTrailingIcon: { control: 'boolean' },
    leadingIcon: { table: { disable: true } },
    trailingIcon: { table: { disable: true } },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<TabItemProps>;

const renderTabItem = (args: TabItemProps) => (
  <TabItem
    {...args}
    leadingIcon={args.showLeadingIcon ? Show : undefined}
    trailingIcon={args.showTrailingIcon ? Show : undefined}
  />
);

export const Default: Story = {
  render: renderTabItem,
  args: {
    status: 'default',
    active: false,
    label: 'Tab label',
    showLeadingIcon: true,
    showTrailingIcon: false,
    theme: 'light',
  },
};

export const Hover: Story = {
  render: renderTabItem,
  args: {
    status: 'hover',
    active: false,
    label: 'Tab label',
    showLeadingIcon: true,
    showTrailingIcon: false,
    theme: 'light',
  },
};

export const Focus: Story = {
  render: renderTabItem,
  args: {
    status: 'focus',
    active: false,
    label: 'Tab label',
    showLeadingIcon: true,
    showTrailingIcon: false,
    theme: 'light',
  },
};

export const Disabled: Story = {
  render: renderTabItem,
  args: {
    status: 'disabled',
    active: false,
    label: 'Tab label',
    showLeadingIcon: true,
    showTrailingIcon: false,
    theme: 'light',
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [isActive, setIsActive] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <TabItem
          {...args}
          active={isActive}
          onClick={() => setIsActive((prev) => !prev)}
          leadingIcon={args.showLeadingIcon ? Show : undefined}
          trailingIcon={args.showTrailingIcon ? Show : undefined}
        />
        <span style={{ fontSize: 12, color: '#666' }}>
          State: {isActive ? 'active' : 'inactive'}
        </span>
      </div>
    );
  },
  args: {
    status: 'default',
    label: 'Tab label',
    showLeadingIcon: true,
    showTrailingIcon: false,
    theme: 'light',
  },
};
