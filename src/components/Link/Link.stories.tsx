import type { Meta, StoryObj } from '@storybook/react';
import { ExternalLink, ArrowRightMd } from 'react-coolicons';
import { Link } from './Link';
import type { LinkProps } from './Link';

const meta: Meta<LinkProps> = {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus', 'disabled'],
    },
    type: {
      control: 'inline-radio',
      options: ['basic', 'inline'],
    },
    label: {
      control: 'text',
    },
    showLeadingIcon: {
      control: 'boolean',
    },
    leadingIcon: {
      table: { disable: true },
    },
    showTrailingIcon: {
      control: 'boolean',
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
type Story = StoryObj<LinkProps>;

const render = (args: LinkProps) => (
  <Link
    {...args}
    leadingIcon={args.showLeadingIcon ? ExternalLink : undefined}
    trailingIcon={args.showTrailingIcon ? ArrowRightMd : undefined}
  />
);

export const Default: Story = {
  render,
  args: {
    status: 'default',
    type: 'basic',
    label: 'Link',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Hover: Story = {
  render,
  args: {
    status: 'hover',
    type: 'basic',
    label: 'Link',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Focus: Story = {
  render,
  args: {
    status: 'focus',
    type: 'basic',
    label: 'Link',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Disabled: Story = {
  render,
  args: {
    status: 'disabled',
    type: 'basic',
    label: 'Link',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const InlineDefault: Story = {
  render,
  args: {
    status: 'default',
    type: 'inline',
    label: 'Link',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const InlineHover: Story = {
  render,
  args: {
    status: 'hover',
    type: 'inline',
    label: 'Link',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const InlineFocus: Story = {
  render,
  args: {
    status: 'focus',
    type: 'inline',
    label: 'Link',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const InlineDisabled: Story = {
  render,
  args: {
    status: 'disabled',
    type: 'inline',
    label: 'Link',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Interactive: Story = {
  render: (args: LinkProps) => (
    <Link
      {...args}
      leadingIcon={args.showLeadingIcon ? ExternalLink : undefined}
      trailingIcon={args.showTrailingIcon ? ArrowRightMd : undefined}
      onClick={() => alert('Link clicked')}
    />
  ),
  args: {
    status: 'default',
    type: 'basic',
    label: 'Hover or focus me',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
    href: undefined,
  },
};

export const DisabledInteraction: Story = {
  render,
  args: {
    status: 'disabled',
    type: 'basic',
    label: 'No interactions apply',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {(['basic', 'inline'] as const).map((type) => (
        <div key={type}>
          <p style={{ fontSize: 12, color: '#999', marginBottom: 12, fontFamily: 'sans-serif', textTransform: 'capitalize' }}>
            {type}
          </p>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            {(['default', 'hover', 'focus', 'disabled'] as const).map((status) => (
              <div key={status} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 10, color: '#bbb', fontFamily: 'sans-serif' }}>{status}</span>
                <Link
                  status={status}
                  type={type}
                  label="Link"
                  showLeadingIcon={true}
                  leadingIcon={ExternalLink}
                  showTrailingIcon={true}
                  trailingIcon={ArrowRightMd}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
