/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cabinet Grotesk"', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        forest: '#2E7D32',
        leaf: '#4CAF50',
        sage: '#C8E6C9',
        cream: '#FAF9F6',
        ink: '#0A0A0A',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
