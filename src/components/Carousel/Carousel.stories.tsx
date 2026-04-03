import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';
import type { CarouselProps } from './Carousel';

const meta: Meta<CarouselProps> = {
  title: 'Components/Carousel/Carousel',
  component: Carousel,
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<CarouselProps>;

function PlaceholderCard({ label }: { label: string }) {
  return (
    <div
      style={{
        width: '240px',
        height: '320px',
        borderRadius: '12px',
        backgroundColor: '#f0f0f5',
        border: '1px solid #e0e0eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        fontFamily: 'Rubik, sans-serif',
        color: '#555',
        userSelect: 'none',
      }}
    >
      {label}
    </div>
  );
}

export const Default: Story = {
  args: {
    theme: 'light',
    items: [
      { id: '1', content: <PlaceholderCard label="Card 1" /> },
      { id: '2', content: <PlaceholderCard label="Card 2" /> },
      { id: '3', content: <PlaceholderCard label="Card 3" /> },
    ],
  },
};

export const FiveItems: Story = {
  args: {
    theme: 'light',
    items: [
      { id: '1', content: <PlaceholderCard label="Card 1" /> },
      { id: '2', content: <PlaceholderCard label="Card 2" /> },
      { id: '3', content: <PlaceholderCard label="Card 3" /> },
      { id: '4', content: <PlaceholderCard label="Card 4" /> },
      { id: '5', content: <PlaceholderCard label="Card 5" /> },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    theme: 'light',
    items: [
      { id: '1', content: <PlaceholderCard label="Card 1" /> },
    ],
  },
};
