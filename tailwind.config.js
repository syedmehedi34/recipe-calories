/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#0BE58A",
        title: "#150B2B",
        title70: "#150B2BB3",
        title60: "#150B2B99",
        dark2: "#282828",
        dark3: "#878787",
        dark6: "#878787",
        border: "#28282833",
        c70: "#282828B3",
      },

      backgroundImage: {
        gradient:
          "linear-gradient(rgba(19, 19, 24, 0.2), rgba(19, 19, 24, 0.2)), url('/hero.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
