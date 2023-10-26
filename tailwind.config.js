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
      },
    },
  },
  plugins: [],
};
