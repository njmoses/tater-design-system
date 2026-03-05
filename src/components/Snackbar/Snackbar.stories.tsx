import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar } from '.';

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
  args: {
    title: 'Snackbar Title',
    body: 'This is a snackbar message.',
    theme: 'light',
  },
};
