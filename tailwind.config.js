/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'spartan': ['League Spartan', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

