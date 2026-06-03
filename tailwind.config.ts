import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        summit: {
          amber:  '#C97C3A',
          coral:  '#B85C3E',
          gold:   '#D4A054',
          mist:   '#F7F1E8',
          plum:   '#3A2235',
          stone:  '#6B5C50',
          cloud:  '#FDFAF5',
          dusk:   '#E2D3C0',
          slate:  '#221A1A',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body:    ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 4px 24px rgba(180, 100, 50, 0.14)',
        card: '0 2px 16px rgba(34, 26, 26, 0.07)',
      },
      borderRadius: {
        card: '10px',
      },
    },
  },
  plugins: [],
}

export default config
