import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        standard: "1920px",
      },
      screens: {
        xs: "321px",
      },
      colors: {
        danger: "#E62727",
        gray: "#707070",
        light: "#F5F5F5",
        muted: "#D9D9D9",
        neutral: "#F6F7E5",
        primary: "#0A3353",
        secondary: "#3666AA",
        success: "#008337",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
