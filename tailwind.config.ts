import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        verus: {
          blue: '#3165D4',
        },
        black: '#0F0F0F',
      },
      fontFamily: {
        sans: ['var(--font-geomanist)', 'system-ui', 'sans-serif'],
      },
      animation: {
        // Speed up the animation durations for navigation menu
        'in': 'enter 100ms ease-out',
        'out': 'exit 100ms ease-in',
        'fade-in': 'fade-in 100ms ease-out',
        'fade-out': 'fade-out 100ms ease-in',
        'zoom-in-90': 'zoom-in-90 100ms ease-out',
        'zoom-out-95': 'zoom-out-95 100ms ease-in',
        // Add marquee animations for community page
        'marquee-ltr': 'marquee-ltr 60s linear infinite',
        'marquee-rtl': 'marquee-rtl 60s linear infinite',
        // Add vertical scrolling animations for community grid
        'scroll-down': 'scroll-down 35s linear infinite',
        'scroll-up': 'scroll-up 35s linear infinite',
      },
      keyframes: {
        // Existing keyframes...
        'marquee-ltr': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-rtl': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        // Vertical scrolling keyframes
        'scroll-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(calc(-100% + 500px))' },
        },
        'scroll-up': {
          '0%': { transform: 'translateY(calc(-100% + 500px))' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;