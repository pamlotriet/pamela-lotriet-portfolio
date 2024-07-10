/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      smx:"380",
      sm: '770px', 
      md: '900px',
      lg: '1024px', 
      xl: '1280px',
      '2xl': '1536px', 
      '3xl': '1920px', 
    },
    colors: {
      primary: '#0F0E3E',
      white: '#FFFFFF',
    },
    extend: {
      width: {
        635: '635px',
        40: '40%',
        50: '50%',
        340: '340px',
        285: '285px',
        120: '120px',
        713: '713px',
      },
      height: {
        500: '500px',
        591: '591px',
        536: '536px',
        35: '35px',
        260: '260px',
      },
      borderRadius: {
        '20px': '20px',
      },
      boxShadow: {
        custom: '-6px -6px 7px #4644bf, 8px 8px 12px rgba(0, 0, 0, 0.7)',
        'custom-hover': '-2px -2px 4px #4644bf, 2px 2px 4px rgba(0, 0, 0, 0.7)',
        'custom-focus':
          'inset 2px 4px 12px rgba(0, 0, 0, 0.7), inset -2px -4px 8px #4644bf',
        'custom-image-container':
          'inset 6px 6px 15px rgba(0, 0, 0, 0.8), inset -4px -4px 15px #4644bf',
        'custom-project':
          'inset 6px 6px 20px rgba(0, 0, 0, 0.9), inset -4px -4px 18px #6c69ff',
      },
      fontFamily: {
        bangers: ['Bangers', 'sans-serif'],
      },
      animation: {
        runaccross: 'runaccross 2s linear infinite',
        runaccrossLeft: 'runaccrossLeft 2s linear infinite',
      },
      keyframes: {
        runaccross: {
          from: {
            transform: 'translateX(-120%)',
          },
          to: {
            transform: 'translateX(200%)',
          },
        },
        runaccrossLeft: {
          from: {
            transform: 'translateX(200%)',
          },
          to: {
            transform: 'translateX(-200%)',
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.custom-scrollbar': {
            '&::-webkit-scrollbar': {
              width: '15px',
            },
            '&::-webkit-scrollbar-track': {
              width: '15px',
              borderRadius: '20px',
              backgroundColor: 'var(--background)',
              boxShadow:
                '-0.5px -0.5px 1px rgba(108, 105, 255, 0.25), inset 2px 4px 12px rgba(0, 0, 0, 0.7), inset -2px -4px 8px #6c69ff',
            },
            '&::-webkit-scrollbar-thumb': {
              width: '15px',
              borderRadius: '20px',
              backgroundColor: 'var(--background)',
              boxShadow:
                '4px 4px 12px rgba(0, 0, 0, 0.25), inset 0px -2px 6px #0f0e3e, inset -0.5px -2px 8px #0f0e3e, inset 2px 2px 4px #0f0e3e, inset 2px -4px 10px rgba(108, 105, 255, 0.8), inset 3px 6px 10px #6c69ff',
            },
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
};
