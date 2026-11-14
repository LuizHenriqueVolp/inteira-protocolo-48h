import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ameixa: "var(--ameixa)",
        vinho: "var(--vinho)",
        rose: "var(--rose)",
        champagne: "var(--champagne)",
        areia: "var(--areia)",
        nevoa: "var(--nevoa)",
        cinza: "var(--cinza-texto)",
      },
      fontFamily: {
        serif: ["Lora", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      maxWidth: { page: "1080px", text: "720px" },
      borderRadius: { card: "18px" },
      boxShadow: {
        soft: "0 10px 30px -18px rgba(42,27,51,.35)",
        card: "0 18px 40px -24px rgba(42,27,51,.45)",
      },
    },
  },
  plugins: [],
} satisfies Config;
