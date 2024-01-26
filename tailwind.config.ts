import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "480px" },
    },
    extend: {
      fontFamily: {},
      fontSize: {
        "250": "250px",
      },

      height: {
        "p-90": "93.5%",
      },

      width: {
        "p-88": "88%",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opcaity: "1" },
        },
      },

      animation: {
        fadeIn: `fadeIn .8s ease`,
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
