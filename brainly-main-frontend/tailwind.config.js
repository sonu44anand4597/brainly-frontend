/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          200: "#e2e8f0",
          100: "#f1f5f9",
          600: "#475569",
        },
        purple: {
          200: "#d9ddee",
          500: "#7e7ebf",
          600: "#5e5e9f",

        }

        
      }
    },
  },
  plugins: [],
}