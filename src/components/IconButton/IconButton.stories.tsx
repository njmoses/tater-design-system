import type { Meta, StoryObj } from '@storybook/react';
import { Heart01 } from 'react-coolicons';
import { IconButton } from './IconButton';
import type { IconButtonProps } from './IconButton';

const meta: Meta<IconButtonProps> = {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'tertiary'],
    },
    state: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focused', 'disabled'],
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    Icon: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<IconButtonProps>;

export const Default: Story = {
  args: {
    type: 'primary',
    state: 'default',
    Icon: Heart01,
    theme: 'light',
  },
};

export const Hover: Story = {
  args: {
    type: 'primary',
    state: 'hover',
    Icon: Heart01,
    theme: 'light',
  },
};

export const Focus: Story = {
  args: {
    type: 'primary',
    state: 'focused',
    Icon: Heart01,
    theme: 'light',
  },
};

export const Disabled: Story = {
  args: {
    type: 'primary',
    state: 'disabled',
    Icon: Heart01,
    theme: 'light',
  },
};

export const AllVariants: Story = {
  render: (args) => {
    const states = ['default', 'hover', 'focused', 'disabled'] as const;
    const types = ['primary', 'secondary', 'tertiary'] as const;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {types.map((type) => (
          <div key={type} style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center' }}>
            {states.map((state) => (
              <div key={state} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12, color: '#666', textTransform: 'capitalize' }}>
                  {type} / {state}
                </span>
                <IconButton
                  {...args}
                  type={type}
                  state={state}
                  Icon={Heart01}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
  args: {
    theme: 'light',
  },
};
