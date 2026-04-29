import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#c0392b",
          dark: "#0a0a0a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
