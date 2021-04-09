const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      green: colors.green,
     /* gray: {
        light: "#CED4D9",
        DEFAULT: "#AAB4BE",
        dark: "7C8B9A",
        50: "#F9F9FA",
        100: "#EBEEF0",
        200: "#DDE1E5",
        300: "#CED4D9",
        400: "#BDC5CC",
        500: "#AAB4BE",
        600: "#95A1AD",
        700: "#7C8B9A",
        800: "#606E7B",
        900: "#384048",
      },*/
      blue: {
        light: "#AFD7FF",
        DEFAULT: "#71B8FF",
        dark: "#48A4FF",
        50: "#F5FAFF",
        100: "#E0EFFF",
        200: "#C9E4FF",
        300: "#AFD7FF",
        400: "#92C9FF",
        500: "#71B8FF",
        600: "#48A4FF",
        700: "#48A4FF",
        800: "#1188FF",
        900: "#066BD0",
      },
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Georgia", "serif"],
    },
    extend: {},
  },
  variants: {
    visibility: ["hover", "focus"],
    outline: ["hover","active", "focus"],
    underlineColor: ["hover", "focus"],
    borderWidth: ["first", "last", "focus-within", "hover", "focus"],
    borderRadius: ["responsive", "first", "last", "focus-within", "hover", "focus"],
    backgroundColor: ["active", "hover", "focus"],
    ringColor: ["hover", "focus", "focus-within"],
    ringWidth: ["hover", "focus", "focus-within"],
    extend: {},
  },
  plugins: [
    require("tailwind-underline-utils"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography")
  ],
};
