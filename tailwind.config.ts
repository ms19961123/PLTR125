import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FAFCFC',
        foreground: '#14313B',
        brand: {
          teal: '#0FA3B1',
          sky: '#4DA8DA',
          sun: '#FFD166',
          coral: '#F28482',
        },
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        soft: '0 10px 30px -15px rgba(20, 49, 59, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
