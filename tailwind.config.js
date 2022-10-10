/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'C_header': ['Cormorant Garamond', 'serif']
      }
    },
  },
  plugins: [require("daisyui")],
}


