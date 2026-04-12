import type { Meta, StoryObj } from '@storybook/react';
import { Show } from 'react-coolicons';
import { Button } from './Button';
import type { ButtonProps } from './Button';

type StoryArgs = ButtonProps & {
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
};

const meta: Meta<StoryArgs> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'tertiary'],
    },
    state: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus', 'disabled'],
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
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<StoryArgs>;

const renderButton = (args: StoryArgs) => {
  const { showLeadingIcon, showTrailingIcon, ...buttonProps } = args;
  return (
    <Button
      {...buttonProps}
      showLeadingIcon={showLeadingIcon}
      showTrailingIcon={showTrailingIcon}
      leadingIcon={showLeadingIcon ? Show : undefined}
      trailingIcon={showTrailingIcon ? Show : undefined}
    />
  );
};

export const Default: Story = {
  render: renderButton,
  args: {
    type: 'primary',
    state: "default",
    label: 'Button',
    showLeadingIcon: true,
    showTrailingIcon: false,
    theme: 'light',
  },
};

export const Hover: Story = {
  render: renderButton,
  args: {
    type: 'primary',
    state: 'hover',
    label: 'Button',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Focus: Story = {
  render: renderButton,
  args: {
    type: 'primary',
    state: 'focus',
    label: 'Button',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Disabled: Story = {
  render: renderButton,
  args: {
    type: 'primary',
    state: 'disabled',
    label: 'Button',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Secondary: Story = {
  render: renderButton,
  args: {
    type: 'secondary',
    state: 'default',
    label: 'Button',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Tertiary: Story = {
  render: renderButton,
  args: {
    type: 'tertiary',
    state: 'default',
    label: 'Button',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const AllVariants: Story = {
  render: (args) => {
    const { showLeadingIcon, showTrailingIcon, ...buttonProps } = args;
    const iconProps = {
      showLeadingIcon,
      showTrailingIcon,
      leadingIcon: showLeadingIcon ? Show : undefined,
      trailingIcon: showTrailingIcon ? Show : undefined,
    };
    const states = ['default', 'hover', 'focus', 'disabled'] as const;
    const types = ['primary', 'secondary', 'tertiary'] as const;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {types.map((type) => (
          <div key={type} style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            {states.map((state) => (
              <div key={state} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12, color: '#666', textTransform: 'capitalize' }}>
                  {type} / {state}
                </span>
                <Button
                  {...buttonProps}
                  {...iconProps}
                  type={type}
                  state={state}
                  label="Button"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
  args: {
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const InteractivePrimary: Story = {
  render: renderButton,
  args: {
    type: 'primary',
    state: 'default',
    label: 'Button',
    showLeadingIcon: false,
    showTrailingIcon: false,
    theme: 'light',
  },
};

export const InteractiveSecondary: Story = {
  render: renderButton,
  args: {
    type: 'secondary',
    state: 'default',
    label: 'Button',
    showLeadingIcon: false,
    showTrailingIcon: false,
    theme: 'light',
  },
};

export const InteractiveTertiary: Story = {
  render: renderButton,
  args: {
    type: 'tertiary',
    state: 'default',
    label: 'Button',
    showLeadingIcon: false,
    showTrailingIcon: false,
    theme: 'light',
  },
};
