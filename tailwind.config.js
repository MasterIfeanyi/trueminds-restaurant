/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brandGreen: "#0E7A3E",
        primary: "#F97316",
        danger: "#EF4444",
      },
      ringColor: {
        primary: "#F97316",
        danger: "#EF4444",
      },
      spacing: {
        '18': '4.5rem',   // 72px
        '20': '5rem',     // 80px
        '22': '5.5rem',   // 88px
        '24': '6rem',     // 96px
        '28': '7rem',     // 112px
        '32': '8rem',     // 128px
      },
      screens: {
        'mobile-sim': '568px',
      },
      keyframes: {
        pulseBar: {
          "0%": { backgroundColor: "#f97316" },     // orange
          "12.5%": { backgroundColor: "#f97316" },  // stay orange
          "12.6%": { backgroundColor: "#d1d5db" },  // switch to gray
          "100%": { backgroundColor: "#d1d5db" },
        },
      },
      animation: {
        pulseBar: "pulseBar 2.4s linear infinite",
      },
    },
  },
  plugins: [],
}