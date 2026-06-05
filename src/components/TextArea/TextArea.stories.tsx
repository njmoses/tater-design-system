import type { Meta, StoryObj } from '@storybook/react';
import { Info, Show } from 'react-coolicons';
import { TextArea } from './TextArea';
import type { TextAreaProps } from './TextArea';

type StoryArgs = TextAreaProps & {
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
};

const meta: Meta<StoryArgs> = {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'active', 'error', 'success', 'disabled'],
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
    showHintText: {
      control: 'boolean',
    },
    hideLabel: {
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

const renderTextArea = (args: StoryArgs) => {
  const { showLeadingIcon, showTrailingIcon, ...textAreaProps } = args;
  return (
    <TextArea
      {...textAreaProps}
      leadingIcon={showLeadingIcon ? Show : undefined}
      trailingIcon={showTrailingIcon ? Info : undefined}
    />
  );
};

export const Default: Story = {
  render: renderTextArea,
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    status: 'default',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Hover: Story = {
  render: renderTextArea,
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    status: 'hover',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Active: Story = {
  render: renderTextArea,
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    status: 'active',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Error: Story = {
  render: renderTextArea,
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    status: 'error',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Success: Story = {
  render: renderTextArea,
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    status: 'success',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Disabled: Story = {
  render: renderTextArea,
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    status: 'disabled',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const WithLabel: Story = {
  render: renderTextArea,
  args: {
    label: 'Label',
    hideLabel: false,
    placeholder: 'Placeholder',
    status: 'default',
    filled: false,
    theme: 'light',
  },
};

export const WithoutLabel: Story = {
  render: renderTextArea,
  args: {
    label: 'Label',
    hideLabel: true,
    placeholder: 'Placeholder',
    status: 'default',
    filled: false,
    theme: 'light',
  },
};

export const WithHintText: Story = {
  render: renderTextArea,
  args: {
    label: 'Label',
    hintText: 'Hint Text',
    showHintText: true,
    placeholder: 'Placeholder',
    status: 'default',
    filled: false,
    theme: 'light',
  },
};

export const WithIcons: Story = {
  render: renderTextArea,
  args: {
    label: 'Label',
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
  render: renderTextArea,
  args: {
    label: 'Label',
    hintText: 'Hint Text',
    showHintText: true,
    placeholder: 'Type something...',
    status: 'default',
    theme: 'light',
  },
};
