/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          primary: '#00A3FF',
          secondary: '#FF3366',
        },
        // Background colors
        bg: {
          primary: '#0A0C10',
          secondary: '#121620',
          tertiary: '#1A1F2C',
          hover: '#232936',
        },
        // Interactive colors
        interactive: {
          default: '#00A3FF',
          hover: '#33B5FF',
          active: '#0082CC',
          focus: '#00A3FF40',
        },
        // Text colors
        text: {
          primary: '#FFFFFF',
          secondary: '#B4B9C3',
          tertiary: '#8B92A1',
          brand: '#00A3FF',
        },
        // Border colors
        border: {
          subtle: '#1F2937',
          default: '#2E3646',
          hover: '#404B5E',
        },
        // Status colors
        status: {
          success: '#10B981',
          error: '#EF4444',
          warning: '#F59E0B',
          info: '#00A3FF',
        }
      },
      transitionDuration: {
        fast: '100ms',
        normal: '200ms',
        slow: '300ms',
      }
    },
  },
  plugins: [],
};