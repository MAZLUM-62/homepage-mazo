export const theme = {
  colors: {
    // Brand colors
    brand: {
      primary: '#00A3FF',    // Signature blue - main brand color
      secondary: '#FF3366',  // Accent pink for highlights
    },
    // Background colors - Dark mode focused
    bg: {
      primary: '#0A0C10',    // Main background
      secondary: '#121620',  // Surface/cards background
      tertiary: '#1A1F2C',   // Elevated surfaces
      hover: '#232936',      // Hover states
    },
    // Interactive colors
    interactive: {
      default: '#00A3FF',    // Default state
      hover: '#33B5FF',      // Hover state
      active: '#0082CC',     // Active/pressed state
      focus: '#00A3FF40',    // Focus ring
    },
    // Text colors
    text: {
      primary: '#FFFFFF',    // Primary text (WCAG AAA on dark bg)
      secondary: '#B4B9C3',  // Secondary text (WCAG AA)
      tertiary: '#8B92A1',   // Tertiary text (WCAG AA)
      brand: '#00A3FF',      // Brand colored text
    },
    // Border colors
    border: {
      subtle: '#1F2937',     // Subtle borders
      default: '#2E3646',    // Default borders
      hover: '#404B5E',      // Border hover state
    },
    // Status colors
    status: {
      success: '#10B981',    // Success states
      error: '#EF4444',      // Error states
      warning: '#F59E0B',    // Warning states
      info: '#00A3FF',       // Info states
    }
  },
  // Animation durations
  transition: {
    fast: '100ms',
    normal: '200ms',
    slow: '300ms',
  }
} as const;