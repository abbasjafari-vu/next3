import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#01D293",
        "primary-blue": "#44BCFF",
        "primary-red": "#FF675E",
        "primary-dark1": "#0E1630",
        "primary-dark2": "#111827",
        "primary-gray": "#808DAD",
        "primary-yellow": "#F1DC4E",
        "primary-pink": "#FF44EC",
        "primary-brown": "#222",
      },
      fontFamily: {
        marko: "var(--font-marko)",
        moirai: "var(--font-moirai)",
        dana: "var(--font-dana)",
      },
    },
  },
  plugins: [],
};
export default config;
