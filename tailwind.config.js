/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "panel-boxes": "#1B2640",
        "team-titles": "#5D8DFF",
        background: "#090A0E",
        buttons: "#5D8DFF",
        "application-background": "#090A0E",
        "application-text-bg": "#1B2640"
      }
    }
  },
  plugins: []
};
