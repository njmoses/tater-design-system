import type { Meta, StoryObj } from '@storybook/react';
import { Show } from 'react-coolicons';
import { Tab } from './Tab';
import type { TabProps } from './Tab';

const meta: Meta<TabProps> = {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus', 'disabled'],
    },
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
type Story = StoryObj<TabProps>;

const renderTab = (args: TabProps) => (
  <Tab
    {...args}
    leadingIcon={args.showLeadingIcon ? Show : undefined}
    trailingIcon={args.showTrailingIcon ? Show : undefined}
  />
);

export const Default: Story = {
  render: renderTab,
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
  render: renderTab,
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
  render: renderTab,
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
  render: renderTab,
  args: {
    status: 'disabled',
    active: false,
    label: 'Tab label',
    showLeadingIcon: true,
    showTrailingIcon: false,
    theme: 'light',
  },
};

// Shows a full tab bar with multiple tab items and a bottom keyline
export const TabBar: Story = {
  render: (args) => {
    const tabs = [
      { label: 'Tab label', active: true },
      { label: 'Tab label', active: false },
      { label: 'Tab label', active: false },
      { label: 'Tab label', active: false },
    ];
    return (
      <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: 12 }}>
          {tabs.map((tab, i) => (
            <Tab
              key={i}
              status={args.status}
              active={tab.active}
              label={tab.label}
              showLeadingIcon={args.showLeadingIcon}
              showTrailingIcon={args.showTrailingIcon}
              leadingIcon={args.showLeadingIcon ? Show : undefined}
              trailingIcon={args.showTrailingIcon ? Show : undefined}
              theme={args.theme}
            />
          ))}
        </div>
        {/* Keyline */}
        <div style={{ height: 1, backgroundColor: '#c9c9cb', width: '100%' }} />
      </div>
    );
  },
  args: {
    status: 'default',
    showLeadingIcon: true,
    showTrailingIcon: false,
    theme: 'light',
  },
};
