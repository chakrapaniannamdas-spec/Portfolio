/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        accent: "var(--accent)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        border: "var(--border)"
      }
    }
  },
  plugins: []
};
