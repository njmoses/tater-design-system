import type { Meta, StoryObj } from '@storybook/react';
import { Info, Show } from 'react-coolicons';
import { AreaField } from './AreaField';
import type { AreaFieldProps } from './AreaField';

type StoryArgs = AreaFieldProps & {
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
};

const meta: Meta<StoryArgs> = {
  title: 'Components/AreaField',
  component: AreaField,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'active', 'error', 'success', 'disabled'],
    },
    filled: {
      control: 'boolean',
    },
    showLeadingIcon: {
      control: 'boolean',
    },
    showTrailingIcon: {
      control: 'boolean',
    },
    leadingIcon: {
      table: { disable: true },
    },
    trailingIcon: {
      table: { disable: true },
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<StoryArgs>;

const renderAreaField = (args: StoryArgs) => {
  const { showLeadingIcon, showTrailingIcon, ...areaFieldProps } = args;
  return (
    <AreaField
      {...areaFieldProps}
      leadingIcon={showLeadingIcon ? Show : undefined}
      trailingIcon={showTrailingIcon ? Info : undefined}
    />
  );
};

export const Default: Story = {
  render: renderAreaField,
  args: {
    text: '',
    placeholder: 'Placeholder',
    status: 'default',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Hover: Story = {
  render: renderAreaField,
  args: {
    text: '',
    placeholder: 'Placeholder',
    status: 'hover',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Active: Story = {
  render: renderAreaField,
  args: {
    text: '',
    placeholder: 'Placeholder',
    status: 'active',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Error: Story = {
  render: renderAreaField,
  args: {
    text: '',
    placeholder: 'Placeholder',
    status: 'error',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Success: Story = {
  render: renderAreaField,
  args: {
    text: '',
    placeholder: 'Placeholder',
    status: 'success',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Disabled: Story = {
  render: renderAreaField,
  args: {
    text: '',
    placeholder: 'Placeholder',
    status: 'disabled',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const FilledTrue: Story = {
  render: renderAreaField,
  args: {
    text: 'Entered value',
    placeholder: 'Placeholder',
    status: 'default',
    filled: true,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const FilledFalse: Story = {
  render: renderAreaField,
  args: {
    text: '',
    placeholder: 'Placeholder',
    status: 'default',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const WithIcons: Story = {
  render: renderAreaField,
  args: {
    text: 'Text area with icons',
    placeholder: 'Placeholder',
    status: 'default',
    filled: true,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Interactive: Story = {
  render: renderAreaField,
  args: {
    placeholder: 'Type something...',
    status: 'default',
    theme: 'light',
  },
};
