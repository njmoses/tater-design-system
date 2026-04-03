import type { Meta, StoryObj } from '@storybook/react';
import { CarouselArrow } from './CarouselArrow';
import type { CarouselArrowProps } from './CarouselArrow';

const meta: Meta<CarouselArrowProps> = {
  title: 'Components/Carousel/CarouselArrow',
  component: CarouselArrow,
  argTypes: {
    status: {
      control: 'inline-radio',
      options: ['default', 'hover', 'focus', 'disabled'],
    },
    direction: {
      control: 'inline-radio',
      options: ['left', 'right'],
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<CarouselArrowProps>;

export const RightDefault: Story = {
  args: {
    direction: 'right',
    status: 'default',
    theme: 'light',
  },
};

export const RightHover: Story = {
  args: {
    direction: 'right',
    status: 'hover',
    theme: 'light',
  },
};

export const RightFocus: Story = {
  args: {
    direction: 'right',
    status: 'focus',
    theme: 'light',
  },
};

export const RightDisabled: Story = {
  args: {
    direction: 'right',
    status: 'disabled',
    theme: 'light',
  },
};

export const LeftDefault: Story = {
  args: {
    direction: 'left',
    status: 'default',
    theme: 'light',
  },
};

export const LeftHover: Story = {
  args: {
    direction: 'left',
    status: 'hover',
    theme: 'light',
  },
};

export const LeftFocus: Story = {
  args: {
    direction: 'left',
    status: 'focus',
    theme: 'light',
  },
};

export const LeftDisabled: Story = {
  args: {
    direction: 'left',
    status: 'disabled',
    theme: 'light',
  },
};
