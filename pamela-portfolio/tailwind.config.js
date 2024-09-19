/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      primary: '#800020',
      white: '#FFFFFF',
      black:'#000000',
      grey:'#2C2B2B'
    },
    extend: {
      width: {
        340: '340px'
      },
      height: {
        345: '345px'
      },
      boxShadow: {
      },
      fontFamily: {
        bangers: ['Bangers', 'sans-serif'],
        kiteOne:['Kite One']
      },
    },      
    boxShadow: {
      'custom-inner-dark': 'inset 0 4px 6px rgba(0, 0, 0, 0.6), inset 0 -4px 6px rgba(255, 255, 255, 0.1)', // Dark inner shadow
    },
  },
  plugins: [
   
  ],
};
