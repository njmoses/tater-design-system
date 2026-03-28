import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';
import { ChevronLeft, ChevronRight } from 'react-coolicons';

const ICON_SIZE = 24;

export type PaginationItemStatus = 'default' | 'hover' | 'focus' | 'disabled';
export type PaginationItemType = 'next' | 'previous' | 'overflow' | 'numeric' | 'selected';
export type PaginationFormat = 'jumper' | 'default';

export interface PaginationItemProps {
  status?: PaginationItemStatus;
  type?: PaginationItemType;
  /** Number between 1–999, used for numeric and selected types */
  number?: number;
  theme?: Theme;
}

export interface PaginationProps {
  format?: PaginationFormat;
  theme?: Theme;
}

function getItemStyles(
  t: ReturnType<typeof useTokens>,
  status: PaginationItemStatus,
  type: PaginationItemType
) {
  if (status === 'disabled') {
    return {
      backgroundColor: t.surface.disabled.default,
      iconColor: t.icon.disabled.default,
      textColor: t.text.disabled.default,
    };
  }

  if (type === 'selected') {
    return {
      backgroundColor: status === 'hover' ? t.surface.primary.defaultHover : t.surface.primary.default,
      iconColor: t.icon.primary.onColor,
      textColor: t.text.primary.onColor,
    };
  }

  if (status === 'hover') {
    return {
      backgroundColor: t.surface.primary.defaultSubtleHover,
      iconColor: t.icon.primary.defaultHover,
      textColor: t.text.primary.defaultHover,
    };
  }

  // default or focus
  return {
    backgroundColor: t.base,
    iconColor: t.icon.primary.default,
    textColor: t.text.primary.default,
  };
}

export function PaginationItem({
  status = 'default',
  type = 'numeric',
  number = 1,
  theme = 'light',
}: PaginationItemProps) {
  const t = useTokens(theme);
  const styles = getItemStyles(t, status, type);
  const typo = typography.body.mdSemibold;

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: `${t.borderRadius[200]}px`,
        backgroundColor: styles.backgroundColor,
        boxSizing: 'border-box',
        flexShrink: 0,
        cursor: status === 'disabled' ? 'not-allowed' : 'pointer',
      }}
    >
      {status === 'focus' && (
        <div
          style={{
            position: 'absolute',
            inset: -3,
            border: `${t.borderWidth.xs}px solid ${t.border.primary.default}`,
            borderRadius: `${t.borderRadius[300]}px`,
            pointerEvents: 'none',
          }}
        />
      )}

      {(type === 'numeric' || type === 'selected') && (
        <span
          style={{
            fontFamily: typo.fontFamily,
            fontSize: `${typo.fontSize}px`,
            fontWeight: typo.fontWeight,
            lineHeight: `${typo.lineHeight}px`,
            letterSpacing: typo.letterSpacing,
            color: styles.textColor,
            whiteSpace: 'nowrap',
          }}
        >
          {number}
        </span>
      )}

      {type === 'previous' && (
        <ChevronLeft width={ICON_SIZE} height={ICON_SIZE} color={styles.iconColor} />
      )}

      {type === 'next' && (
        <ChevronRight width={ICON_SIZE} height={ICON_SIZE} color={styles.iconColor} />
      )}

      {type === 'overflow' && (
        <span
          style={{
            fontFamily: typo.fontFamily,
            fontSize: `${typo.fontSize}px`,
            fontWeight: typo.fontWeight,
            lineHeight: `${typo.lineHeight}px`,
            letterSpacing: typo.letterSpacing,
            color: styles.textColor,
          }}
        >
          •••
        </span>
      )}
    </div>
  );
}

export function Pagination({
  format = 'jumper',
  theme = 'light',
}: PaginationProps) {
  const t = useTokens(theme);
  const typo = typography.body.md;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${t.layoutSpacing.xsm}px`,
      }}
    >
      <PaginationItem type="previous" theme={theme} />

      {format === 'jumper' && (
        <>
          <PaginationItem type="numeric" number={1} theme={theme} />
          <PaginationItem type="numeric" number={2} theme={theme} />
          <PaginationItem type="numeric" number={3} theme={theme} />
          <PaginationItem type="numeric" number={4} theme={theme} />
        </>
      )}

      {format === 'default' && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: `${t.borderRadius[300]}px`,
          }}
        >
          <div
            style={{
              width: 74,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              paddingLeft: `${t.borderRadius[300]}px`,
              paddingRight: `${t.borderRadius[300]}px`,
              paddingTop: `${t.layoutSpacing.xsm}px`,
              paddingBottom: `${t.layoutSpacing.xsm}px`,
              backgroundColor: t.base,
              border: `${t.borderWidth.xs}px solid ${t.border.default.default}`,
              borderRadius: `${t.borderRadius[200]}px`,
              boxSizing: 'border-box',
            }}
          >
            <span
              style={{
                flex: '1 0 0',
                fontFamily: typo.fontFamily,
                fontSize: `${typo.fontSize}px`,
                fontWeight: typo.fontWeight,
                lineHeight: `${typo.lineHeight}px`,
                letterSpacing: typo.letterSpacing,
                color: t.text.disabled.default,
              }}
            >
              2
            </span>
          </div>
          <span
            style={{
              fontFamily: typo.fontFamily,
              fontSize: `${typo.fontSize}px`,
              fontWeight: typo.fontWeight,
              lineHeight: `${typo.lineHeight}px`,
              letterSpacing: typo.letterSpacing,
              color: t.text.default.body,
              whiteSpace: 'nowrap',
            }}
          >
            of 10 pages
          </span>
        </div>
      )}

      <PaginationItem type="next" theme={theme} />
    </div>
  );
}
