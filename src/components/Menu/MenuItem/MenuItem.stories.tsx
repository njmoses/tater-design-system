import type { Meta, StoryObj } from '@storybook/react';
import { User01, Lock } from 'react-coolicons';
import { MenuItem } from './MenuItem';
import type { MenuItemProps } from './MenuItem';

type StoryArgs = MenuItemProps & {
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
};

const meta: Meta<StoryArgs> = {
  title: 'Components/Menu/MenuItem',
  component: MenuItem,
  argTypes: {
    state: {
      control: 'inline-radio',
      options: ['default', 'hover', 'active', 'disabled'],
    },
    selected: {
      control: 'boolean',
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
  },
};

export default meta;
type Story = StoryObj<StoryArgs>;

const renderItem = (args: StoryArgs) => {
  const { showLeadingIcon, showTrailingIcon, ...itemProps } = args;
  return (
    <div style={{ width: 250 }}>
      <MenuItem
        {...itemProps}
        showLeadingIcon={showLeadingIcon}
        showTrailingIcon={showTrailingIcon}
        leadingIcon={showLeadingIcon ? User01 : undefined}
        trailingIcon={showTrailingIcon ? Lock : undefined}
      />
    </div>
  );
};

export const Default: Story = {
  render: renderItem,
  args: {
    state: 'default',
    selected: false,
    label: 'Menu item',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Hover: Story = {
  render: renderItem,
  args: {
    state: 'hover',
    selected: false,
    label: 'Menu item',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Active: Story = {
  render: renderItem,
  args: {
    state: 'active',
    selected: false,
    label: 'Menu item',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Disabled: Story = {
  render: renderItem,
  args: {
    state: 'disabled',
    selected: false,
    label: 'Menu item',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const Selected: Story = {
  render: renderItem,
  args: {
    state: 'default',
    selected: true,
    label: 'Menu item',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const SelectedHover: Story = {
  render: renderItem,
  args: {
    state: 'hover',
    selected: true,
    label: 'Menu item',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const SelectedDisabled: Story = {
  render: renderItem,
  args: {
    state: 'disabled',
    selected: true,
    label: 'Menu item',
    showLeadingIcon: true,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const NoIcons: Story = {
  render: renderItem,
  args: {
    state: 'default',
    selected: false,
    label: 'Menu item',
    showLeadingIcon: false,
    showTrailingIcon: false,
    theme: 'light',
  },
};

export const LeadingIconOnly: Story = {
  render: renderItem,
  args: {
    state: 'default',
    selected: false,
    label: 'Menu item',
    showLeadingIcon: true,
    showTrailingIcon: false,
    theme: 'light',
  },
};

export const TrailingIconOnly: Story = {
  render: renderItem,
  args: {
    state: 'default',
    selected: false,
    label: 'Menu item',
    showLeadingIcon: false,
    showTrailingIcon: true,
    theme: 'light',
  },
};

export const AllVariants: Story = {
  render: (args) => {
    const { showLeadingIcon, showTrailingIcon } = args;
    const states = ['default', 'hover', 'active', 'disabled'] as const;
    const rows: Array<{ selected: boolean; label: string }> = [
      { selected: false, label: 'Not Selected' },
      { selected: true, label: 'Selected' },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {rows.map(({ selected, label: rowLabel }) => (
          <div key={rowLabel}>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>{rowLabel}</div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              {states.map((state) => (
                <div key={state} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 11, color: '#999', textTransform: 'capitalize' }}>{state}</span>
                  <div style={{ width: 250 }}>
                    <MenuItem
                      state={state}
                      selected={selected}
                      label="Menu item"
                      showLeadingIcon={showLeadingIcon}
                      showTrailingIcon={showTrailingIcon}
                      leadingIcon={showLeadingIcon ? User01 : undefined}
                      trailingIcon={showTrailingIcon ? Lock : undefined}
                      theme={args.theme}
                    />
                  </div>
                </div>
              ))}
            </div>
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
