/**
 * MAPPED TOKENS
 * Auto-generated from Figma Variables export — Mapped collection
 * These are the use-case tokens your components import directly.
 * Supports light and dark modes.
 * Do not edit directly. Re-generate from Figma when mapped values change.
 */

import { alias } from './alias';

const light = {
  base:    alias.neutral[100],
  default: alias.neutral[200],

  surface: {
    primary: {
      default:            alias.primary[500],
      defaultHover:       alias.primary[600],
      defaultSubtle:      alias.primary[100],
      defaultSubtleHover: alias.primary[150],
    },
    success: {
      default:            alias.success[500],
      defaultHover:       alias.success[600],
      defaultSubtle:      alias.success[100],
      defaultSubtleHover: alias.success[150],
    },
    information: {
      default:            alias.information[500],
      defaultHover:       alias.information[600],
      defaultSubtle:      alias.information[100],
      defaultSubtleHover: alias.information[150],
    },
    warning: {
      default:            alias.warning[500],
      defaultHover:       alias.warning[600],
      defaultSubtle:      alias.warning[100],
      defaultSubtleHover: alias.warning[150],
    },
    error: {
      default:       alias.error[500],
      defaultHover:  alias.error[600],
      defaultSubtle: alias.error[100],
    },
    disabled: {
      default:      alias.neutral[150],
      defaultHover: alias.neutral[200],
      selected:     alias.neutral[500],
    },
  },

  text: {
    default: {
      heading:     alias.neutral[950],
      body:        alias.neutral[900],
      caption:     alias.neutral[800],
      placeholder: alias.neutral[700],
    },
    onColor: {
      heading:     alias.foundations.white,
      body:        alias.foundations.white,
      caption:     alias.neutral[100],
      placeholder: alias.neutral[100],
    },
    primary: {
      default:        alias.primary[500],
      defaultHover:   alias.primary[600],
      onColor:        alias.foundations.white,
      onColorHover:   alias.foundations.white,
    },
    success: {
      default:      alias.success[500],
      defaultHover: alias.success[600],
      onColor:      alias.foundations.white,
      onColorHover: alias.foundations.white,
    },
    information: {
      default:      alias.information[500],
      defaultHover: alias.information[600],
      onColor:      alias.foundations.white,
      onColorHover: alias.foundations.white,
    },
    warning: {
      default:      alias.warning[500],
      defaultHover: alias.warning[600],
      onColor:      alias.foundations.white,
      onColorHover: alias.foundations.white,
    },
    error: {
      default:      alias.error[500],
      defaultHover: alias.error[600],
      onColor:      alias.foundations.white,
      onColorHover: alias.foundations.white,
    },
    disabled: {
      default: alias.neutral[500],
      onColor: alias.foundations.white,
    },
  },

  icon: {
    default: {
      emphasis: alias.neutral[950],
      regular:  alias.neutral[900],
      subtle:   alias.neutral[800],
    },
    primary: {
      default:      alias.primary[500],
      defaultHover: alias.primary[600],
      onColor:      alias.foundations.white,
      onColorHover: alias.foundations.white,
    },
    success: {
      default:      alias.success[500],
      defaultHover: alias.success[600],
      onColor:      alias.foundations.white,
      onColorHover: alias.foundations.white,
    },
    information: {
      default:      alias.information[500],
      defaultHover: alias.information[600],
      onColor:      alias.foundations.white,
      onColorHover: alias.foundations.white,
    },
    warning: {
      default:      alias.warning[500],
      defaultHover: alias.warning[600],
      onColor:      alias.foundations.white,
      onColorHover: alias.foundations.white,
    },
    error: {
      default:      alias.error[500],
      defaultHover: alias.error[600],
      onColor:      alias.foundations.white,
      onColorHover: alias.foundations.white,
    },
    disabled: {
      default: alias.neutral[500],
      onColor: alias.foundations.white,
    },
  },

  border: {
    base:    alias.neutral[100],
    onColor: alias.foundations.white,
    default: { default: alias.neutral[300] },
    primary: {
      default:      alias.primary[500],
      defaultHover: alias.primary[600],
      focus:        alias.primary[500],
    },
    success: {
      default:      alias.success[500],
      defaultHover: alias.success[600],
      focus:        alias.success[500],
    },
    information: {
      default:      alias.information[500],
      defaultHover: alias.information[600],
      focus:        alias.information[500],
    },
    warning: {
      default:      alias.warning[500],
      defaultHover: alias.warning[600],
      focus:        alias.warning[500],
    },
    error: {
      default:      alias.error[500],
      defaultHover: alias.error[600],
      focus:        alias.error[500],
    },
    disabled: {
      default:      alias.neutral[200],
      defaultHover: alias.neutral[300],
    },
  },
} as const;

