import type { Meta, StoryObj } from '@storybook/react';
import { Phone } from 'react-coolicons';
import { ListItem } from '.';

const meta: Meta<typeof ListItem> = {
  title: 'Components/List/ListItem',
  component: ListItem,
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    indicatorType: {
      control: 'inline-radio',
      options: ['process', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const ProcessIndicator: Story = {
  args: {
    indicatorType: 'process',
    indicatorValue: '1',
    title: 'Title',
    description: 'Description',
    theme: 'light',
  },
};

export const IconIndicator: Story = {
  args: {
    indicatorType: 'icon',
    title: 'Title',
    description: 'Description',
    theme: 'light',
  },
  argTypes: {
    indicatorIcon: { control: false },
  },
  render: (args) => {
    const showIndicatorIcon = true;
    return <ListItem {...args} indicatorIcon={showIndicatorIcon ? Phone : undefined} />;
  },
};

export const TitleOnly: Story = {
  args: {
    indicatorType: 'process',
    indicatorValue: '1',
    title: 'Title',
    showTitle: true,
    description: 'Description',
    showDescription: false,
    theme: 'light',
  },
};

export const DescriptionOnly: Story = {
  args: {
    indicatorType: 'process',
    indicatorValue: '1',
    title: 'Title',
    showTitle: false,
    description: 'Description',
    showDescription: true,
    theme: 'light',
  },
};

export const Full: Story = {
  args: {
    indicatorType: 'process',
    indicatorValue: '1',
    title: 'Title',
    showTitle: true,
    description: 'Description',
    showDescription: true,
    theme: 'light',
  },
};
