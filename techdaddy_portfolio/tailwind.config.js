/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f0c29',
        secondary: '#302b63',
        accent: '#24243e',
        neon: {
          DEFAULT: '#9370DA',
          light: '#A78BFA',
          dark: '#7C3AEA',
        },
        dark: '#0a0a0a',
        light: '#e0e0e0',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Intel One Mono', 'monospace'],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.4), 0 0 10px rgba(0, 255, 255, 0.2)' },
          '50%': { boxShadow: '0 0 15px rgba(0, 255, 255, 0.8), 0 0 25px rgba(0, 255, 255, 0.6)' }
        }
      },
      animation: {
        pulseGlow: 'pulseGlow 2s infinite ease-in-out'
      }
    }
  },
  plugins: []
}