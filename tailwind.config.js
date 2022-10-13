/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        homeBlack: "#0C0C0C",
        homeBlue: "#00A2FF",
      },
      fontFamily: {
        Poppins: ["Poppins", "meduim"],
      },
    },
  },
  plugins: [],
};
