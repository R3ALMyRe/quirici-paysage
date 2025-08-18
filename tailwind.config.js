/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        switzer: ['Switzer', 'Arial', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'Arial', 'sans-serif'],
        archivo: ['Archivo', 'Arial', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '1px', // flou ultra léger
      }
    },
  },
  plugins: [],
}
