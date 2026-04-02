import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tree } from './Tree';
import { TreeItem } from './TreeItem';
import type { TreeItemConfig } from './Tree';

const meta: Meta<typeof Tree> = {
  title: 'Components/Tree/Tree',
  component: Tree,
  argTypes: {
    theme: { control: 'inline-radio', options: ['light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof Tree>;

const flatItems: TreeItemConfig[] = [
  { id: '1', label: 'Documents', level: '01', showIcon: true },
  { id: '2', label: 'Images', level: '01', showIcon: true },
  { id: '3', label: 'Videos', level: '01', showIcon: true },
  { id: '4', label: 'Downloads', level: '01', showIcon: true },
];

const nestedItems: TreeItemConfig[] = [
  {
    id: '1',
    label: 'Documents',
    level: '01',
    showIcon: true,
    children: [
      {
        id: '1-1',
        label: 'Work',
        level: '02',
        showIcon: true,
        children: [
          { id: '1-1-1', label: 'Reports', level: '03', showIcon: true },
          { id: '1-1-2', label: 'Invoices', level: '03', showIcon: true },
        ],
      },
      {
        id: '1-2',
        label: 'Personal',
        level: '02',
        showIcon: true,
        children: [
          { id: '1-2-1', label: 'Photos', level: '03', showIcon: true },
        ],
      },
    ],
  },
  {
    id: '2',
    label: 'Images',
    level: '01',
    showIcon: true,
    children: [
      { id: '2-1', label: 'Screenshots', level: '02', showIcon: true },
      { id: '2-2', label: 'Wallpapers', level: '02', showIcon: true },
    ],
  },
  { id: '3', label: 'Videos', level: '01', showIcon: true },
  { id: '4', label: 'Downloads', level: '01', showIcon: true },
];

function stripIcons(item: TreeItemConfig): TreeItemConfig {
  return {
    ...item,
    showIcon: false,
    children: item.children?.map(stripIcons),
  };
}

export const Default: Story = {
  args: { items: flatItems, theme: 'light' },
};

export const Nested: Story = {
  args: { items: nestedItems, theme: 'light' },
};

export const WithIcons: Story = {
  args: { items: nestedItems, theme: 'light' },
};

export const WithoutIcons: Story = {
  args: { items: nestedItems.map(stripIcons), theme: 'light' },
};

// Pre-expanded story: renders TreeItems directly with Documents + Work already open
export const PreExpanded: Story = {
  render: (args) => {
    const preExpandedItems = [
      { id: '1',     label: 'Documents', level: '01' as const, showIcon: true, open: true  },
      { id: '1-1',   label: 'Work',      level: '02' as const, showIcon: true, open: true  },
      { id: '1-1-1', label: 'Reports',   level: '03' as const, showIcon: true, open: false },
      { id: '1-1-2', label: 'Invoices',  level: '03' as const, showIcon: true, open: false },
      { id: '1-2',   label: 'Personal',  level: '02' as const, showIcon: true, open: false },
      { id: '2',     label: 'Images',    level: '01' as const, showIcon: true, open: false },
      { id: '3',     label: 'Videos',    level: '01' as const, showIcon: true, open: false },
    ];

    function PreExpandedTree() {
      const [selectedId, setSelectedId] = useState<string | null>('1-1');
      const [hoveredId, setHoveredId] = useState<string | null>(null);

      return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {preExpandedItems.map((item) => (
            <TreeItem
              key={item.id}
              status={hoveredId === item.id ? 'hover' : 'default'}
              selected={selectedId === item.id}
              level={item.level}
              label={item.label}
              showIcon={item.showIcon}
              open={item.open}
              theme={args.theme}
              onClick={() => setSelectedId(item.id)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      );
    }

    return <PreExpandedTree />;
  },
  args: { items: nestedItems, theme: 'light' },
};
