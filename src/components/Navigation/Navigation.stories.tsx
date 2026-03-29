import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';
import type { NavigationProps } from './Navigation';

const meta: Meta<NavigationProps> = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus', 'selected'],
    },
    loginButtonState: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focused', 'disabled'],
    },
    signupButtonState: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focused', 'disabled'],
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<NavigationProps>;

export const Default: Story = {
  args: {
    status: 'default',
    loginButtonState: 'default',
    signupButtonState: 'default',
    theme: 'light',
  },
};

export const Hover: Story = {
  args: {
    status: 'hover',
    loginButtonState: 'default',
    signupButtonState: 'default',
    theme: 'light',
  },
};

export const Focus: Story = {
  args: {
    status: 'focus',
    loginButtonState: 'default',
    signupButtonState: 'default',
    theme: 'light',
  },
};

export const Selected: Story = {
  args: {
    status: 'selected',
    loginButtonState: 'default',
    signupButtonState: 'default',
    theme: 'light',
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {(['default', 'hover', 'focus', 'selected'] as const).map((status) => (
        <div key={status}>
          <p style={{ fontSize: 11, color: '#999', marginBottom: 8, fontFamily: 'sans-serif' }}>
            {status}
          </p>
          <Navigation status={status} />
        </div>
      ))}
    </div>
  ),
};
