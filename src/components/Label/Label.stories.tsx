import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'required', 'optional'],
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Label',
    status: 'default',
    theme: 'light',
    disabled: true,
    showInfoTip: true,
    htmlFor: 'input-default',
  },
};

export const Required: Story = {
  args: {
    text: 'Email address',
    status: 'required',
    theme: 'light',
    disabled: false,
    showInfoTip: false,
    htmlFor: 'input-required',
  },
};

export const Optional: Story = {
  args: {
    text: 'Middle name',
    status: 'optional',
    theme: 'light',
    disabled: false,
    showInfoTip: false,
    htmlFor: 'input-optional',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Label',
    status: 'default',
    theme: 'light',
    disabled: true,
    showInfoTip: false,
    htmlFor: 'input-disabled',
  },
};

export const WithInfoTip: Story = {
  args: {
    text: 'Account type',
    status: 'default',
    theme: 'light',
    disabled: false,
    showInfoTip: true,
    htmlFor: 'input-infotip',
  },
};

export const AllStatuses: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Label {...args} text="Default label"  status="default"   htmlFor="all-default" />
      <Label {...args} text="Required label" status="required"  htmlFor="all-required" />
      <Label {...args} text="Optional label" status="optional"  htmlFor="all-optional" />
    </div>
  ),
  args: {
    theme: 'light',
    disabled: false,
    showInfoTip: false,
  },
};
