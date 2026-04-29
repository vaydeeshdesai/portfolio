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
        "bg-primary": "#000000",
        "bg-secondary": "#050510",
        accent: "#00D4FF",
        "text-primary": "#FFFFFF",
        "text-secondary": "#94A3B8",
        "text-muted": "#475569",
      },
      fontFamily: {
        mono: ["var(--font-space-mono)", "monospace"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      backdropBlur: {
        glass: "20px",
      },
      boxShadow: {
        glass:
          "0 0 40px rgba(0, 212, 255, 0.05), inset 0 1px 0 rgba(255,255,255,0.06)",
        "glow-sm": "0 0 20px rgba(0, 212, 255, 0.3)",
        "glow-md": "0 0 30px rgba(0, 212, 255, 0.3)",
        "glow-lg": "0 0 60px rgba(0, 212, 255, 0.2)",
      },
      animation: {
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "gradient-shift": "gradientShift 15s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.6",
            transform: "scale(1.3)",
          },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
