/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Poppins", "sans-serif"],
        secondary: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#FFB800",
        "black-800": "#161616",
        "black-700": "#1E1E1E",
        "black-400": "#A0A6B5",
      },
      screens: {
        "3xl": "1650px",
      },
    },
  },
  plugins: [],
};
