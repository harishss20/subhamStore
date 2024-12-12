/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      second: "#1D80AA",
      first: "#BFECFF",
      white: "#FBFBFB",
      black: "#1B1833",
      green: "#DFF8E7",
      lightBrown: "#FDF7F4",
    },
    extend: {
      keyframes: {
        card: {
          "0%": { transform: "rotate(9deg)" },
          "50%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(9deg)" },
        },
        cardHover: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(1deg)" },
        },
      },
      animation: {
        card: "card 1s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        cardHover: "cardHover 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
