/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}"],
  // Ensure these match with .storybook/preview.js
  theme: {
    colors: {
      blue: "#3F51B5",
      white: "#fff",
      green: "#84cc16",
      gray: "#f1f5f9",
      darkGray: "#9ca3af",
      orange: "#C77700",
      lightGray: "#fafafa",
      border: "#e0e7ff",
      stone: "#e7e5e4",
      title: "#6b7280",
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
