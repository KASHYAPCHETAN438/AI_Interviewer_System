/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
  keyframes: {
    waveSlow: {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-30%)" },
    },
    waveMid: {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-50%)" },
    },
    waveFast: {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-70%)" },
    },
  },
}

  },
  plugins: [],
};
