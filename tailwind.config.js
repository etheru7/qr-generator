/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'media', /** 'media' or 'class' */
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
    'primary': ['Manrope', 'sans-serif'],
  },
  colors: {
    'putih': '#EEEEEE',
    'dark': '#171717',
    'burger': '#a855f7',
    'hitam': '#0F0E0E',
  },
  screens: {
    '2xl': '1320px',
  }
    },
    plugins: [],
  },
};