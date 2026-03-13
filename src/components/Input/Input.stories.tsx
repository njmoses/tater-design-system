import type { Meta, StoryObj } from '@storybook/react';
import { Info, Show } from 'react-coolicons';
import { Input } from './Input';
import type { InputProps } from './Input';

type StoryArgs = InputProps & {
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
};

const meta: Meta<StoryArgs> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus', 'error', 'success', 'disabled'],
    },
    labelStatus: {
      control: 'inline-radio',
      options: ['default', 'required', 'optional'],
    },
    filled: {
      control: 'boolean',
    },
    showInfoTip: {
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

const renderInput = (args: StoryArgs) => {
  const { showLeadingIcon, showTrailingIcon, ...inputProps } = args;
  return (
    <Input
      {...inputProps}
      leadingIcon={showLeadingIcon ? Show : undefined}
      trailingIcon={showTrailingIcon ? Info : undefined}
    />
  );
};

export const Default: Story = {
  render: renderInput,
  args: {
    label: 'Label',
    hint: 'Hint Text',
    placeholder: 'Placeholder',
    status: 'default',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Hover: Story = {
  render: renderInput,
  args: {
    label: 'Label',
    hint: 'Hint Text',
    placeholder: 'Placeholder',
    status: 'hover',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Focus: Story = {
  render: renderInput,
  args: {
    label: 'Label',
    hint: 'Hint Text',
    placeholder: 'Placeholder',
    status: 'focus',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Error: Story = {
  render: renderInput,
  args: {
    label: 'Label',
    hint: 'Hint Text',
    placeholder: 'Placeholder',
    status: 'error',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Success: Story = {
  render: renderInput,
  args: {
    label: 'Label',
    hint: 'Hint Text',
    placeholder: 'Placeholder',
    status: 'success',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Disabled: Story = {
  render: renderInput,
  args: {
    label: 'Label',
    hint: 'Hint Text',
    placeholder: 'Placeholder',
    status: 'disabled',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const FilledTrue: Story = {
  render: renderInput,
  args: {
    label: 'Label',
    hint: 'Hint Text',
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
  render: renderInput,
  args: {
    label: 'Label',
    hint: 'Hint Text',
    text: '',
    placeholder: 'Placeholder',
    status: 'default',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};
