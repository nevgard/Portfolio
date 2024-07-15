/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#141517",
        primary: "#252A2E",
        secondary: "#252A2E",
        accent: "#f7ca18",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
