/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { 50: '#fdfbf7', 100: '#f9f5eb', 200: '#f2e8d3', 300: '#e9d7b4', 400: '#dec28f', 500: '#d2ab65', 600: '#c2934a', 700: '#a37537', 800: '#845e31', 900: '#6c4d2a' },
        accent: { 50: '#f0f4f8', 100: '#d9e2ec', 200: '#bcccdc', 300: '#9fb3c8', 400: '#829ab1', 500: '#627d98', 600: '#486581', 700: '#334e68', 800: '#243b53', 900: '#102a43' },
        surface: '#fafafa',
        dark: '#102a43',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
