/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // tailwind.config.js
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        cream: "#fff9ec",       // soft creamy
        mint: "#d1fae5",        // light mint green
        palegreen: "#f0fdf4", 
        glass: 'rgba(255, 255, 255, 0.6)',  // very light green
      },

    },
  },
  plugins: [],
}
