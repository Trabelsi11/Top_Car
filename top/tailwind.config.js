/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#0B1120",
        "brand-blue": "#2563EB",
        "brand-light": "#E2E8F0"
      }
    }
  },
  plugins: []
};
