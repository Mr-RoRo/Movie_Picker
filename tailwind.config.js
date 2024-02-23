/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customTheme: {
          primary: "#00B9AE",
          neutral: "#21242D",
          "base-100": "#16181E",
          "base-content": "#F9F9F9",
        },
      },
    ],
  },
};
