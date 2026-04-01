import React from 'react';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';
import { Link } from '@/components/Link/Link';
import type { LinkStatus, IconComponent } from '@/components/Link/Link';
import { ChevronRight } from 'react-coolicons';

export interface BreadcrumbItem {
  label: string;
  status?: LinkStatus;
  showLeadingIcon
  ?: boolean;
  leadingIcon?: IconComponent;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage: string;
  showTrailingIcon?: boolean;
  trailingIcon?: IconComponent;
  theme?: Theme;
}

const SEPARATOR_SIZE = 16;

export function Breadcrumb({
  items,
  currentPage,
  showTrailingIcon = false,
  trailingIcon,
  theme = 'light',
}: BreadcrumbProps) {
  const t = useTokens(theme);
  const typo = typography.body.md;

  return (
    <nav
      aria-label="breadcrumb"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${t.layoutSpacing['2xsm']}px`,
      }}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Link
            status={item.status ?? 'default'}
            type="basic"
            label={item.label}
            showLeadingIcon={item.showLeadingIcon ?? false}
            leadingIcon={item.leadingIcon}
            showTrailingIcon={showTrailingIcon}
            trailingIcon={showTrailingIcon ? trailingIcon : undefined}
            theme={theme}
          />
          <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <ChevronRight
              width={SEPARATOR_SIZE}
              height={SEPARATOR_SIZE}
              color={t.icon.default.subtle}
            />
          </span>
        </React.Fragment>
      ))}

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
        {currentPage}
      </span>
    </nav>
  );
}
