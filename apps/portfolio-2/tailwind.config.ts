import type { Config } from 'tailwindcss'

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--display)', 'var(--font-display)', 'Manrope', 'sans-serif'],
        sans: ['var(--sans)', 'var(--font-sans)', 'DM Sans', 'sans-serif'],
        mono: ['var(--mono)', 'var(--font-mono)', 'DM Mono', 'monospace'],
      },
      colors: {
        bg: '#f7f7f2',
        paper: '#ffffff',
        ink: '#18221e',
        muted: '#68736c',
        line: '#e4e8df',
        green: '#235b45',
        green2: '#dcebdd',
        lime: '#d7f36a',
      },
      boxShadow: {
        custom: '0 18px 60px rgba(30, 53, 39, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
