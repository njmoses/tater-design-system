import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CarouselIndicator } from './CarouselIndicator';
import type { CarouselIndicatorProps } from './CarouselIndicator';

const meta: Meta<CarouselIndicatorProps> = {
  title: 'Components/Carousel/CarouselIndicator',
  component: CarouselIndicator,
  argTypes: {
    state: {
      control: 'inline-radio',
      options: ['active', 'inactive'],
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<CarouselIndicatorProps>;

export const Active: Story = {
  args: {
    state: 'active',
    theme: 'light',
  },
};

export const Inactive: Story = {
  args: {
    state: 'inactive',
    theme: 'light',
  },
};

export const BothStates: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <CarouselIndicator {...args} state="active" />
      <CarouselIndicator {...args} state="inactive" />
      <CarouselIndicator {...args} state="inactive" />
    </div>
  ),
  args: {
    theme: 'light',
  },
};
