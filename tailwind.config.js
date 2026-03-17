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
      animation: {
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'grid-fade': 'grid-fade 10s ease-in-out infinite',
      },
      keyframes: {
        spotlight: {
          '0%': {
            opacity: 0,
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'grid-fade': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.3' },
        },
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' fill='%235B4840' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        'dots-pattern': "radial-gradient(#5B4840 0.5px, transparent 0.5px)",
      },
    },
  },
  plugins: [],
}
