const colors = require('tailwindcss/colors')
  module.exports = {
   content: ["src/**/*.jsx"],
  theme: {
    extend: {
      borderWidth:{
        1:"1px"
      },
      padding:{
        12.5:"50px",
        20:"80px"
        
      },
      margin:{
        15:"60px",
        20:"80px",
        10:"40px"
      }
    },
    colors:{
      primary:{
        default:"rgb(255,81,81)",
        light:"rgb(245,148,148)",
        dark:"rgb(248,47,47)"
        
      
      },
      gray :{
        300:"rgb(244,245,246)"
          },
      white:colors.white,
      black:colors.black,
    },
  },
  plugins: [],
}
