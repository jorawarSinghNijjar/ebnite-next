/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch', // add required value here
          }
        }
      },
      // Color Pallete - https://colorhunt.co/palette/222831393e4600adb5eeeeee
      colors: {
        primary: "#884A39",
        secondary: "#C38154",
        chatbot: "#402E32",
        tertiary: "#FFC26F",
        dark: "#33261E",
        darker: "#211912",
        light: "#F9E0BB",
        lighter: "#f8f1ec",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "avatar-client": "url('/static/images/pages/case-study/client-avatar.jpg')",
      },
      // animation:{
      //   ''
      // },
      keyframes: {
        grow: {
          "0%": { width: "0%", height: "0%" },
          "100%": { width: "100%", height: "100%" },
        },
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
