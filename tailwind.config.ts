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
        sand: {
          50: "#fdfbf7",
          100: "#f8f3e9",
          200: "#f0e6d2",
          300: "#e5d4b3",
          400: "#d6bd8f",
          500: "#c9a76b",
          600: "#b08d55",
          700: "#927448",
          800: "#785f3e",
          900: "#624f35",
        },
        sage: {
          50: "#f6f7f4",
          100: "#e8ebe3",
          200: "#d1d7c8",
          300: "#b0bba3",
          400: "#8e9d7e",
          500: "#738464",
          600: "#5a6a4e",
          700: "#475440",
          800: "#3b4536",
          900: "#323a2e",
        },
        earth: {
          50: "#f7f5f2",
          100: "#ebe6de",
          200: "#d8ccbc",
          300: "#c0ad94",
          400: "#a98f6e",
          500: "#987b59",
          600: "#8b6b4d",
          700: "#745741",
          800: "#604939",
          900: "#513d31",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "scale-in": "scaleIn 0.6s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
