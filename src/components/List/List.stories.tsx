import type { Meta, StoryObj } from '@storybook/react';
import { Phone } from 'react-coolicons';
import { List } from './List';

const meta: Meta<typeof List> = {
  title: 'Components/List/List',
  component: List,
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const ProcessList: Story = {
  args: {
    heading: 'Heading',
    showHeading: true,
    theme: 'light',
    items: [
      { indicatorType: 'process', title: 'Title', description: 'Description' },
      { indicatorType: 'process', title: 'Title', description: 'Description' },
      { indicatorType: 'process', title: 'Title', description: 'Description' },
      { indicatorType: 'process', title: 'Title', description: 'Description' },
    ],
  },
};

export const IconList: Story = {
  args: {
    heading: 'Heading',
    showHeading: true,
    theme: 'light',
  },
  argTypes: {
    items: { control: false },
  },
  render: (args) => {
    const showIcon = true;
    return (
      <List
        {...args}
        items={[
          { indicatorType: 'icon', indicatorIcon: showIcon ? Phone : undefined, title: 'Title', description: 'Description' },
          { indicatorType: 'icon', indicatorIcon: showIcon ? Phone : undefined, title: 'Title', description: 'Description' },
          { indicatorType: 'icon', indicatorIcon: showIcon ? Phone : undefined, title: 'Title', description: 'Description' },
          { indicatorType: 'icon', indicatorIcon: showIcon ? Phone : undefined, title: 'Title', description: 'Description' },
        ]}
      />
    );
  },
};

export const NoHeading: Story = {
  args: {
    heading: 'Heading',
    showHeading: false,
    theme: 'light',
    items: [
      { indicatorType: 'process', title: 'Title', description: 'Description' },
      { indicatorType: 'process', title: 'Title', description: 'Description' },
      { indicatorType: 'process', title: 'Title', description: 'Description' },
      { indicatorType: 'process', title: 'Title', description: 'Description' },
    ],
  },
};

export const MixedVisibility: Story = {
  args: {
    heading: 'Heading',
    showHeading: true,
    theme: 'light',
    items: [
      { indicatorType: 'process', title: 'Title', description: 'Description', showTitle: true, showDescription: true },
      { indicatorType: 'process', title: 'Title Only', description: 'Description', showTitle: true, showDescription: false },
      { indicatorType: 'process', title: 'Title', description: 'Description Only', showTitle: false, showDescription: true },
      { indicatorType: 'process', title: 'Title', description: 'Description', showTitle: true, showDescription: true },
    ],
  },
};
