/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#130c2d",
        darkBlue: "#2e1a64",
        lightWhite: "#dbdde1",
        desaturatedBlue: "#6770a0",
      },
    },
  },
  plugins: [],
};
