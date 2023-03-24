/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pickled-bluewood": {
          50: "#f4f7fb",
          100: "#e9eef5",
          200: "#cedce9",
          300: "#a2bfd7",
          400: "#709cc0",
          500: "#4e81a9",
          600: "#3c678d",
          700: "#315373",
          800: "#2c4760",
          900: "#2a3f54",
        },
      },
    },
  },
  plugins: [],
};
