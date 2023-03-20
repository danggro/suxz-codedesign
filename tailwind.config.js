/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "ui-system"],
      },
      colors: {
        primary: "#22293E",
        secondary: "#A2B3BF",
        purple: "#8C82FC",
      },
    },
  },
  plugins: [],
};
