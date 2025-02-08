/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lakeshore: ["Lakeshore", "sans-serif"],
        Symphony: ["Symphony", "sans-serif"],
        tt: ["tt", "sans-serif"],
        Satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
