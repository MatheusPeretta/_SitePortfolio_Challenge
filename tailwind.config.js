/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'azul':'#1F3650',
      },
      fontFamily:{
        'Mont': 'Montserrat, sans-serif',
        'Rubik': 'Rubik, sans-serif',
      }
    },
  },
  
  plugins: [],
}

