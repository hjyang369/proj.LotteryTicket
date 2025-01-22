import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        jelly: {
          "25%": {
            transform: "scale(0.9, 1.1)",
          },
          "50%": {
            transform: "scale(1.1, 0.9)",
          },
          "75%": {
            transform: "scale(0.95, 1.05)",
          },
        },
      },
      animation: {
        jelly: "jelly 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
