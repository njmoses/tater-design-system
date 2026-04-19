import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InteractiveTag } from './InteractiveTag';

const meta: Meta<typeof InteractiveTag> = {
  title: 'Components/InteractiveTag',
  component: InteractiveTag,
  argTypes: {
    state: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus', 'disabled'],
    },
    selected: { control: 'boolean' },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
  args: {
    label: 'Tag',
  },
};

export default meta;
type Story = StoryObj<typeof InteractiveTag>;

// ── Unselected ──────────────────────────────────────────────────────────────

export const UnselectedDefault: Story = {
  args: { selected: false, state: 'default' },
};

export const UnselectedHover: Story = {
  args: { selected: false, state: 'hover' },
};

export const UnselectedFocus: Story = {
  args: { selected: false, state: 'focus' },
};

export const UnselectedDisabled: Story = {
  args: { selected: false, state: 'disabled' },
};

// ── Selected ────────────────────────────────────────────────────────────────

export const SelectedDefault: Story = {
  args: { selected: true, state: 'default' },
};

export const SelectedHover: Story = {
  args: { selected: true, state: 'hover' },
};

export const SelectedFocus: Story = {
  args: { selected: true, state: 'focus' },
};

export const SelectedDisabled: Story = {
  args: { selected: true, state: 'disabled' },
};

// ── Interactive ─────────────────────────────────────────────────────────────

export const Interactive: Story = {
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <InteractiveTag
          label="Tag"
          state="default"
          onSelect={(s) => setLog((prev) => [`onSelect(${s})`, ...prev].slice(0, 5))}
        />
        <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#888' }}>
          {log.map((entry, i) => <div key={i}>{entry}</div>)}
        </div>
      </div>
    );
  },
};

export const DisabledInteraction: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <InteractiveTag label="Tag" selected={false} state="disabled" />
      <InteractiveTag label="Tag" selected={true} state="disabled" />
    </div>
  ),
};

// ── All states grid ─────────────────────────────────────────────────────────

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {(['default', 'hover', 'focus', 'disabled'] as const).map((state) => (
        <div key={state} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <InteractiveTag label="Tag" selected={false} state={state} />
          <InteractiveTag label="Tag" selected={true} state={state} />
        </div>
      ))}
    </div>
  ),
};
