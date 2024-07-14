
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#fdf1ff",
      secondary: "#af87c9",
      secondary2: "#7b5a91",
      tertiary: "#ffe9c3",
      border: "#5f5d5d",
      text: "#333",
      textBtn: "#a784c3",
      invert: "#fff",
      card: "#ffffff",
      background: "#ebd2f2",
      gray: {
        400: "#967193",
      }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
