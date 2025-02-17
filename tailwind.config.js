/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'Poppins Fallback', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

