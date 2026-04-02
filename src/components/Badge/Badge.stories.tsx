import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '.';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    status: {
      control: 'select',
      options: ['default', 'information', 'error', 'warning', 'success'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    status: 'default',
    label: '99',
    theme: 'light',
  },
};

export const Information: Story = {
  args: {
    status: 'information',
    label: '99',
    theme: 'light',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    label: '99',
    theme: 'light',
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    label: '99',
    theme: 'light',
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    label: '99',
    theme: 'light',
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Badge {...args} status="default" label="99" />
      <Badge {...args} status="information" label="99" />
      <Badge {...args} status="error" label="99" />
      <Badge {...args} status="warning" label="99" />
      <Badge {...args} status="success" label="99" />
    </div>
  ),
  args: {
    theme: 'light',
  },
};
