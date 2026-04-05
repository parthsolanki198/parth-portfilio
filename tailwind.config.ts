import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      colors: {
        ink: { DEFAULT: "#0a0a09", muted: "#737373" },
        void: "#050505",
        mint: {
          DEFAULT: "#5eead4",
          dim: "#14b8a6",
          glow: "#99f6e4",
        },
        coral: {
          DEFAULT: "#fb7185",
          dim: "#f43f5e",
        },
        accent: {
          DEFAULT: "#5eead4",
          glow: "#99f6e4",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.95s cubic-bezier(0.22,1,0.36,1) forwards",
        float: "float 5s ease-in-out infinite",
        mesh: "meshShift 18s ease-in-out infinite",
        "marquee-l": "marquee-x 36s linear infinite",
        "marquee-r": "marquee-x-rev 42s linear infinite",
        "glow-pulse": "glowPulse 5s ease-in-out infinite",
        "draw-line": "drawLine 1.2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        meshShift: {
          "0%, 100%": { backgroundPosition: "0% 40%, 100% 60%" },
          "50%": { backgroundPosition: "100% 50%, 0% 50%" },
        },
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-x-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.45", filter: "blur(0px)" },
          "50%": { opacity: "0.85", filter: "blur(0.5px)" },
        },
        drawLine: {
          "0%": { transform: "scaleX(0)", opacity: "0" },
          "100%": { transform: "scaleX(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
