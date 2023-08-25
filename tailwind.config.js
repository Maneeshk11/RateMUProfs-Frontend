/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
      },
      color: {
        primary: '#ff4545',
        'ratingBest': '#57e32c',
        'rating-good': '#b7dd29', 
        'rating-avg': '#ffe234',
        'rating-belowavg': '#ffa534',
        'ratingBad': '#ff4545',
      }
    },
  },
  plugins: [],
};
