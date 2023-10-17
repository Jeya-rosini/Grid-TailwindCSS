/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#121212',
        's-blue': '#30475E',
        'l-blue': '#ff7070',
        'll-blue': '#F5F5F5',
      },
      fontFamily: {
        'pixelify-sans': ['Pixelify Sans','sans-serif'],
      },
    },
  },
  plugins: [],
}

