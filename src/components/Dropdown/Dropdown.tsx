import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'react-coolicons';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';
import { Label } from '@/components/Label';
import type { LabelProps } from '@/components/Label';
import { Menu } from '@/components/Menu';
import type { MenuItemConfig, MenuProps } from '@/components/Menu';

/** Menu row shape for `items` — alias of {@link MenuItemConfig}. */
export type DropdownItem = MenuItemConfig;

type TriggerStatus = 'default' | 'hover' | 'active' | 'focus' | 'disabled';

function getTriggerStyles(
  t: ReturnType<typeof useTokens>,
  triggerStatus: TriggerStatus,
  hasSelection: boolean,
) {
  const textColor = hasSelection ? t.text.default.body : t.text.default.placeholder;

  switch (triggerStatus) {
    case 'disabled':
      return {
        backgroundColor: t.surface.disabled.default,
        borderColor: t.border.disabled.default,
        textColor: t.text.disabled.default,
        iconColor: t.icon.disabled.default,
        cursor: 'not-allowed' as const,
      };
    case 'hover':
      return {
        backgroundColor: t.base,
        borderColor: t.border.primary.defaultHover,
        textColor,
        iconColor: t.icon.primary.defaultHover,
        cursor: 'pointer' as const,
      };
    case 'active':
      return {
        backgroundColor: t.base,
        borderColor: t.border.primary.focus,
        textColor,
        iconColor: t.icon.primary.default,
        cursor: 'pointer' as const,
      };
    case 'focus':
      return {
        backgroundColor: t.base,
        borderColor: t.border.primary.focus,
        textColor,
        iconColor: t.icon.primary.default,
        cursor: 'pointer' as const,
      };
    default:
      return {
        backgroundColor: t.base,
        borderColor: t.border.default.default,
        textColor,
        iconColor: t.icon.default.regular,
        cursor: 'pointer' as const,
      };
  }
}

export type IconComponent = React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>;

export interface DropdownProps
  extends Omit<LabelProps, 'theme'>,
    Omit<MenuProps, 'theme' | 'onSelectionChange'> {
  /** Visual theme */
  theme?: Theme;
  /** Hint text rendered between the label and the field */
  hint?: string;
  /** Placeholder text shown when nothing is selected */
  placeholder?: string;
  /** Optional leading icon rendered inside the trigger field */
  leadingIcon?: IconComponent;
  /** Legacy: initial open state used by static stories */
  state?: boolean;
  /** Callback when selection changes, receives selected item id and its label */
  onSelectionChange?: (id: string, label: string) => void;
  /** Additional CSS class name */
  className?: string;
}

const ICON_SIZE = 24;

