/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          white: '#FFFFFF',
          surface: '#F7F7F8',
          elevated: '#FFFFFF',
          ink: '#0B0C0E',
          inkAlt: '#111318',
          border: '#E5E5E7',
          borderDark: '#26272B',
        },
        brand: {
          50: '#FFF3EE',
          100: '#FFE1D2',
          200: '#FFC0A3',
          300: '#FF9868',
          400: '#FA6A38',
          500: '#FA582D',
          600: '#E0431A',
          700: '#B93712',
          800: '#8F2B0E',
          900: '#6B200A',
        },
        teal: {
          100: '#E3F7F9',
          300: '#A9E4EA',
          500: '#8AD3DE',
          700: '#4FA6B3',
        },
        neutral: {
          0: '#FFFFFF',
          50: '#FAFAFA',
          100: '#F2F2F3',
          200: '#E5E5E7',
          300: '#D4D4D8',
          400: '#A3A3AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#0B0C0E',
        },
        success: '#1B8A5A',
        warning: '#D97706',
        error: '#DC2626',
        info: '#0EA5E9',
        darkSection: {
          text: '#FFFFFF',
          textMuted: '#A3A3AA',
          accentText: '#FF9868',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['"TT Hoves"', 'TTHoves', 'Arial', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-2xl': [
          '4rem',
          { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'display-xl': [
          '3.25rem',
          { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'display-lg': [
          '2.75rem',
          { lineHeight: '1.12', letterSpacing: '-0.015em', fontWeight: '700' },
        ],
        'display-md': [
          '2.25rem',
          { lineHeight: '1.18', letterSpacing: '-0.01em', fontWeight: '700' },
        ],
        'display-sm': [
          '1.75rem',
          { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
        'stat-xl': [
          '4.5rem',
          { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'stat-lg': [
          '3rem',
          { lineHeight: '1', letterSpacing: '-0.015em', fontWeight: '800' },
        ],
        'stat-md': ['2.25rem', { lineHeight: '1', fontWeight: '700' }],
        'body-xl': ['1.25rem', { lineHeight: '1.65', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        label: [
          '0.6875rem',
          { lineHeight: '1.3', fontWeight: '700', letterSpacing: '0.08em' },
        ],
      },
      maxWidth: {
        content: '1280px',
        wide: '1440px',
        narrow: '760px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.08)',
        hover: '0 8px 24px rgba(0,0,0,0.12)',
        nav: '0 12px 32px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        sm: '4px',
        md: '6px',
        lg: '10px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        marqueeScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseNode: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.3)' },
        },
        arcFlash: {
          '0%': { opacity: '0' },
          '15%': { opacity: '1' },
          '85%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        videoFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmerBadge: {
          '0%': { backgroundPosition: '-150% 0' },
          '100%': { backgroundPosition: '150% 0' },
        },
      },
      animation: {
        marquee: 'marqueeScroll 40s linear infinite',
        'pulse-node': 'pulseNode 2s ease-in-out infinite',
        'arc-flash': 'arcFlash 1.2s ease-in-out',
        'video-fade': 'videoFadeIn 0.8s ease-out forwards',
        shimmer: 'shimmerBadge 2s linear infinite',
      },
    },
  },
  plugins: [],
}
