/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kiwi: ['Kiwi Maru', 'serif'],
        notoSans: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
