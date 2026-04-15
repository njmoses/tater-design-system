import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Show } from 'react-coolicons';
import { Tab } from './Tab';
import type { TabProps } from './Tab';
import { TabItem } from './TabItem/TabItem';
import type { TabItemProps } from './TabItem/TabItem';

const meta: Meta<TabProps> = {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<TabProps>;

// ─── Existing single-item reference stories (rendered via TabItem) ───────────

const renderTabItem = (args: TabItemProps) => (
  <TabItem
    {...args}
    leadingIcon={args.showLeadingIcon ? Show : undefined}
    trailingIcon={args.showTrailingIcon ? Show : undefined}
  />
);

export const Default: StoryObj<TabItemProps> = {
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

export const Hover: StoryObj<TabItemProps> = {
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

export const Focus: StoryObj<TabItemProps> = {
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

export const Disabled: StoryObj<TabItemProps> = {
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

// ─── TabBar (migrated to Tab container) ─────────────────────────────────────

export const TabBar: Story = {
  render: (args) => (
    <Tab
      {...args}
      items={[
        { id: 'tab-1', label: 'Tab label', showLeadingIcon: true, leadingIcon: Show },
        { id: 'tab-2', label: 'Tab label', showLeadingIcon: true, leadingIcon: Show },
        { id: 'tab-3', label: 'Tab label', showLeadingIcon: true, leadingIcon: Show },
        { id: 'tab-4', label: 'Tab label', showLeadingIcon: true, leadingIcon: Show },
      ]}
      defaultActiveId="tab-1"
    />
  ),
  args: {
    theme: 'light',
  },
};

// ─── New stories ─────────────────────────────────────────────────────────────

export const Interactive: Story = {
  render: (args) => {
    const [activeId, setActiveId] = useState('tab-1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Tab
          {...args}
          items={[
            { id: 'tab-1', label: 'Overview', showLeadingIcon: true, leadingIcon: Show },
            { id: 'tab-2', label: 'Details', showLeadingIcon: true, leadingIcon: Show },
            { id: 'tab-3', label: 'Settings', showLeadingIcon: true, leadingIcon: Show },
          ]}
          defaultActiveId={activeId}
          onTabChange={setActiveId}
        />
        <span style={{ fontSize: 12, color: '#666' }}>Active tab: {activeId}</span>
      </div>
    );
  },
  args: {
    theme: 'light',
  },
};

export const WithDefaultActive: Story = {
  render: (args) => (
    <Tab
      {...args}
      items={[
        { id: 'tab-1', label: 'First', showLeadingIcon: true, leadingIcon: Show },
        { id: 'tab-2', label: 'Second', showLeadingIcon: true, leadingIcon: Show },
        { id: 'tab-3', label: 'Third', showLeadingIcon: true, leadingIcon: Show },
      ]}
      defaultActiveId="tab-2"
    />
  ),
  args: {
    theme: 'light',
  },
};

export const WithDisabledTab: Story = {
  render: (args) => (
    <Tab
      {...args}
      items={[
        { id: 'tab-1', label: 'Enabled', showLeadingIcon: true, leadingIcon: Show },
        { id: 'tab-2', label: 'Disabled', status: 'disabled', showLeadingIcon: true, leadingIcon: Show },
        { id: 'tab-3', label: 'Also Enabled', showLeadingIcon: true, leadingIcon: Show },
      ]}
      defaultActiveId="tab-1"
    />
  ),
  args: {
    theme: 'light',
  },
};
