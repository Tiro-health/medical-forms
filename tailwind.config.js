const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    namedGroups: ["row", "append"],
    colors: {
      ...colors,
      transparent: "transparent",
      green: { ...colors.green, logo: "#55BA3C" },
      blue: {
        mm: "#003979",
        light: "#AFD7FF",
        DEFAULT: "#71B8FF",
        dark: "#48A4FF",
        logo: "#377DF7",
        ...colors.blue,
      },
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Georgia", "serif"],
    },
    extend: {},
  },
  variants: {
    extend: {
      visibility: ["hover", "focus", "group-hover"],
      outline: ["hover", "active", "focus"],
      margin: ["first", "last"],
      borderColor: ["responsive", "first", "last", "focus-within", "hover", "focus"],
      borderWidth: ["responsive", "first", "last", "focus-within", "hover", "focus"],
      borderRadius: [
        "responsive",
        "first",
        "last",
        "focus-within",
        "hover",
        "focus",
      ],
      placeholderColor: ["hover", "focus"],
      textColor:["hover", "focus", "group-focus", "active"],
      backgroundColor: ["active", "hover", "focus", "focus-within"],
      ringColor: ["hover", "focus", "focus-within"],
      ringWidth: ["hover", "focus", "focus-within"],
      fontSize: ["hover", "focus", "focus-within", "responsive", "first", "last"],
    }
  },
  plugins: [
    require("tailwind-underline-utils"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require('tailwindcss-nested-groups')
  ]
}