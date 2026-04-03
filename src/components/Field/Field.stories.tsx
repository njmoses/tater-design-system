import type { Meta, StoryObj } from '@storybook/react';
import { Info, Show } from 'react-coolicons';
import { Field } from './Field';
import type { FieldProps } from './Field';

type StoryArgs = FieldProps & {
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
};

const meta: Meta<StoryArgs> = {
  title: 'Components/Field',
  component: Field,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus', 'error', 'success', 'disabled'],
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

const renderField = (args: StoryArgs) => {
  const { showLeadingIcon, showTrailingIcon, ...fieldProps } = args;
  return (
    <Field
      {...fieldProps}
      leadingIcon={showLeadingIcon ? Show : undefined}
      trailingIcon={showTrailingIcon ? Info : undefined}
    />
  );
};

export const Default: Story = {
  render: renderField,
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

export const DefaultFilled: Story = {
  render: renderField,
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

export const Hover: Story = {
  render: renderField,
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

export const HoverFilled: Story = {
  render: renderField,
  args: {
    text: 'Hovered with value',
    placeholder: 'Placeholder',
    status: 'hover',
    filled: true,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Focus: Story = {
  render: renderField,
  args: {
    text: '',
    placeholder: 'Placeholder',
    status: 'focus',
    filled: false,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const FocusFilled: Story = {
  render: renderField,
  args: {
    text: 'Focused input',
    placeholder: 'Placeholder',
    status: 'focus',
    filled: true,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Error: Story = {
  render: renderField,
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

export const ErrorFilled: Story = {
  render: renderField,
  args: {
    text: 'Invalid email',
    placeholder: 'Placeholder',
    status: 'error',
    filled: true,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Success: Story = {
  render: renderField,
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

export const SuccessFilled: Story = {
  render: renderField,
  args: {
    text: 'Valid value',
    placeholder: 'Placeholder',
    status: 'success',
    filled: true,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Disabled: Story = {
  render: renderField,
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

export const DisabledFilled: Story = {
  render: renderField,
  args: {
    text: 'Disabled value',
    placeholder: 'Placeholder',
    status: 'disabled',
    filled: true,
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const LeadingIconOnly: Story = {
  render: renderField,
  args: {
    text: 'Leading icon only',
    placeholder: 'Placeholder',
    status: 'default',
    filled: true,
    showLeadingIcon: true,
    showTrailingIcon: false,
    theme: 'light',
  },
};

export const TrailingIconOnly: Story = {
  render: renderField,
  args: {
    text: 'Trailing icon only',
    placeholder: 'Placeholder',
    status: 'default',
    filled: true,
    showLeadingIcon: false,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const NoIcons: Story = {
  render: renderField,
  args: {
    text: 'No icons',
    placeholder: 'Placeholder',
    status: 'default',
    filled: true,
    showLeadingIcon: false,
    showTrailingIcon: false,
    theme: 'light',
  },
};

export const Interactive: Story = {
  render: renderField,
  args: {
    placeholder: 'Type something...',
    status: 'default',
    theme: 'light',
  },
};

export const AllStatuses: Story = {
  render: (args) => {
    const { showLeadingIcon, showTrailingIcon, ...fieldProps } = args;
    const iconProps = {
      leadingIcon: showLeadingIcon ? Show : undefined,
      trailingIcon: showTrailingIcon ? Info : undefined,
    };
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#666' }}>Default</span>
            <Field {...fieldProps} {...iconProps} status="default" text="" filled={false} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#666' }}>Hover</span>
            <Field {...fieldProps} {...iconProps} status="hover" text="" filled={false} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#666' }}>Focus</span>
            <Field {...fieldProps} {...iconProps} status="focus" text="" filled={false} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#666' }}>Error</span>
            <Field {...fieldProps} {...iconProps} status="error" text="" filled={false} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#666' }}>Success</span>
            <Field {...fieldProps} {...iconProps} status="success" text="" filled={false} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#666' }}>Disabled</span>
            <Field {...fieldProps} {...iconProps} status="disabled" text="" filled={false} />
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#666' }}>Default Filled</span>
            <Field {...fieldProps} {...iconProps} status="default" text="Value" filled />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#666' }}>Hover Filled</span>
            <Field {...fieldProps} {...iconProps} status="hover" text="Value" filled />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#666' }}>Focus Filled</span>
            <Field {...fieldProps} {...iconProps} status="focus" text="Value" filled />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#666' }}>Error Filled</span>
            <Field {...fieldProps} {...iconProps} status="error" text="Value" filled />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#666' }}>Success Filled</span>
            <Field {...fieldProps} {...iconProps} status="success" text="Value" filled />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 12, color: '#666' }}>Disabled Filled</span>
            <Field {...fieldProps} {...iconProps} status="disabled" text="Value" filled />
          </div>
        </div>
      </div>
    );
  },
  args: {
    placeholder: 'Placeholder',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};
