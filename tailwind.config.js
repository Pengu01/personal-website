/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-quicksand)']
      },
      dropShadow: {
        glow: [
          "0 0px 7px rgba(255,255, 255, 0.25)",
          "0 0px 14px rgba(255, 255,255, 0.1)"
        ]
      }
    },
  },
  plugins: [],
}
