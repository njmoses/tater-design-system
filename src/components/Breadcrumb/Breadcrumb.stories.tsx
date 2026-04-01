import type { Meta, StoryObj } from '@storybook/react';
import { ExternalLink, ChevronRight } from 'react-coolicons';
import { Breadcrumb } from './Breadcrumb';
import type { BreadcrumbProps } from './Breadcrumb';

const meta: Meta<BreadcrumbProps> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    currentPage: {
      control: 'text',
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
    items: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<BreadcrumbProps>;

const defaultItems = [
  { label: 'Home', showLeadingIcon: false },
  { label: 'Section', showLeadingIcon: false },
  { label: 'Page', showLeadingIcon: false },
];

const render = (args: BreadcrumbProps) => (
  <Breadcrumb
    {...args}
    trailingIcon={args.showTrailingIcon ? ChevronRight : undefined}
  />
);

export const Default: Story = {
  render,
  args: {
    items: defaultItems.map((item) => ({ ...item, status: 'default' })),
    currentPage: 'Current Page',
    showTrailingIcon: false,
    theme: 'light',
  },
};

export const Hover: Story = {
  render,
  args: {
    items: defaultItems.map((item) => ({ ...item, status: 'hover' })),
    currentPage: 'Current Page',
    showTrailingIcon: false,
    theme: 'light',
  },
};

export const Focus: Story = {
  render,
  args: {
    items: defaultItems.map((item) => ({ ...item, status: 'focus' })),
    currentPage: 'Current Page',
    showTrailingIcon: false,
    theme: 'light',
  },
};

export const Disabled: Story = {
  render,
  args: {
    items: defaultItems.map((item) => ({ ...item, status: 'disabled' })),
    currentPage: 'Current Page',
    showTrailingIcon: false,
    theme: 'light',
  },
};

export const WithLeadingIcons: Story = {
  render,
  args: {
    items: defaultItems.map((item) => ({ ...item, status: 'default', showLeadingIcon: true, leadingIcon: ExternalLink })),
    currentPage: 'Current Page',
    showTrailingIcon: false,
    theme: 'light',
  },
};

export const WithTrailingIcons: Story = {
  render,
  args: {
    items: defaultItems.map((item) => ({ ...item, status: 'default' })),
    currentPage: 'Current Page',
    showTrailingIcon: true,
    trailingIcon: ChevronRight,
    theme: 'light',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {(['default', 'hover', 'focus', 'disabled'] as const).map((status) => (
        <div key={status}>
          <p style={{ fontSize: 12, color: '#999', marginBottom: 12, fontFamily: 'sans-serif', textTransform: 'capitalize' }}>
            {status}
          </p>
          <Breadcrumb
            items={defaultItems.map((item) => ({ ...item, status }))}
            currentPage="Current Page"
            showTrailingIcon={false}
            theme="light"
          />
        </div>
      ))}
    </div>
  ),
};
