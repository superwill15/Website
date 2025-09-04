// AssetStage Brand Constants
// Based on official brand guidelines v2.0

export const brandColors = {
  // Primary Colors
  primaryNavy: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
  primaryNavyStart: '#1e3c72',
  primaryNavyEnd: '#2a5298',
  stageBlue: '#3498db',
  stageBlueLigh: '#5dade2',
  
  // Accent Colors  
  qualityGreen: '#27ae60',
  qualityGreenLight: '#52c41a',
  processOrange: '#f39c12',
  processOrangeLight: '#faad14',
  
  // Semantic Colors
  success: '#27ae60',
  warning: '#f39c12',
  error: '#e74c3c',
  info: '#3498db',
  
  // Neutral Colors
  textPrimary: '#2c3e50',
  textSecondary: '#7f8c8d',
  textMuted: '#adb5bd',
  borderLight: '#dee2e6',
  bgLight: '#f8f9fa',
  bgGray: '#e9ecef',
  white: '#ffffff',
} as const;

export const brandFonts = {
  primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  mono: '"Monaco", "Courier New", monospace',
} as const;

export const brandSizes = {
  // Logo sizes
  logoHeight: {
    nav: 60,
    footer: 80,
    mobile: 40,
  },
  logoWidth: {
    nav: 240,
    footer: 320,
    mobile: 180,
  },
  // Typography scale
  fontSize: {
    display: '48px',
    h1: '32px',
    h2: '24px',
    h3: '20px',
    body: '16px',
    small: '14px',
    tiny: '12px',
  },
  fontWeight: {
    bold: 700,
    semibold: 600,
    medium: 500,
    regular: 400,
    light: 300,
  },
} as const;

export const brandSpacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
  xxxl: '64px',
} as const;

export const brandRadii = {
  small: '4px',
  medium: '6px',
  large: '8px',
  xlarge: '12px',
  round: '50%',
} as const;

export const brandShadows = {
  small: '0 2px 4px rgba(0,0,0,0.08)',
  medium: '0 4px 6px rgba(0,0,0,0.1)',
  large: '0 8px 16px rgba(0,0,0,0.12)',
  xlarge: '0 12px 24px rgba(0,0,0,0.15)',
} as const;

export const brandTransitions = {
  fast: '0.2s ease',
  normal: '0.3s ease',
  slow: '0.5s ease',
} as const;

export const brandBreakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
} as const;