/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#121212",
        accent: "#00ff9d",
        "accent-hover": "#00cc7d",
        "card-bg": "#1a1a1a",
        "border-color": "#333333",
      },
      boxShadow: {
        neon: "0 0 10px #00ff9d, 0 0 20px #00ff9d, 0 0 30px #00ff9d",
      },
      animation: {
        blink: "blink 1s infinite",
        loading: "loading 1.5s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        loading: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
