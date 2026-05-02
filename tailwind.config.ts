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
        "bg-primary": "#09090b",
        "bg-secondary": "#0f0f12",
        accent: "#818cf8",
        "text-primary": "#f4f4f5",
        "text-secondary": "#8b8f9a",
        "text-muted": "#52525b",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backdropBlur: {
        glass: "20px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
