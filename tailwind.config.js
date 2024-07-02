/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        grayishBlue: 'hsl(237, 18%, 59%)',
        softRed: 'hsl(345, 95%, 68%)',
        darkDesaturatedBlue: 'hsl(236, 21%, 26%)',
        darkerDesaturated: 'hsl(236, 21%, 20%)',
        veryDarkBlue: 'hsl(235, 16%, 14%)',
        veryDarkMostlyBlackBlue: 'hsl(234, 17%, 12%)',
      },
      borderWidth: {
        '12': '12px',
      },
      letterSpacing: {
        'extra-wide': '0.5rem',
      },
    },
  },
  plugins: [],
};
