/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        ash100: 'rgba(217, 217, 217, 0.30)',
        ash200: 'rgba(58, 58, 58, 0.40)',
        red100: 'rgba(223, 60, 60, 0.80)',
        overlay: 'rgba(58, 58, 58, 0.50)',
        ash300: 'rgba(217, 217, 217, 0.10)',
        ash400: 'rgba(58, 58, 58, 0.80)',
        ash700: 'rgba(58, 58, 58, 0.70)',
      },
    },
  },
  plugins: [],
};
