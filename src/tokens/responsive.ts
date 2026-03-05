/**
 * RESPONSIVE TOKENS
 * Auto-generated from Figma Variables export — Responsive + Typography collections
 * Contains breakpoint-aware font sizes, line heights, and screen spacing.
 * Do not edit directly. Re-generate from Figma when values change.
 */

export const responsive = {

  frameWidth: {
    desktop: 1440,
    mobile:  440,
  },

  font: {
    desktop: {
      headings: {
        h1: { fontSize: 60, lineHeight: 72, paragraphSpacing: 72 },
        h2: { fontSize: 48, lineHeight: 56, paragraphSpacing: 56 },
        h3: { fontSize: 40, lineHeight: 48, paragraphSpacing: 48 },
        h4: { fontSize: 32, lineHeight: 40, paragraphSpacing: 40 },
        h5: { fontSize: 24, lineHeight: 28, paragraphSpacing: 28 },
        h6: { fontSize: 20, lineHeight: 24, paragraphSpacing: 24 },
      },
      copy: {
        bodySm: { fontSize: 14, lineHeight: 16, paragraphSpacing: 16 },
        bodyMd: { fontSize: 16, lineHeight: 20, paragraphSpacing: 20 },
        bodyLg: { fontSize: 20, lineHeight: 24, paragraphSpacing: 24 },
        caption: { fontSize: 12, lineHeight: 16, paragraphSpacing: 16 },
      },
    },
    mobile: {
      headings: {
        h1: { fontSize: 48, lineHeight: 56, paragraphSpacing: 56 },
        h2: { fontSize: 40, lineHeight: 48, paragraphSpacing: 48 },
        h3: { fontSize: 32, lineHeight: 40, paragraphSpacing: 40 },
        h4: { fontSize: 28, lineHeight: 32, paragraphSpacing: 32 },
        h5: { fontSize: 24, lineHeight: 28, paragraphSpacing: 28 },
        h6: { fontSize: 20, lineHeight: 24, paragraphSpacing: 24 },
      },
      copy: {
        bodySm: { fontSize: 14, lineHeight: 16, paragraphSpacing: 16 },
        bodyMd: { fontSize: 16, lineHeight: 20, paragraphSpacing: 20 },
        bodyLg: { fontSize: 20, lineHeight: 24, paragraphSpacing: 24 },
        caption: { fontSize: 12, lineHeight: 16, paragraphSpacing: 16 },
      },
    },
  },

  screenSpacing: {
    desktop: { xlMd: 96, xlMd2: 96, xlMd3: 128 },
    mobile:  { xlMd: 64, xlMd2: 32, xlMd3: 64  },
  },

} as const;

/**
 * TYPOGRAPHY STYLES
 * Complete text style definitions from the Typography/Style collection.
 * Use these for consistent text rendering across components.
 */
export const typography = {

  body: {
    sm: {
      fontSize: 14, fontFamily: 'Rubik', fontWeight: 'Regular',
      lineHeight: 16, letterSpacing: 0, textDecoration: 'none',
    },
    smLink: {
      fontSize: 14, fontFamily: 'Rubik', fontWeight: 'Regular',
      lineHeight: 16, letterSpacing: 0, textDecoration: 'underline',
    },
    smSemibold: {
      fontSize: 14, fontFamily: 'Rubik', fontWeight: 'SemiBold',
      lineHeight: 16, letterSpacing: 0, textDecoration: 'none',
    },
    md: {
      fontSize: 16, fontFamily: 'Rubik', fontWeight: 'Regular',
      lineHeight: 20, letterSpacing: 0, textDecoration: 'none',
    },
    mdLink: {
      fontSize: 16, fontFamily: 'Rubik', fontWeight: 'Regular',
      lineHeight: 20, letterSpacing: 0, textDecoration: 'underline',
    },
    mdSemibold: {
      fontSize: 16, fontFamily: 'Rubik', fontWeight: 'SemiBold',
      lineHeight: 20, letterSpacing: 0, textDecoration: 'none',
    },
    lg: {
      fontSize: 20, fontFamily: 'Rubik', fontWeight: 'Regular',
      lineHeight: 24, letterSpacing: 0, textDecoration: 'none',
    },
    lgLink: {
      fontSize: 20, fontFamily: 'Rubik', fontWeight: 'Regular',
      lineHeight: 24, letterSpacing: 0, textDecoration: 'underline',
    },
    lgSemibold: {
      fontSize: 20, fontFamily: 'Rubik', fontWeight: 'SemiBold',
      lineHeight: 24, letterSpacing: 0, textDecoration: 'none',
    },
  },

  heading: {
    h1: {
      fontSize: 60, fontFamily: 'Rubik', fontWeight: 'SemiBold',
      lineHeight: 72, letterSpacing: 0, textDecoration: 'none',
    },
    h2: {
      fontSize: 48, fontFamily: 'Rubik', fontWeight: 'SemiBold',
      lineHeight: 56, letterSpacing: 0, textDecoration: 'none',
    },
    h3: {
      fontSize: 40, fontFamily: 'Rubik', fontWeight: 'SemiBold',
      lineHeight: 48, letterSpacing: 0, textDecoration: 'none',
    },
    h4: {
      fontSize: 32, fontFamily: 'Rubik', fontWeight: 'SemiBold',
      lineHeight: 40, letterSpacing: 0, textDecoration: 'none',
    },
    h5: {
      fontSize: 24, fontFamily: 'Rubik', fontWeight: 'SemiBold',
      lineHeight: 28, letterSpacing: 0, textDecoration: 'none',
    },
    h6: {
      fontSize: 20, fontFamily: 'Rubik', fontWeight: 'SemiBold',
      lineHeight: 24, letterSpacing: 0, textDecoration: 'none',
    },
  },

  label: {
    primary: {
      fontSize: 16, fontFamily: 'Rubik', fontWeight: 'SemiBold',
      lineHeight: 20, letterSpacing: 0, textDecoration: 'none',
    },
    secondary: {
      fontSize: 16, fontFamily: 'Rubik', fontWeight: 'Regular',
      lineHeight: 20, letterSpacing: 0, textDecoration: 'none',
    },
  },

} as const;

export type Responsive = typeof responsive;
export type Typography = typeof typography;
