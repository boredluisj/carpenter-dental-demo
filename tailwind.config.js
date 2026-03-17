/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { 
          50: '#FDFBF7', 
          100: '#F7F1DE', 
          200: '#EEE0BC', 
          300: '#E1C78F', 
          400: '#D4AB63', 
          500: '#C58D41', // Luxury Gold
          600: '#AB7336', 
          700: '#8B5A2E', 
          800: '#714A29', 
          900: '#5D3D25' 
        },
        surface: '#FDFCFB', // Clean Parchment
        dark: '#1A0F0D',    // Deep Espresso
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Cormorant Garamond', 'serif'],
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
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' fill='%23C58D41' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        'dots-pattern': "radial-gradient(#C58D41 0.5px, transparent 0.5px)",
      },
    },
  },
  plugins: [],
}
