/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004ea2",
        secondary: "#2196F3",
      },
    },
  },
  plugins: [require("daisyui")],
};
