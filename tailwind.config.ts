import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
    },
  },
  plugins: [],
};

export default config;