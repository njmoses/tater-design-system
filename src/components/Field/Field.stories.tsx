import type { Meta, StoryObj } from '@storybook/react';
import { Info } from 'react-coolicons';
import { Field } from './Field';

const meta: Meta<typeof Field> = {
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
    leadingIcon: {
      control: 'boolean',
    },
    trailingIcon: {
      control: 'boolean',
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  args: {
    text: '',
    placeholder: 'Placeholder',
    status: 'default',
    filled: false,
    leadingIcon: true,
    trailingIcon: true,
    theme: 'light',
  },
};

export const DefaultFilled: Story = {
  args: {
    text: 'Entered value',
    placeholder: 'Placeholder',
    status: 'default',
    filled: true,
    leadingIcon: true,
    trailingIcon: true,
    theme: 'light',
  },
};

export const Hover: Story = {
  args: {
    text: '',
    placeholder: 'Placeholder',
    status: 'hover',
    filled: false,
    leadingIcon: true,
    trailingIcon: true,
    theme: 'light',
  },
};

export const HoverFilled: Story = {
  args: {
    text: 'Hovered with value',
    placeholder: 'Placeholder',
    status: 'hover',
    filled: true,
    leadingIcon: true,
    trailingIcon: true,
    theme: 'light',
  },
};

export const Focus: Story = {
  args: {
    text: '',
    placeholder: 'Placeholder',
    status: 'focus',
    filled: false,
    leadingIcon: true,
    trailingIcon: true,
    theme: 'light',
  },
};

export const FocusFilled: Story = {
  args: {
    text: 'Focused input',
    placeholder: 'Placeholder',
    status: 'focus',
    filled: true,
    leadingIcon: true,
    trailingIcon: true,
    theme: 'light',
  },
};

export const Error: Story = {
  args: {
    text: '',
    placeholder: 'Placeholder',
    status: 'error',
    filled: false,
    leadingIcon: true,
    trailingIcon: true,
    theme: 'light',
  },
};

export const ErrorFilled: Story = {
  args: {
    text: 'Invalid email',
    placeholder: 'Placeholder',
    status: 'error',
    filled: true,
    leadingIcon: true,
    trailingIcon: true,
    theme: 'light',
  },
};

export const Success: Story = {
  args: {
    text: '',
    placeholder: 'Placeholder',
    status: 'success',
    filled: false,
    leadingIcon: true,
    trailingIcon: true,
    theme: 'light',
  },
};

export const SuccessFilled: Story = {
  args: {
    text: 'Valid value',
    placeholder: 'Placeholder',
    status: 'success',
    filled: true,
    leadingIcon: true,
    trailingIcon: true,
    theme: 'light',
  },
};

export const Disabled: Story = {
  args: {
    text: '',
    placeholder: 'Placeholder',
    status: 'disabled',
    filled: false,
    leadingIcon: true,
    trailingIcon: true,
    theme: 'light',
  },
};

export const DisabledFilled: Story = {
  args: {
    text: 'Disabled value',
    placeholder: 'Placeholder',
    status: 'disabled',
    filled: true,
    leadingIcon: true,
    trailingIcon: true,
    theme: 'light',
  },
};

export const NoLeadingIcon: Story = {
  args: {
    text: 'No leading icon',
    placeholder: 'Placeholder',
    status: 'default',
    filled: true,
    leadingIcon: false,
    trailingIcon: true,
    theme: 'light',
  },
};

export const NoTrailingIcon: Story = {
  args: {
    text: 'No trailing icon',
    placeholder: 'Placeholder',
    status: 'default',
    filled: true,
    leadingIcon: true,
    trailingIcon: false,
    theme: 'light',
  },
};

export const NoIcons: Story = {
  args: {
    text: 'No icons',
    placeholder: 'Placeholder',
    status: 'default',
    filled: true,
    leadingIcon: false,
    trailingIcon: false,
    theme: 'light',
  },
};

export const CustomIcons: Story = {
  args: {
    text: 'Custom icons',
    placeholder: 'Placeholder',
    status: 'default',
    filled: true,
    leadingIcon: true,
    trailingIcon: true,
    leadingIconComponent: <Info />,
    trailingIconComponent: <Info />,
    theme: 'light',
  },
};

export const AllStatuses: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: '#666' }}>Default</span>
          <Field {...args} status="default" text="" filled={false} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: '#666' }}>Hover</span>
          <Field {...args} status="hover" text="" filled={false} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: '#666' }}>Focus</span>
          <Field {...args} status="focus" text="" filled={false} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: '#666' }}>Error</span>
          <Field {...args} status="error" text="" filled={false} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: '#666' }}>Success</span>
          <Field {...args} status="success" text="" filled={false} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: '#666' }}>Disabled</span>
          <Field {...args} status="disabled" text="" filled={false} />
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: '#666' }}>Default Filled</span>
          <Field {...args} status="default" text="Value" filled />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: '#666' }}>Hover Filled</span>
          <Field {...args} status="hover" text="Value" filled />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: '#666' }}>Focus Filled</span>
          <Field {...args} status="focus" text="Value" filled />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: '#666' }}>Error Filled</span>
          <Field {...args} status="error" text="Value" filled />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: '#666' }}>Success Filled</span>
          <Field {...args} status="success" text="Value" filled />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: '#666' }}>Disabled Filled</span>
          <Field {...args} status="disabled" text="Value" filled />
        </div>
      </div>
    </div>
  ),
  args: {
    placeholder: 'Placeholder',
    leadingIcon: true,
    trailingIcon: true,
    theme: 'light',
  },
};
