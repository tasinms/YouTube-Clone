/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        silver: "#606060",
        stone: "#f2f2f2",
        lightstone: "#f8f8f8",
        ash: "#e5e5e5",
        gray: "#cccccc",
      },
      fontFamily: {
        roboto: ["Roboto"],
        oswald: ["Oswald"],
      },
    },
  },
  plugins: [],
};
