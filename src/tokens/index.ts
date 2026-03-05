/**
 * TOKENS — Main Export
 * Single entry point for all design tokens in your application.
 *
 * Usage:
 *   import { tokens } from '@/tokens';
 *   import { useTokens } from '@/tokens';
 *
 * Token layers (do not import these directly in components):
 *   brand    → raw values (hex codes, font names)
 *   alias    → semantic meaning (primary, error, success...)
 *   mapped   → use-case tokens (surface, text, icon, border) with light/dark modes
 *   responsive → breakpoint-aware font sizes and screen spacing
 *   typography → complete text style definitions
 */

export { brand } from './brand';
export { alias } from './alias';
export { mapped, type Theme } from './mapped';
export { responsive, typography } from './responsive';

/**
 * useTokens — convenience hook for getting the current theme's mapped tokens.
 *
 * Example:
 *   const t = useTokens('light');
 *   backgroundColor: t.surface.primary.default
 *   color: t.text.default.heading
 *   borderColor: t.border.primary.default
 */
import { mapped } from './mapped';
import type { Theme } from './mapped';

export function useTokens(theme: Theme = 'light') {
  return {
    ...mapped[theme],
    ...mapped.structure,
  };
}

/**
 * tokens — static export for use outside of React (e.g. in utility files).
 * Defaults to light mode. Use useTokens() in components for theme awareness.
 */
import { responsive, typography } from './responsive';

export const tokens = {
  light: { ...mapped.light,  ...mapped.structure },
  dark:  { ...mapped.dark,   ...mapped.structure },
  responsive,
  typography,
} as const;
