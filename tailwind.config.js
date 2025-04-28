/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "eco-green": {
          50: "#f0f7f0",
          100: "#e6f0e6",
          200: "#c2dbc2",
          300: "#9dc69d",
          400: "#79b179",
          500: "#549c54",
          600: "#437d43",
          700: "#325e32",
          800: "#213f21",
          900: "#111f11",
        },
        "eco-brown": {
          50: "#faf5f0",
          100: "#f5f0e6",
          200: "#e6d9c2",
          300: "#d7c29d",
          400: "#c8ab79",
          500: "#b99454",
          600: "#947643",
          700: "#6f5932",
          800: "#4a3b22",
          900: "#251e11",
        },
        "eco-blue": {
          50: "#f0f5f7",
          100: "#e6eef0",
          200: "#c2d5dc",
          300: "#9dbcc7",
          400: "#79a3b3",
          500: "#548a9e",
          600: "#436e7f",
          700: "#32535f",
          800: "#21373f",
          900: "#111c20",
        },
      },
    },
  },
  plugins: [],
};
