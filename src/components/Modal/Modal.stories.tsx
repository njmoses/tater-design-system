import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import type { ModalProps } from './Modal';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { TextArea } from '@/components/TextArea';

const meta: Meta<ModalProps> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    buttonAlignment: {
      control: 'inline-radio',
      options: ['space-between', 'left', 'right', 'center'],
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    showCloseButton: { control: 'boolean' },
    showButtons: { control: 'boolean' },
    showSecondaryButton: { control: 'boolean' },
    isOpen: { control: 'boolean' },
    onClose: { action: 'onClose' },
    onPrimaryClick: { action: 'onPrimaryClick' },
    onSecondaryClick: { action: 'onSecondaryClick' },
    onOverlayClick: { action: 'onOverlayClick' },
  },
};

export default meta;
type Story = StoryObj<ModalProps>;

export const Default: Story = {
  args: {
    title: 'Modal Title',
    showCloseButton: true,
    showButtons: true,
    showSecondaryButton: true,
    primaryButtonLabel: 'Confirm',
    secondaryButtonLabel: 'Cancel',
    buttonAlignment: 'space-between',
    isOpen: true,
    theme: 'light',
    children: 'This is the modal body content.',
  },
};

export const NoCloseButton: Story = {
  args: {
    title: 'Modal Title',
    showCloseButton: false,
    showButtons: true,
    showSecondaryButton: true,
    primaryButtonLabel: 'Confirm',
    secondaryButtonLabel: 'Cancel',
    buttonAlignment: 'space-between',
    isOpen: true,
    theme: 'light',
    children: 'The close button in the header is hidden.',
  },
};

export const NoButtons: Story = {
  args: {
    title: 'Modal Title',
    showCloseButton: true,
    showButtons: false,
    isOpen: true,
    theme: 'light',
    children: 'The footer with buttons is hidden entirely.',
  },
};

export const NoSecondaryButton: Story = {
  args: {
    title: 'Modal Title',
    showCloseButton: true,
    showButtons: true,
    showSecondaryButton: false,
    primaryButtonLabel: 'Got it',
    buttonAlignment: 'space-between',
    isOpen: true,
    theme: 'light',
    children: 'Only the primary button is shown in the footer.',
  },
};

export const ButtonsLeft: Story = {
  args: {
    title: 'Modal Title',
    showCloseButton: true,
    showButtons: true,
    showSecondaryButton: true,
    primaryButtonLabel: 'Confirm',
    secondaryButtonLabel: 'Cancel',
    buttonAlignment: 'left',
    isOpen: true,
    theme: 'light',
    children: 'Buttons are aligned to the left.',
  },
};

export const ButtonsRight: Story = {
  args: {
    title: 'Modal Title',
    showCloseButton: true,
    showButtons: true,
    showSecondaryButton: true,
    primaryButtonLabel: 'Confirm',
    secondaryButtonLabel: 'Cancel',
    buttonAlignment: 'right',
    isOpen: true,
    theme: 'light',
    children: 'Buttons are aligned to the right.',
  },
};

export const ButtonsCenter: Story = {
  args: {
    title: 'Modal Title',
    showCloseButton: true,
    showButtons: true,
    showSecondaryButton: true,
    primaryButtonLabel: 'Confirm',
    secondaryButtonLabel: 'Cancel',
    buttonAlignment: 'center',
    isOpen: true,
    theme: 'light',
    children: 'Buttons are centered.',
  },
};

export const ButtonsSpaceBetween: Story = {
  args: {
    title: 'Modal Title',
    showCloseButton: true,
    showButtons: true,
    showSecondaryButton: true,
    primaryButtonLabel: 'Confirm',
    secondaryButtonLabel: 'Cancel',
    buttonAlignment: 'space-between',
    isOpen: true,
    theme: 'light',
    children: 'Secondary button is on the left, primary on the right.',
  },
};

export const WithTextContent: Story = {
  args: {
    title: 'Terms & Conditions',
    showCloseButton: true,
    showButtons: true,
    showSecondaryButton: true,
    primaryButtonLabel: 'Accept',
    secondaryButtonLabel: 'Decline',
    buttonAlignment: 'space-between',
    isOpen: true,
    theme: 'light',
    children: (
      <p style={{ margin: 0, fontSize: 16, lineHeight: '24px', color: '#1a1a1a' }}>
        By using this service you agree to our terms and conditions. Please read
        them carefully before proceeding. Your continued use of the platform
        constitutes acceptance of any updates to these terms.
      </p>
    ),
  },
};

export const WithFormContent: Story = {
  render: (args) => (
    <Modal {...args}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Input
          label="Full name"
          placeholder="Enter your name"
          theme={args.theme}
        />
        <TextArea
          label="Message"
          placeholder="Write your message here…"
          theme={args.theme}
        />
      </div>
    </Modal>
  ),
  args: {
    title: 'Contact Us',
    showCloseButton: true,
    showButtons: true,
    showSecondaryButton: true,
    primaryButtonLabel: 'Send',
    secondaryButtonLabel: 'Cancel',
    buttonAlignment: 'space-between',
    isOpen: true,
    theme: 'light',
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 200 }}>
        <Button label="Open Modal" type="primary" theme={args.theme} onClick={open} />
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={close}
          onOverlayClick={close}
          onPrimaryClick={close}
          onSecondaryClick={close}
        >
          <p style={{ margin: 0 }}>
            Click the close button, press Escape, click outside, or use the
            footer buttons to close this modal.
          </p>
        </Modal>
      </div>
    );
  },
  args: {
    title: 'Interactive Modal',
    showCloseButton: true,
    showButtons: true,
    showSecondaryButton: true,
    primaryButtonLabel: 'Confirm',
    secondaryButtonLabel: 'Cancel',
    buttonAlignment: 'space-between',
    theme: 'light',
  },
};
