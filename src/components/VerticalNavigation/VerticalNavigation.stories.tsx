import type { Meta, StoryObj } from '@storybook/react';
import { Info } from 'react-coolicons';
import { VerticalNavigation } from './VerticalNavigation';
import type { VerticalNavigationProps } from './VerticalNavigation';

type StoryArgs = VerticalNavigationProps & {
  showLeadingIconToggle?: boolean;
};

const meta: Meta<StoryArgs> = {
  title: 'Components/VerticalNavigation',
  component: VerticalNavigation,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus'],
    },
    selected: {
      control: 'boolean',
    },
    level: {
      control: 'inline-radio',
      options: [1, 2],
    },
    showLeadingIcon: {
      control: 'boolean',
    },
    leadingIcon: {
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

const render = (args: StoryArgs) => (
  <div style={{ width: 220 }}>
    <VerticalNavigation
      {...args}
      leadingIcon={args.showLeadingIcon ? Info : undefined}
    />
  </div>
);

export const Default: Story = {
  render,
  args: {
    status: 'default',
    selected: false,
    level: 1,
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Hover: Story = {
  render,
  args: {
    status: 'hover',
    selected: false,
    level: 1,
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Focus: Story = {
  render,
  args: {
    status: 'focus',
    selected: false,
    level: 1,
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const DefaultSelected: Story = {
  render,
  args: {
    status: 'default',
    selected: true,
    level: 1,
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const HoverSelected: Story = {
  render,
  args: {
    status: 'hover',
    selected: true,
    level: 1,
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const FocusSelected: Story = {
  render,
  args: {
    status: 'focus',
    selected: true,
    level: 1,
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Level2: Story = {
  render,
  args: {
    status: 'default',
    selected: false,
    level: 2,
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const Level2Selected: Story = {
  render,
  args: {
    status: 'default',
    selected: true,
    level: 2,
    showLeadingIcon: true,
    theme: 'light',
  },
};

export const NoIcon: Story = {
  render,
  args: {
    status: 'default',
    selected: false,
    level: 1,
    showLeadingIcon: false,
    theme: 'light',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>
      <div>
        <p style={{ fontSize: 12, marginBottom: 8, color: '#666' }}>Level 1</p>
        <div style={{ display: 'flex', gap: 32 }}>
          {(['default', 'hover', 'focus'] as const).map((status) => (
            <div key={status} style={{ width: 180 }}>
              <p style={{ fontSize: 11, marginBottom: 4, color: '#999' }}>{status}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <p style={{ fontSize: 10, color: '#bbb', marginBottom: 2 }}>unselected</p>
                  <VerticalNavigation
                    status={status}
                    selected={false}
                    level={1}
                    showLeadingIcon={true}
                    leadingIcon={Info}
                    initialItems={[
                      { id: 'a', label: 'Anchor Item' },
                      { id: 'b', label: 'Anchor Item' },
                    ]}
                  />
                </div>
                <div>
                  <p style={{ fontSize: 10, color: '#bbb', marginBottom: 2 }}>selected</p>
                  <VerticalNavigation
                    status={status}
                    selected={true}
                    level={1}
                    showLeadingIcon={true}
                    leadingIcon={Info}
                    initialItems={[
                      { id: 'c', label: 'Anchor Item' },
                      { id: 'd', label: 'Anchor Item' },
                    ]}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p style={{ fontSize: 12, marginBottom: 8, color: '#666' }}>Level 2</p>
        <div style={{ display: 'flex', gap: 32 }}>
          {(['default', 'hover', 'focus'] as const).map((status) => (
            <div key={status} style={{ width: 180 }}>
              <p style={{ fontSize: 11, marginBottom: 4, color: '#999' }}>{status}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <p style={{ fontSize: 10, color: '#bbb', marginBottom: 2 }}>unselected</p>
                  <VerticalNavigation
                    status={status}
                    selected={false}
                    level={2}
                    showLeadingIcon={true}
                    leadingIcon={Info}
                    initialItems={[
                      { id: 'e', label: 'Anchor Item' },
                      { id: 'f', label: 'Anchor Item' },
                    ]}
                  />
                </div>
                <div>
                  <p style={{ fontSize: 10, color: '#bbb', marginBottom: 2 }}>selected</p>
                  <VerticalNavigation
                    status={status}
                    selected={true}
                    level={2}
                    showLeadingIcon={true}
                    leadingIcon={Info}
                    initialItems={[
                      { id: 'g', label: 'Anchor Item' },
                      { id: 'h', label: 'Anchor Item' },
                    ]}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
