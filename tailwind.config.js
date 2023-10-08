module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  media: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xm: ['.75rem', '1rem'], // font size, line height
      sm: ['.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.65rem'],
      xl: ['1.25rem', '1.75rem'],
      "2xl": ['1.4rem', '2rem'],
      "3xl": ['1.875rem', '2.25rem'],
      "4xl": ['2.25rem', '2.75rem'],
      "5xl": ['3rem', '3.5rem'],
      "6xl": ['3.75rem', '4.25rem'],
      "7xl": ['4.5rem', '5.2rem'],
    },
    extend:{
			height:{
        screenNav: "calc(100vh - 5rem)",
      },
			minHeight:{
        screenNav: "calc(100vh - 5rem)",
      },
			fontFamily: {
				montserrat: ['Montserrat'],
        beaurivage: ['Beau Rivage']
      },
      colors:{
        theme: {
          primary: "var(--primary)",
          secondary: "var(--secondary)",
          tertiary: "var(--tertiary)",
          quaternary: "var(--quaternary)",
          quinary: "var(--quinary)",
          senary: "var(--senary)",
          septenary: "var(--septenary)",
          octonary: "var(--octonary)",
        }
      },
      animation: {
        jump: 'jump 1s ease-in-out 1',
        wiggle: 'wiggle 1s ease-in-out infinite',
        flash: 'flash 1s ease-in-out 1',
        bouncer: "bouncer 1s ease-in-out 3",
        spinSlow: "spinSlow 5s linear infinite",
        slideLeft: "slideLeft 30s linear infinite",
        slideRight: "slideRight 30s linear infinite"
      },
      keyframes: {
        jump:{
          '16.65%': { transform: 'translateY(8rem)' }, /* 8px */
          '33.3%': { transform: 'translateY(-6rem)' },  /* -6px */
          '49.95%': { transform: 'translateY(4rem)' }, /* 4px */
          '66.6%': { transform: 'translateY(-2rem)' },  /* -2px */
          '83.25%': { transform: 'translateY(1rem)' },  /* 1px */
          '100%': { transform: 'translateY(0)' },  /* 0px */
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },     
        flash: {
          from: { backgroundColor: 'rgb(34 197 94)' },
          to: { backgroundColor: 'rgb(239 68 68)' }
        },
        bouncer: {
          "0%, 100%": {transform: "translateY(0)"},
          "50%": {transform: "translateY(-25%)"}
       },
       spinSlow: {
          "0%": { transform: "rotate(0deg)"},
          "100%": { transform: "rotate(360deg)"}
        },
        slideLeft: {
          "from": { transform: "translateX(0)"},
          "to": { transform: "translateX(-100%)"},
        },
        slideRight: {
          "from": { transform: "translateX(-100%)"},
          "to": { transform: "translateX(0)"},
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}