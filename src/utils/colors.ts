// Color utility functions and constants
import { theme } from '../theme';

// Convert hex to RGB for opacity support
export const hexToRGB = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
};

// Generate color with opacity
export const withOpacity = (colorVar: string, opacity: number): string => {
  const rgb = hexToRGB(colorVar);
  return `rgba(${rgb}, ${opacity})`;
};

// Color contrast checker
export const getContrastRatio = (foreground: string, background: string): number => {
  const getLuminance = (hex: string): number => {
    const rgb = hexToRGB(hex).split(', ').map(Number);
    const [r, g, b] = rgb.map(val => {
      val = val / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  const brightest = Math.max(l1, l2);
  const darkest = Math.min(l1, l2);
  return (brightest + 0.05) / (darkest + 0.05);
};