/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      animation: {
        tilt: 'tilt 10s infinite linear',
        blobright: 'blobright 35s infinite',
        blobleft: 'blobleft 35s infinite',
      },
      keyframes: {
        blobright: {
          "0%": {
            transform: "translate(0, 0) scale(1)",
          },
          "25%": {
            transform: "translate(10rem, 0) scale(1.2)",
          },
          "50%": {
            transform: "translate(30rem, 5rem) scale(1.4)",
          },
          "75%": {
            transform: "translate(17.5rem, 8rem) scale(2)",
          },
          "85%": {
            transform: "translate(-10rem, 10rem) scale(1.2)",
          },
          "100": {
            transform: "translate(0, 0) scale(1)"
          }
        },
        blobleft: {
          "0%": {
            transform: "translate(0, 0) scale(1)",
          },
          "20%": {
            transform: "translate(-10rem, 5rem) scale(1.2)",
          },
          "55%": {
            transform: "translate(-35rem, 10rem) scale(1.4)",
          },
          "70%": {
            transform: "translate(-17.5rem, 20rem) scale(2)",
          },
          "85%": {
            transform: "translate(-10rem, 15rem) scale(1.2)",
          },
          "100": {
            transform: "translate(-5rem, 0) scale(1)"
          }
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rorate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        }
      },
      colors: {
        'primary': '#0179fe',
        'darkbg': '#141c30',
        'darkfg': '#1f2a48',
      }
    },
  },
  plugins: [],
}

