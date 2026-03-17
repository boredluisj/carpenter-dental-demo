/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { 50: '#f0f7fb', 100: '#e1eff7', 200: '#bce0f0', 300: '#86c6e5', 400: '#4ba7d6', 500: '#629ABB', 600: '#4a7ea3', 700: '#3d6784', 800: '#35576f', 900: '#304a5d' },
        secondary: { 50: '#fffef2', 100: '#fffbd9', 200: '#fff6b3', 300: '#fff04B', 400: '#ffeb26', 500: '#ffe100', 600: '#ccb400', 700: '#998700', 800: '#665a00', 900: '#332d00' },
        surface: '#F4ECE3',
        dark: '#5B4840',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Sorts Mill Goudy', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
