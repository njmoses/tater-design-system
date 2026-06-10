import { useEffect, useId, useRef } from 'react';
import { CloseMd } from 'react-coolicons';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';
import { Button } from '@/components/Button';

export type ButtonAlignment = 'space-between' | 'left' | 'right' | 'center';

export interface ModalProps {
  title: string;
  showCloseButton?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  showButtons?: boolean;
  showSecondaryButton?: boolean;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  buttonAlignment?: ButtonAlignment;
  isOpen?: boolean;
  onOverlayClick?: () => void;
  theme?: Theme;
}

const CLOSE_ICON_SIZE = 24;

export function Modal({
  title,
  showCloseButton = true,
  onClose,
  children,
  showButtons = true,
  showSecondaryButton = true,
  primaryButtonLabel = 'Button',
  secondaryButtonLabel = 'Button',
  onPrimaryClick,
  onSecondaryClick,
  buttonAlignment = 'space-between',
  isOpen = true,
  onOverlayClick,
  theme = 'light',
}: ModalProps) {
  const t = useTokens(theme);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const typoH5 = typography.heading.h5;

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
    } else {
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;
    const el = modalRef.current;
    const getFocusable = () =>
      Array.from(
        el.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      );

    const focusable = getFocusable();
    focusable[0]?.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const nodes = getFocusable();
      if (nodes.length === 0) { e.preventDefault(); return; }
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    el.addEventListener('keydown', handleTab);
    return () => el.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  if (!isOpen) return null;

  const justifyContent =
    buttonAlignment === 'space-between'
      ? showSecondaryButton ? 'space-between' : 'flex-end'
      : buttonAlignment === 'left'   ? 'flex-start'
      : buttonAlignment === 'right'  ? 'flex-end'
      : 'center';

  const footerGap =
    buttonAlignment !== 'space-between' ? `${t.layoutSpacing.xsm}px` : undefined;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onOverlayClick}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        style={{
          position: 'relative',
          zIndex: 101,
          maxWidth: 560,
          width: '100%',
          backgroundColor: t.base,
          borderRadius: `${t.borderRadius[400]}px`,
          border: `${t.borderWidth.sm}px solid ${t.border.default.default}`,
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: `${t.layoutSpacing.md}px`,
            backgroundColor: t.surface.primary.defaultSubtle,
            borderBottom: `${t.borderWidth.sm}px solid ${t.border.default.default}`,
          }}
        >
          <h5
            id={titleId}
            style={{
              margin: 0,
              fontFamily: typoH5.fontFamily,
              fontSize: typoH5.fontSize,
              fontWeight: typoH5.fontWeight,
              lineHeight: `${typoH5.lineHeight}px`,
              letterSpacing: typoH5.letterSpacing,
              color: t.text.default.heading,
            }}
          >
            {title}
          </h5>
          {showCloseButton && (
            <button
              aria-label="Close modal"
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                marginLeft: `${t.layoutSpacing.sm}px`,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                outline: 'none',
              }}
            >
              <CloseMd
                width={CLOSE_ICON_SIZE}
                height={CLOSE_ICON_SIZE}
                color={t.icon.default.regular}
              />
            </button>
          )}
        </div>

        <div
          style={{
            padding: `${t.layoutSpacing.md}px`,
            minHeight: 120,
            backgroundColor: t.base,
            boxSizing: 'border-box',
          }}
        >
          {children}
        </div>

        {showButtons && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent,
              gap: footerGap,
              padding: `${t.layoutSpacing.md}px`,
              borderTop: `${t.borderWidth.sm}px solid ${t.border.default.default}`,
              boxSizing: 'border-box',
            }}
          >
            {showSecondaryButton && (
              <Button
                type="secondary"
                label={secondaryButtonLabel}
                theme={theme}
                onClick={onSecondaryClick}
              />
            )}
            <Button
              type="primary"
              label={primaryButtonLabel}
              theme={theme}
              onClick={onPrimaryClick}
            />
          </div>
        )}
      </div>
    </div>
  );
}
