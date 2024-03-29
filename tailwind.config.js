/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      //! planshet
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      //! Macbook
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // ! My screen
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        blue: "#2993FF",
        gray: "#a1a1a1",
      },
    },
  },
  plugins: [],
};
