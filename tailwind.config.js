/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animate:{
        '0%':{
          backgroundPosition: '0 0'
        },
        '25%': {
          backgroundPosition: '100% 0'
        },
        '50%': {
          backgroundPosition: '100% 100%'
        },
        '75%': {
          backgroundPosition: '0% 100%'
        },
        '100%': {
          backgroundPosition: '0% 0%'
        },
      },
      animation: {
        animate:'animate 10s ease-in-out infinite'
      }
    }
    },
  },
  plugins: [],
}