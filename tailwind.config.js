/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        deep: {
          DEFAULT: '#0B1420',
          raised: '#132033',
          card: '#1A2D45',
          border: '#243B55',
        },
        flow: {
          DEFAULT: '#2DD4BF',
          dim: '#1A9E8C',
          glow: 'rgba(45, 212, 191, 0.15)',
        },
        signal: {
          DEFAULT: '#F59E0B',
          dim: '#D97706',
          glow: 'rgba(245, 158, 11, 0.12)',
        },
        mist: {
          DEFAULT: '#E8EDF4',
          muted: '#94A3B8',
          faint: '#64748B',
        },
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.25rem, 5vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(1.75rem, 3.5vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.25' }],
      },
      spacing: {
        section: 'clamp(4rem, 10vw, 7rem)',
      },
      maxWidth: {
        content: '72rem',
      },
      animation: {
        'pulse-flow': 'pulse-flow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-flow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(45,212,191,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
    },
  },
  plugins: [],
}
