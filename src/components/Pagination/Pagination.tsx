import { useState, useRef } from 'react';
import { useTokens, typography } from '@/tokens';
import type { Theme } from '@/tokens';
import { PaginationArrow } from './PaginationArrow';
import { PaginationOverflow } from './PaginationOverflow';
import { PaginationPage } from './PaginationPage';

export type PaginationFormat = 'default' | 'jumper';

export interface PaginationProps {
  format?: PaginationFormat;
  totalPages: number;
  defaultPage?: number;
  onPageChange?: (page: number) => void;
  theme?: Theme;
}

function buildPageWindows(totalPages: number, currentPage: number): (number | 'overflow')[] {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | 'overflow')[] = [1];

  if (currentPage <= 3) {
    pages.push(2, 3, 4, 'overflow', totalPages);
  } else if (currentPage >= totalPages - 2) {
    pages.push('overflow', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
  } else {
    pages.push('overflow', currentPage - 1, currentPage, currentPage + 1, 'overflow', totalPages);
  }

  return pages;
}

export function Pagination({
  format = 'default',
  totalPages,
  defaultPage = 1,
  onPageChange,
  theme = 'light',
}: PaginationProps) {
  const t = useTokens(theme);
  const typo = typography.body.md;
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const [inputValue, setInputValue] = useState(String(defaultPage));
  const inputRef = useRef<HTMLInputElement>(null);

  const goToPage = (page: number) => {
    const clamped = Math.max(1, Math.min(totalPages, page));
    setCurrentPage(clamped);
    setInputValue(String(clamped));
    onPageChange?.(clamped);
  };

  const handlePrevious = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const parsed = parseInt(inputValue, 10);
      if (!isNaN(parsed)) {
        goToPage(parsed);
      } else {
        setInputValue(String(currentPage));
      }
      inputRef.current?.blur();
    }
  };

  const pages = buildPageWindows(totalPages, currentPage);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: `${t.layoutSpacing.xsm}px`,
      }}
    >
      <PaginationArrow
        type="previous"
        status={currentPage === 1 ? 'disabled' : 'default'}
        onClick={handlePrevious}
        theme={theme}
      />

      {format === 'default' && pages.map((page, index) =>
        page === 'overflow' ? (
          <PaginationOverflow
            key={`overflow-${index}`}
            status="default"
            theme={theme}
          />
        ) : (
          <PaginationPage
            key={page}
            status="default"
            selected={page === currentPage}
            label={String(page)}
            onClick={() => goToPage(page)}
            theme={theme}
          />
        )
      )}

      {format === 'jumper' && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: `${t.layoutSpacing.xsm}px`,
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleInputKeyDown}
            style={{
              width: 74,
              height: 40,
              paddingLeft: `${t.layoutSpacing.xsm}px`,
              paddingRight: `${t.layoutSpacing.xsm}px`,
              paddingTop: `${t.layoutSpacing['2xsm']}px`,
              paddingBottom: `${t.layoutSpacing['2xsm']}px`,
              backgroundColor: t.base,
              border: `${t.borderWidth.xs}px solid ${t.border.default.default}`,
              borderRadius: `${t.borderRadius[200]}px`,
              boxSizing: 'border-box',
              fontFamily: typo.fontFamily,
              fontSize: `${typo.fontSize}px`,
              fontWeight: typo.fontWeight,
              lineHeight: `${typo.lineHeight}px`,
              letterSpacing: typo.letterSpacing,
              color: t.text.default.body,
              outline: 'none',
              textAlign: 'center',
            }}
          />
          <span
            style={{
              fontFamily: typo.fontFamily,
              fontSize: `${typo.fontSize}px`,
              fontWeight: typo.fontWeight,
              lineHeight: `${typo.lineHeight}px`,
              letterSpacing: typo.letterSpacing,
              color: t.text.default.caption,
              whiteSpace: 'nowrap',
            }}
          >
            of {totalPages} pages
          </span>
        </div>
      )}

      <PaginationArrow
        type="next"
        status={currentPage === totalPages ? 'disabled' : 'default'}
        onClick={handleNext}
        theme={theme}
      />
    </div>
  );
}
