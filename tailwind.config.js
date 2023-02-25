/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}"],
  // Ensure these match with .storybook/preview.js
  theme: {
    colors: {
      white: "#fff",

      green: "#84cc16",

      blue_300: "#8FE9D0",
      blue_500: "#3F51B5",

      gray_100: "#fafafa",
      gray_200: "#f1f5f9",
      gray_400: "#9CA3AF",
      gray_500: "#777777",

      orange_300: "#FFCC21", //yellow
      orange_400: "#FF963C",
      orange_500: "#EA6C00",

      black_500: "#414141", // テキスト
      black_600: "#2E2E2E",
    },
    screens: {
      xs: "375px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },

  plugins: [],
};
