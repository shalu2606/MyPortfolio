/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor:{
        'primary' : "rgb(85 81 227)"
      },
      animation:{
        'fadein':'fadein 2s ease-in-out'
      },
      keyframes:{
        fadein:{
          '0':{opacity:0},
          '100%':{opacity:1},
        },
      },
    },
    fontFamily:{
      'hero-font':"sriracha"
    }
  },
  plugins: [],
}

