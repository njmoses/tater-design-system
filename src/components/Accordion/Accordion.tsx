import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'react-coolicons';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';

export type AccordionStatus = 'default' | 'hover' | 'focus' | 'disabled';
export type AccordionState = 'open' | 'closed';

export interface AccordionProps {
  label: string;
  /** Interaction state. Use 'disabled' for a non-interactive accordion. */
  status?: AccordionStatus;
  /** Whether the accordion panel is expanded */
  state?: AccordionState;
  children?: React.ReactNode;
  onToggle?: (state: AccordionState) => void;
  theme?: Theme;
  className?: string;
}

const ICON_SIZE = 24;
const FOCUS_RING_INSET = -3;

export function Accordion({
  label,
  status = 'default',
  state: stateProp = 'closed',
  children,
  onToggle,
  theme = 'light',
  className,
}: AccordionProps) {
  const t = useTokens(theme);
  const bodyTypo = typography.body.md;

  const [openState, setOpenState] = useState<AccordionState>(stateProp);
  const [interactionStatus, setInteractionStatus] = useState<AccordionStatus>(status);
  const isFocusedRef = useRef(false);

  useEffect(() => {
    setOpenState(stateProp);
  }, [stateProp]);

  useEffect(() => {
    if (!isFocusedRef.current) setInteractionStatus(status);
  }, [status]);

  const isDisabled = status === 'disabled';
  const isOpen = openState === 'open';
  const isHover = interactionStatus === 'hover';
  const isFocus = interactionStatus === 'focus';

  const textColor = isDisabled ? t.text.disabled.default : t.text.default.body;
  const iconColor = isDisabled ? t.icon.disabled.default : t.icon.default.regular;
  const hoverBackground = t.surface.primary.defaultSubtleHover;

  const showWrapperHoverBg = isHover && !isOpen;
  const showHeaderHoverBg = isHover && isOpen;

  const handleMouseEnter = () => {
    if (!isDisabled && !isFocusedRef.current) setInteractionStatus('hover');
  };

  const handleMouseLeave = () => {
    if (!isFocusedRef.current) setInteractionStatus(status);
  };

  const handleFocus = () => {
    if (isDisabled) return;
    isFocusedRef.current = true;
    setInteractionStatus('focus');
  };

  const handleBlur = () => {
    isFocusedRef.current = false;
    setInteractionStatus(status);
  };

  const handleClick = () => {
    if (isDisabled) return;
    const nextState: AccordionState = openState === 'open' ? 'closed' : 'open';
    setOpenState(nextState);
    onToggle?.(nextState);
  };

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: showWrapperHoverBg ? hoverBackground : 'transparent',
        boxSizing: 'border-box',
      }}
    >
      {isFocus && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: FOCUS_RING_INSET,
            border: `${t.borderWidth.xs}px solid ${t.border.primary.default}`,
            borderRadius: `${t.borderRadius[200]}px`,
            pointerEvents: 'none',
            boxSizing: 'border-box',
          }}
        />
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          gap: isOpen ? `${t.layoutSpacing.xsm}px` : `${t.layoutSpacing.none}px`,
          width: '100%',
        }}
      >
        <div
          role="button"
          tabIndex={isDisabled ? -1 : 0}
          aria-expanded={isOpen}
          aria-disabled={isDisabled ? 'true' : undefined}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: `${t.layoutSpacing.sm}px`,
            backgroundColor: showHeaderHoverBg ? hoverBackground : 'transparent',
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            outline: 'none',
            userSelect: 'none',
            boxSizing: 'border-box',
            width: '100%',
          }}
        >
          <span
            style={{
              fontFamily: bodyTypo.fontFamily,
              fontSize: `${bodyTypo.fontSize}px`,
              fontWeight: bodyTypo.fontWeight,
              lineHeight: `${bodyTypo.lineHeight}px`,
              letterSpacing: `${bodyTypo.letterSpacing}px`,
              color: textColor,
              wordBreak: 'break-word',
            }}
          >
            {label}
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transform: isOpen ? 'rotate(180deg)' : undefined,
            }}
          >
            <ChevronDown width={ICON_SIZE} height={ICON_SIZE} color={iconColor} />
          </div>
        </div>

        {isOpen && (
          <div
            style={{
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
