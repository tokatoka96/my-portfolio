// tailwind.config.ts

import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "20%": { transform: "translate(10px, -20px) scale(1.05)" },
          "40%": { transform: "translate(20px, 10px) scale(0.95)" },
          "60%": { transform: "translate(-10px, 20px) scale(1.1)" },
          "80%": { transform: "translate(-20px, -10px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        blob: "blob 8s infinite",
        "spin-slow": "spin-slow 10s linear infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".animation-delay-1000": {
          "animation-delay": "1000ms",
        },
        ".animation-delay-2000": {
          "animation-delay": "2000ms",
        },
        ".animation-delay-3000": {
          "animation-delay": "3000ms",
        },
        ".animation-delay-4000": {
          "animation-delay": "4000ms",
        },
        ".animation-delay-5000": {
          "animation-delay": "5000ms",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
