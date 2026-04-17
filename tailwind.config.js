/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        asterBg: "#0a0e1a",
        asterCard: "#111827",
        asterCardAlt: "#1a2236",
        asterAccent: "#00e5a0",
        asterAccent2: "#00b4d8",
        asterText: "#e2e8f0",
        asterDim: "#94a3b8",
        asterBorder: "#1e293b",
        asterGold: "#fbbf24"
      }
    }
  },
  plugins: []
}
