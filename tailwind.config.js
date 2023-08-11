/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        vandyke: "#433633",
        walnut: "#5C5552",
        battleship: "#8F857D",
        dun: "#DECBB7",
        magnolia: "#F7F0F5",
      },
    },
  },
  plugins: [],
};
