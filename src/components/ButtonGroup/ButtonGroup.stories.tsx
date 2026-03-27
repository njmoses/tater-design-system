import type { Meta, StoryObj } from '@storybook/react';
import { Gift } from 'react-coolicons';
import { ButtonGroup } from './ButtonGroup';
import type { ButtonGroupProps } from './ButtonGroup';

const meta: Meta<ButtonGroupProps> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus', 'disabled'],
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
type Story = StoryObj<ButtonGroupProps>;

const renderButtonGroup = (args: ButtonGroupProps) => (
  <ButtonGroup
    {...args}
    leadingIcon={args.showLeadingIcon ? Gift : undefined}
  />
);

export const Default: Story = {
  render: renderButtonGroup,
  args: {
    status: 'default',
    label: 'Button Group',
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Hover: Story = {
  render: renderButtonGroup,
  args: {
    status: 'hover',
    label: 'Button Group',
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Focus: Story = {
  render: renderButtonGroup,
  args: {
    status: 'focus',
    label: 'Button Group',
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Disabled: Story = {
  render: renderButtonGroup,
  args: {
    status: 'disabled',
    label: 'Button Group',
    showLeadingIcon: true,
    theme: 'light',
  },
};
