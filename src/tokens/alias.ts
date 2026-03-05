/**
 * ALIAS TOKENS
 * Auto-generated from Figma Variables export — Alias collection
 * References brand tokens to assign semantic meaning to raw values.
 * Do not edit directly. Re-generate from Figma when alias values change.
 */

import { brand } from './brand';

export const alias = {

  // --- SEMANTIC COLORS ---

  primary: {
    100: brand.purple[100],
    150: brand.purple[150],
    200: brand.purple[200],
    300: brand.purple[300],
    400: brand.purple[400],
    500: brand.purple[500],
    600: brand.purple[600],
    700: brand.purple[700],
    800: brand.purple[800],
    900: brand.purple[900],
    950: brand.purple[950],
  },

  error: {
    100: brand.red[100],
    150: brand.red[150],
    200: brand.red[200],
    300: brand.red[300],
    400: brand.red[400],
    500: brand.red[500],
    600: brand.red[600],
    700: brand.red[700],
    800: brand.red[800],
    900: brand.red[900],
    950: brand.red[950],
  },

  information: {
    100: brand.blue[100],
    150: brand.blue[150],
    200: brand.blue[200],
    300: brand.blue[300],
    400: brand.blue[400],
    500: brand.blue[500],
    600: brand.blue[600],
    700: brand.blue[700],
    800: brand.blue[800],
    900: brand.blue[900],
    950: brand.blue[950],
  },

  success: {
    100: brand.green[100],
    150: brand.green[150],
    200: brand.green[200],
    300: brand.green[300],
    400: brand.green[400],
    500: brand.green[500],
    600: brand.green[600],
    700: brand.green[700],
    800: brand.green[800],
    900: brand.green[900],
    950: brand.green[950],
  },

  warning: {
    100: brand.orange[100],
    150: brand.orange[150],
    200: brand.orange[200],
    300: brand.orange[300],
    400: brand.orange[400],
    500: brand.orange[500],
    600: brand.orange[600],
    700: brand.orange[700],
    800: brand.orange[800],
    900: brand.orange[900],
    950: brand.orange[950],
  },

  neutral: {
    100: brand.grey[100],
    150: brand.grey[150],
    200: brand.grey[200],
    300: brand.grey[300],
    400: brand.grey[400],
    500: brand.grey[500],
    600: brand.grey[600],
    700: brand.grey[700],
    800: brand.grey[800],
    900: brand.grey[900],
    950: brand.grey[950],
  },

  // --- FOUNDATIONS ---

  foundations: {
    white: brand.foundations.white,
    black: brand.foundations.black,
  },

  // --- TYPOGRAPHY ---

  font: {
    primary: brand.fonts.rubik.family, // 'Rubik'
  },

  // --- SPACING SCALE ---
  // Raw pixel values as numbers. Append 'px' when used in CSS.
  // Scale name → pixel value: 25→1, 50→2, 100→4, 200→8 ... (4pt base grid)

  scale: {
    0:    0,
    25:   1,
    50:   2,
    100:  4,
    200:  8,
    300:  12,
    400:  16,
    500:  20,
    600:  24,
    700:  28,
    800:  32,
    900:  36,
    1000: 40,
    1100: 48,
    1200: 56,
    1300: 64,
    1400: 72,
    1500: 80,
    1600: 96,
    1700: 112,
    1800: 128,
    1900: 144,
    2000: 160,
  },

} as const;

export type Alias = typeof alias;
