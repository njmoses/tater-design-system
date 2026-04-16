import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Gift } from 'react-coolicons';
import { ButtonGroup } from './ButtonGroup';
import type { ButtonGroupProps } from './ButtonGroup';

const meta: Meta<ButtonGroupProps> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'selected', 'disabled'],
    },
    showLabel: { control: 'boolean' },
    showLeadingIcon: { control: 'boolean' },
    leadingIcon: { table: { disable: true } },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<ButtonGroupProps>;

const renderButtonGroup = (args: ButtonGroupProps) => (
  <ButtonGroup
    {...args}
    leadingIcon={args.showLeadingIcon ? Gift : undefined}
  />
);

export const Default: Story = {
  render: (args) => (
    <ButtonGroup
      {...args}
      leadingIcon={args.showLeadingIcon ? Gift : undefined}
      items={[
        { id: 'item-1' },
        { id: 'item-2' },
        { id: 'item-3' },
        { id: 'item-4' },
      ]}
    />
  ),
  args: {
    showLabel: true,
    label: 'Button Group',
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Hover: Story = {
  render: renderButtonGroup,
  args: {
    status: 'hover',
    showLabel: true,
    label: 'Button Group',
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Selected: Story = {
  render: renderButtonGroup,
  args: {
    status: 'selected',
    showLabel: true,
    label: 'Button Group',
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Disabled: Story = {
  render: renderButtonGroup,
  args: {
    status: 'disabled',
    showLabel: true,
    label: 'Button Group',
    showLeadingIcon: true,
    theme: 'light',
  },
};

// ─── New interactive stories ──────────────────────────────────────────────────

export const Interactive: Story = {
  render: (args) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <ButtonGroup
          {...args}
          items={[
            { id: 'item-1', label: 'Day',   showLeadingIcon: true, leadingIcon: Gift },
            { id: 'item-2', label: 'Week',  showLeadingIcon: true, leadingIcon: Gift },
            { id: 'item-3', label: 'Month', showLeadingIcon: true, leadingIcon: Gift },
            { id: 'item-4', label: 'Year',  showLeadingIcon: true, leadingIcon: Gift },
          ]}
          onSelectionChange={setSelectedId}
        />
        <span style={{ fontSize: 12, color: '#666' }}>
          Selected: {selectedId ?? 'none'}
        </span>
      </div>
    );
  },
  args: {
    theme: 'light',
  },
};

export const WithDefaultSelection: Story = {
  render: (args) => (
    <ButtonGroup
      {...args}
      items={[
        { id: 'item-1', label: 'Day',   showLeadingIcon: true, leadingIcon: Gift },
        { id: 'item-2', label: 'Week',  showLeadingIcon: true, leadingIcon: Gift },
        { id: 'item-3', label: 'Month', showLeadingIcon: true, leadingIcon: Gift },
        { id: 'item-4', label: 'Year',  showLeadingIcon: true, leadingIcon: Gift },
      ]}
      defaultSelectedId="item-2"
    />
  ),
  args: {
    theme: 'light',
  },
};

export const WithDisabledItem: Story = {
  render: (args) => (
    <ButtonGroup
      {...args}
      items={[
        { id: 'item-1', label: 'Day',   showLeadingIcon: true, leadingIcon: Gift },
        { id: 'item-2', label: 'Week',  showLeadingIcon: true, leadingIcon: Gift },
        { id: 'item-3', label: 'Month', status: 'disabled', showLeadingIcon: true, leadingIcon: Gift },
        { id: 'item-4', label: 'Year',  showLeadingIcon: true, leadingIcon: Gift },
      ]}
      defaultSelectedId="item-1"
    />
  ),
  args: {
    theme: 'light',
  },
};
