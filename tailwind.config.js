/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Montserrat", "sans-serif"],
      logo: ["Mystery Quest", "cursive"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "1.5rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "5rem",
      },
    },
    extend: {
      borderRadius: {
        "3xl": "2.75rem",
      },
      boxShadow: {
        primary: '-35px 0px 5px -15px rgba(222,198,139,0.78)'
      }
    },
  },
  plugins: [],
};
