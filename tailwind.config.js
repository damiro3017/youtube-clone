/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        youtube: {
          primary: "#0f0f0f",
          secondary_color: "#212121",
          secondary_text: "#aaa",
          red_indicator: "#f03;",
        }
      }
    },
  },
  plugins: [],
}