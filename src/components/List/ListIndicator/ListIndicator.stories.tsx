import type { Meta, StoryObj } from '@storybook/react';
import { Phone } from 'react-coolicons';
import { ListIndicator } from '.';

const meta: Meta<typeof ListIndicator> = {
  title: 'Components/List/ListIndicator',
  component: ListIndicator,
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    type: {
      control: 'inline-radio',
      options: ['process', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListIndicator>;

export const Process: Story = {
  args: {
    type: 'process',
    value: '2',
    theme: 'light',
  },
};

export const Icon: Story = {
  args: {
    type: 'icon',
    theme: 'light',
  },
  argTypes: {
    icon: { control: false },
  },
  render: (args) => {
    const showIcon = true;
    return <ListIndicator {...args} icon={showIcon ? Phone : undefined} />;
  },
};
