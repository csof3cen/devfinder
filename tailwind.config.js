/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0179fe',
        'darkbg': '#141c30',
        'darkfg': '#1f2a48',
      }
    },
  },
  plugins: [],
}

