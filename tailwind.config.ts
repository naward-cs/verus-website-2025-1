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
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;