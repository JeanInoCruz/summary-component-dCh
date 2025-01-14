/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'orangey-yellow': 'hsl(39, 100%, 56%)',
        'green-teal': 'hsl(166, 100%, 37%)',
        'cobalt-blue': 'hsl(234, 85%, 45%)',
        'light-red': 'hsl(0, 100%, 67%)',
        'whiteado': 'hsl(0, 0%, 100%)',
        'pale-blue': 'hsl(221, 100%, 96%)',
        'dark-gray': 'hsl(224, 30%, 27%)',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'lavender': 'hsl(241, 100%, 89%)',
        'royal-blue': 'hsl(241, 81%, 54%)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',
        'slate-blue': 'hsl(252, 100%, 63%)',
      },
      fontFamily: {
        hanken: ['Hanken Grotesk', 'sans-serif'],
      },
      borderRadius: {
        '5xl': '36px',
        
      }
    },
  },
  plugins: [],
}

