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
        stage: {
          bg: "#0f0f0f",
          card: "#1a1a1a",
          elevated: "#242424",
        },
        /** Stage accent — cool teal (shirt / night-show vibe, replaces gold) */
        spotlight: {
          DEFAULT: "#2dd4bf",
          muted: "#14b8a6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "spotlight-radial":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(45, 212, 191, 0.14) 0%, transparent 55%)",
        "spotlight-soft":
          "radial-gradient(ellipse 100% 80% at 70% 20%, rgba(45, 212, 191, 0.09) 0%, transparent 50%)",
      },
      animation: {
        "float-light": "floatLight 8s ease-in-out infinite",
      },
      keyframes: {
        floatLight: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.65", transform: "scale(1.03)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