export function Dropdown({
  // Label props
  text,
  status,
  showInfoTip,
  htmlFor,
  disabled = false,
  // Hint
  hint,
  // Field props
  placeholder = 'Select an option',
  leadingIcon,
  // Menu props
  items,
  defaultSelectedId,
  className,
  // Legacy open state
  state = false,
  // Callbacks
  onSelectionChange,
  // Shared
  theme = 'light',
}: DropdownProps) {
  const t = useTokens(theme);
  const hintTypo = typography.body.sm;
  const bodyTypo = typography.body.md;

  // Track the selected item id in Dropdown so the menu re-opens with the
  // correct item highlighted after close/reopen cycles.
  const [selectedId, setSelectedId] = useState<string | null>(defaultSelectedId ?? null);
  const [isOpen, setIsOpen] = useState(state);
  // 'default' | 'hover' | 'active' — disabled is handled via the prop
  const [interactionStatus, setInteractionStatus] = useState<'default' | 'hover' | 'active'>('default');

  const containerRef = useRef<HTMLDivElement>(null);

  // Derive label and leading icon from current selectedId
  const selectedItem = selectedId ? (items.find(i => i.id === selectedId) ?? null) : null;
  const selectedLabel = selectedItem?.label ?? null;
  const hasSelection = selectedLabel !== null;
  // Show the selected item's leading icon in the trigger; fall back to the
  // leadingIcon prop when nothing is selected yet.
  const TriggerLeadingIcon = selectedItem?.leadingIcon ?? leadingIcon ?? null;

  // Menu items show only a leading icon. Trailing icons are suppressed at the
  // Dropdown level regardless of what each item config provides.
  const menuItems: MenuItemConfig[] = items.map(item => ({
    ...item,
    showLeadingIcon: item.showLeadingIcon ?? !!item.leadingIcon,
    showTrailingIcon: false,
  }));

  // Close menu when user clicks outside the dropdown container
  useEffect(() => {
    function onDocumentMouseDown(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setInteractionStatus('default');
      }
    }
    document.addEventListener('mousedown', onDocumentMouseDown);
    return () => document.removeEventListener('mousedown', onDocumentMouseDown);
  }, []);

  const triggerStatus: TriggerStatus = disabled ? 'disabled' : isOpen ? 'focus' : interactionStatus;
  const styles = getTriggerStyles(t, triggerStatus, hasSelection);
  const ChevronIcon = isOpen ? ChevronUp : ChevronDown;

  // ── Trigger handlers ─────────────────────────────────────────────────────────

  const handleTriggerClick = () => {
    if (disabled) return;
    setIsOpen(prev => !prev);
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    setInteractionStatus('hover');
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    // Keep hover-like feel while menu is open; reset only after close
    if (!isOpen) setInteractionStatus('default');
  };

  const handleTriggerMouseDown = () => {
    if (disabled) return;
    setInteractionStatus('active');
  };

  const handleTriggerMouseUp = () => {
    if (disabled) return;
    setInteractionStatus('default');
  };

  // ── Selection handler ────────────────────────────────────────────────────────

  const handleItemSelect = (id: string) => {
    const item = items.find(i => i.id === id);
    if (!item) return;
    setSelectedId(id);
    setIsOpen(false);
    setInteractionStatus('default');
    onSelectionChange?.(id, item.label);
  };

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: `${t.layoutSpacing.xsm}px`,
        width: 250,
      }}
    >
      <Label
        text={text}
        status={status}
        showInfoTip={showInfoTip}
        htmlFor={htmlFor}
        disabled={disabled}
        theme={theme}
      />

      {hint && (
        <span
          style={{
            fontFamily: hintTypo.fontFamily,
            fontSize: `${hintTypo.fontSize}px`,
            fontWeight: hintTypo.fontWeight,
            lineHeight: `${hintTypo.lineHeight}px`,
            letterSpacing: hintTypo.letterSpacing,
            color: t.text.default.caption,
          }}
        >
          {hint}
        </span>
      )}

      {/* Trigger + Menu — position relative so Menu can anchor below */}
      <div style={{ position: 'relative' }}>

        {/* Trigger field */}
        <div
          onClick={handleTriggerClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleTriggerMouseDown}
          onMouseUp={handleTriggerMouseUp}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: `${t.layoutSpacing.xsm}px`,
            height: `${t.layoutSpacing.xlg}px`,
            paddingTop: `${t.layoutSpacing.xsm}px`,
            paddingBottom: `${t.layoutSpacing.xsm}px`,
            paddingLeft: `${t.borderRadius[300]}px`,
            paddingRight: `${t.borderRadius[300]}px`,
            backgroundColor: styles.backgroundColor,
            border: `${t.borderWidth.xs}px solid ${styles.borderColor}`,
            borderRadius: `${t.borderRadius[200]}px`,
            boxSizing: 'border-box',
            cursor: styles.cursor,
            userSelect: 'none',
          }}
        >
          {triggerStatus === 'focus' && (
            <div
              style={{
                position: 'absolute',
                inset: -(3 + t.borderWidth.xs),
                border: `${t.borderWidth.xs}px solid ${t.border.primary.focus}`,
                borderRadius: t.borderRadius[300],
                pointerEvents: 'none',
              }}
            />
          )}

          {TriggerLeadingIcon && (
            <span style={{ flexShrink: 0, display: 'flex' }}>
              <TriggerLeadingIcon width={ICON_SIZE} height={ICON_SIZE} color={styles.iconColor} />
            </span>
          )}

          <span
            style={{
              flex: '1 0 0',
              fontFamily: bodyTypo.fontFamily,
              fontSize: `${bodyTypo.fontSize}px`,
              fontWeight: bodyTypo.fontWeight,
              lineHeight: `${bodyTypo.lineHeight}px`,
              letterSpacing: bodyTypo.letterSpacing,
              color: styles.textColor,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              minWidth: 0,
            }}
          >
            {selectedLabel ?? placeholder}
          </span>

          <span style={{ flexShrink: 0, display: 'flex' }}>
            <ChevronIcon width={ICON_SIZE} height={ICON_SIZE} color={styles.iconColor} />
          </span>
        </div>

        {/* Menu — absolutely positioned below the trigger with xsm gap */}
        {isOpen && (
          <div
            style={{
              position: 'absolute',
              top: `calc(100% + ${t.layoutSpacing.xsm}px)`,
              left: 0,
              right: 0,
              zIndex: 10,
            }}
          >
            <Menu
              items={menuItems}
              defaultSelectedId={selectedId ?? undefined}
              onSelectionChange={handleItemSelect}
              theme={theme}
            />
          </div>
        )}
      </div>
    </div>
  );
}
