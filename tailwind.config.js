/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-up-2': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '50%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'color-change-and-slide-up': {
          // '0%': { color: '#fb923c', transform: 'translateY(100%)', opacity: 0 },
          // '35%': { color: '#fb923c' },
          // '70%': { color: '#4ade80' },
          '100%': { opacity: 1 }
        },
        'opacity': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        'color-change-and-slide-up': "color-change-and-slide-up 1.0s linear",
        'slide-up': "slide-up 1.2s",
        'slide-slow-up': "slide-up-2 1.6s",
        'opacity': 'opacity 1.2s',
        'opacity-slow': 'opacity 3.0s'
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay")
  ],
}
