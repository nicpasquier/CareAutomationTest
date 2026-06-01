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
          amber:  '#E8923A',
          coral:  '#D4624A',
          gold:   '#F2C46D',
          mist:   '#FAF5EE',
          plum:   '#2C2340',
          stone:  '#6B5F52',
          cloud:  '#FFFDF9',
          dusk:   '#E5D9C8',
          slate:  '#1E1B2E',
        },
      },
      fontFamily: {
        display: ['DM Sans', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 4px 24px rgba(232, 146, 58, 0.12)',
        card: '0 2px 16px rgba(30, 27, 46, 0.08)',
      },
      borderRadius: {
        card: '12px',
      },
    },
  },
  plugins: [],
}

export default config
