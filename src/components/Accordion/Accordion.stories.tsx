import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import type { AccordionProps } from './Accordion';
import { Checkbox } from '@/components/Checkbox';
import { RadioButton } from '@/components/RadioButton';

const meta: Meta<AccordionProps> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus', 'disabled'],
    },
    state: {
      control: 'inline-radio',
      options: ['open', 'closed'],
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<AccordionProps>;

export const DefaultClosed: Story = {
  args: {
    label: 'Category',
    status: 'default',
    state: 'closed',
    theme: 'light',
  },
};

export const DefaultOpen: Story = {
  args: {
    label: 'Category',
    status: 'default',
    state: 'open',
    theme: 'light',
    children: 'Accordion content goes here.',
  },
};

export const Hover: Story = {
  args: {
    label: 'Category',
    status: 'hover',
    state: 'closed',
    theme: 'light',
  },
};

export const Focus: Story = {
  args: {
    label: 'Category',
    status: 'focus',
    state: 'closed',
    theme: 'light',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Category',
    status: 'disabled',
    state: 'closed',
    theme: 'light',
  },
};

export const WithTextContent: Story = {
  args: {
    label: 'Category',
    status: 'default',
    state: 'open',
    theme: 'light',
    children: (
      <p style={{ margin: 0 }}>
        This accordion contains a paragraph of text. It can hold any content
        passed as children, including rich text, lists, or other components.
      </p>
    ),
  },
};

export const WithCheckboxes: Story = {
  render: (args) => (
    <Accordion {...args}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Checkbox label="Option One" state="default" status="default" theme={args.theme} />
        <Checkbox label="Option Two" state="default" status="default" theme={args.theme} />
        <Checkbox label="Option Three" state="default" status="default" theme={args.theme} />
      </div>
    </Accordion>
  ),
  args: {
    label: 'Select Options',
    status: 'default',
    state: 'open',
    theme: 'light',
  },
};

export const WithRadioButtons: Story = {
  render: (args) => (
    <Accordion {...args}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <RadioButton label="Choice A" status="default" theme={args.theme} />
        <RadioButton label="Choice B" status="default" theme={args.theme} />
        <RadioButton label="Choice C" status="default" theme={args.theme} />
      </div>
    </Accordion>
  ),
  args: {
    label: 'Select a Choice',
    status: 'default',
    state: 'open',
    theme: 'light',
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [currentState, setCurrentState] = useState<'open' | 'closed'>('closed');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Accordion
          {...args}
          state={currentState}
          onToggle={(next) => setCurrentState(next)}
        >
          <p style={{ margin: 0 }}>
            Click the header above to toggle this accordion open and closed.
          </p>
        </Accordion>
        <span style={{ fontSize: 12, color: '#666' }}>
          State: {currentState}
        </span>
      </div>
    );
  },
  args: {
    label: 'Category',
    status: 'default',
    theme: 'light',
  },
};
