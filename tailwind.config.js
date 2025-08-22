/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('/assets/bg-desktop.png')",
        'hero-mobile': "url('/assets/bg-mobile.png')",
      },
    },
  },
  plugins: [],
}