const dark = {
  base:    alias.neutral[950],
  default: alias.neutral[900],

  surface: {
    primary: {
      default:            alias.primary[500],
      defaultHover:       alias.primary[400],
      defaultSubtle:      alias.primary[950],
      defaultSubtleHover: alias.primary[900],
    },
    success: {
      default:            alias.success[500],
      defaultHover:       alias.success[400],
      defaultSubtle:      alias.success[950],
      defaultSubtleHover: alias.success[900],
    },
    information: {
      default:            alias.information[500],
      defaultHover:       alias.information[400],
      defaultSubtle:      alias.information[950],
      defaultSubtleHover: alias.information[900],
    },
    warning: {
      default:            alias.warning[500],
      defaultHover:       alias.warning[400],
      defaultSubtle:      alias.warning[950],
      defaultSubtleHover: alias.warning[900],
    },
    error: {
      default:       alias.error[500],
      defaultHover:  alias.error[400],
      defaultSubtle: alias.error[950],
    },
    disabled: {
      default:      alias.neutral[900],
      defaultHover: alias.neutral[800],
      selected:     alias.error[900],
    },
  },

  text: {
    default: {
      heading:     alias.neutral[100],
      body:        alias.neutral[100],
      caption:     alias.neutral[200],
      placeholder: alias.neutral[300],
    },
    onColor: {
      heading:     alias.foundations.white,
      body:        alias.foundations.white,
      caption:     alias.neutral[950],
      placeholder: alias.neutral[950],
    },
    primary: {
      default:      alias.primary[500],
      defaultHover: alias.primary[400],
      onColor:      alias.foundations.black,
      onColorHover: alias.foundations.black,
    },
    success: {
      default:      alias.success[500],
      defaultHover: alias.success[400],
      onColor:      alias.foundations.black,
      onColorHover: alias.foundations.black,
    },
    information: {
      default:      alias.information[500],
      defaultHover: alias.information[400],
      onColor:      alias.foundations.black,
      onColorHover: alias.foundations.black,
    },
    warning: {
      default:      alias.warning[500],
      defaultHover: alias.warning[400],
      onColor:      alias.foundations.black,
      onColorHover: alias.foundations.black,
    },
    error: {
      default:      alias.error[500],
      defaultHover: alias.error[400],
      onColor:      alias.foundations.black,
      onColorHover: alias.foundations.black,
    },
    disabled: {
      default: alias.neutral[500],
      onColor: alias.neutral[600],
    },
  },

  icon: {
    default: {
      emphasis: alias.neutral[100],
      regular:  alias.neutral[150],
      subtle:   alias.neutral[200],
    },
    primary: {
      default:      alias.primary[500],
      defaultHover: alias.primary[400],
      onColor:      alias.foundations.black,
      onColorHover: alias.foundations.black,
    },
    success: {
      default:      alias.success[500],
      defaultHover: alias.success[400],
      onColor:      alias.foundations.black,
      onColorHover: alias.foundations.black,
    },
    information: {
      default:      alias.information[500],
      defaultHover: alias.information[400],
      onColor:      alias.foundations.black,
      onColorHover: alias.foundations.black,
    },
    warning: {
      default:      alias.warning[500],
      defaultHover: alias.warning[400],
      onColor:      alias.foundations.black,
      onColorHover: alias.foundations.black,
    },
    error: {
      default:      alias.error[500],
      defaultHover: alias.error[400],
      onColor:      alias.foundations.black,
      onColorHover: alias.foundations.black,
    },
    disabled: {
      default: alias.neutral[500],
      onColor: alias.neutral[600],
    },
  },

  border: {
    base:    alias.neutral[950],
    onColor: alias.foundations.black,
    default: { default: alias.neutral[700] },
    primary: {
      default:      alias.primary[500],
      defaultHover: alias.primary[400],
      focus:        alias.primary[500],
    },
    success: {
      default:      alias.success[500],
      defaultHover: alias.success[400],
      focus:        alias.success[500],
    },
    information: {
      default:      alias.information[500],
      defaultHover: alias.information[400],
      focus:        alias.information[500],
    },
    warning: {
      default:      alias.warning[500],
      defaultHover: alias.warning[400],
      focus:        alias.warning[500],
    },
    error: {
      default:      alias.error[500],
      defaultHover: alias.error[400],
      focus:        alias.error[500],
    },
    disabled: {
      default:      alias.neutral[800],
      defaultHover: alias.neutral[700],
    },
  },
} as const;

// Shared structural tokens (same in both modes)
const structure = {
  borderWidth: {
    xs: alias.scale[25],   // 1px
    sm: alias.scale[50],   // 2px
    md: alias.scale[100],  // 4px
    lg: alias.scale[200],  // 8px
    xl: alias.scale[300],  // 12px
  },
  borderRadius: {
    100: alias.scale[100],  // 4px
    200: alias.scale[200],  // 8px
    300: alias.scale[300],  // 12px
    400: alias.scale[400],  // 16px
    500: alias.scale[500],  // 20px
    600: alias.scale[600],  // 24px
    round: alias.scale[2000], // 160px - pill shape
  },
  layoutSpacing: {
    none: alias.scale[0],     // 0px
    '2xsm': alias.scale[100], // 4px
    xsm:  alias.scale[200],   // 8px
    sm:   alias.scale[400],   // 16px
    md:   alias.scale[600],   // 24px
    lg:   alias.scale[800],   // 32px
    xlg:  alias.scale[1000],  // 40px
    '2xlg': alias.scale[1100],// 48px
  },
} as const;

export const mapped = { light, dark, structure } as const;
export type Mapped = typeof mapped;
export type Theme = 'light' | 'dark';
