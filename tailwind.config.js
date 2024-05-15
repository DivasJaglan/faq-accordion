const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ['"Work Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
// "./src/*.js"
