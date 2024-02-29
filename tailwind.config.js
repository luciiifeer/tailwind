/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
    },
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif',],
    },
    extend: {
      maxWidth: {
        'Container': '1320px',
      }
    },
  },
  plugins: [],
}


