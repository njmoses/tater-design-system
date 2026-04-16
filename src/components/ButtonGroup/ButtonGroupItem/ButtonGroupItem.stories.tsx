import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Gift } from 'react-coolicons';
import { ButtonGroupItem } from './ButtonGroupItem';
import type { ButtonGroupItemProps } from './ButtonGroupItem';

const meta: Meta<ButtonGroupItemProps> = {
  title: 'Components/ButtonGroupItem',
  component: ButtonGroupItem,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'selected', 'disabled'],
    },
    selected: { control: 'boolean' },
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
type Story = StoryObj<ButtonGroupItemProps>;

const renderItem = (args: ButtonGroupItemProps) => (
  <ButtonGroupItem
    {...args}
    leadingIcon={args.showLeadingIcon ? Gift : undefined}
  />
);

export const Default: Story = {
  render: renderItem,
  args: {
    status: 'default',
    selected: false,
    showLabel: true,
    label: 'Button',
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Hover: Story = {
  render: renderItem,
  args: {
    status: 'hover',
    selected: false,
    showLabel: true,
    label: 'Button',
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Selected: Story = {
  render: renderItem,
  args: {
    status: 'default',
    selected: true,
    showLabel: true,
    label: 'Button',
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Disabled: Story = {
  render: renderItem,
  args: {
    status: 'disabled',
    selected: false,
    showLabel: true,
    label: 'Button',
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <ButtonGroupItem
          {...args}
          selected={isSelected}
          onClick={() => setIsSelected((prev) => !prev)}
          leadingIcon={args.showLeadingIcon ? Gift : undefined}
        />
        <span style={{ fontSize: 12, color: '#666' }}>
          State: {isSelected ? 'selected' : 'unselected'}
        </span>
      </div>
    );
  },
  args: {
    status: 'default',
    showLabel: true,
    label: 'Button',
    showLeadingIcon: true,
    theme: 'light',
  },
};
