import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Navigation } from './Navigation';
import type { NavigationProps } from './Navigation';
import { NavItem } from './NavItem';
import type { NavItemStatus } from './NavItem/NavItem';

const NAV_ITEM_STATUSES: NavItemStatus[] = ['default', 'hover', 'focus', 'selected'];

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
    status: 'default' satisfies NavItemStatus,
    loginButtonState: 'default',
    signupButtonState: 'default',
    theme: 'light',
  },
};

export const Hover: Story = {
  args: {
    status: 'hover' satisfies NavItemStatus,
    loginButtonState: 'default',
    signupButtonState: 'default',
    theme: 'light',
  },
};

export const Focus: Story = {
  args: {
    status: 'focus' satisfies NavItemStatus,
    loginButtonState: 'default',
    signupButtonState: 'default',
    theme: 'light',
  },
};

export const Selected: Story = {
  args: {
    status: 'selected' satisfies NavItemStatus,
    loginButtonState: 'default',
    signupButtonState: 'default',
    theme: 'light',
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {NAV_ITEM_STATUSES.map((status) => (
        <div key={status}>
          <p style={{ fontSize: 11, color: '#999', marginBottom: 8, fontFamily: 'sans-serif' }}>
            {status}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div>
              <p
                style={{
                  fontSize: 10,
                  color: '#bbb',
                  marginBottom: 4,
                  fontFamily: 'sans-serif',
                }}
              >
                NavItem
              </p>
              <NavItem label="Nav Item" status={status} theme="light" />
            </div>
            <div>
              <p
                style={{
                  fontSize: 10,
                  color: '#bbb',
                  marginBottom: 4,
                  fontFamily: 'sans-serif',
                }}
              >
                Navigation
              </p>
              <Navigation status={status} />
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [loginClicks, setLoginClicks] = useState(0);
    const [signupClicks, setSignupClicks] = useState(0);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Navigation
          status="default"
          theme="light"
          navItems={[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'services', label: 'Services' },
            { id: 'contact', label: 'Contact' },
          ]}
          onSelectionChange={(id) => setSelectedId(id)}
          onLoginClick={() => setLoginClicks((n) => n + 1)}
          onSignupClick={() => setSignupClicks((n) => n + 1)}
        />
        <div style={{ fontSize: 12, color: '#666', fontFamily: 'sans-serif' }}>
          <p>Selected: {selectedId ?? 'none'}</p>
          <p>Login clicks: {loginClicks} · Signup clicks: {signupClicks}</p>
        </div>
      </div>
    );
  },
};

export const WithDefaultSelection: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState<string>('about');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Navigation
          status="default"
          theme="light"
          defaultSelectedId="about"
          navItems={[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'services', label: 'Services' },
            { id: 'contact', label: 'Contact' },
          ]}
          onSelectionChange={(id) => setSelectedId(id)}
        />
        <p style={{ fontSize: 12, color: '#666', fontFamily: 'sans-serif' }}>
          Selected: {selectedId}
        </p>
      </div>
    );
  },
};
