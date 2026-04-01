import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const PrimaryLarge: Story = {
  args: { type: 'primary', size: 'large' },
};

export const PrimaryMedium: Story = {
  args: { type: 'primary', size: 'medium' },
};

export const PrimarySmall: Story = {
  args: { type: 'primary', size: 'small' },
};

export const PrimaryXSmall: Story = {
  args: { type: 'primary', size: 'xSmall' },
};

export const SecondaryLarge: Story = {
  args: { type: 'secondary', size: 'large' },
};

export const SecondaryMedium: Story = {
  args: { type: 'secondary', size: 'medium' },
};

export const SecondarySmall: Story = {
  args: { type: 'secondary', size: 'small' },
};

export const SecondaryXSmall: Story = {
  args: { type: 'secondary', size: 'xSmall' },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <Loader type="primary" size="xSmall" />
        <Loader type="primary" size="small" />
        <Loader type="primary" size="medium" />
        <Loader type="primary" size="large" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <Loader type="secondary" size="xSmall" />
        <Loader type="secondary" size="small" />
        <Loader type="secondary" size="medium" />
        <Loader type="secondary" size="large" />
      </div>
    </div>
  ),
};
