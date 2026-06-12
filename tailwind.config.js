/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#0d0d12",
        accent: "#818cf8",
        "accent-violet": "#a78bfa",
        "accent-rose": "#f472b6",
        "accent-amber": "#fbbf24",
        "card-bg": "#14141f",
        "text-muted": "#4e4c73",
        "text-secondary": "#9b99c4",
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: "0 8px 32px rgba(129,140,248,0.25)",
        "glow-lg": "0 16px 48px rgba(129,140,248,0.35)",
        "inner-glow": "inset 0 1px 0 rgba(129,140,248,0.1)",
      },
      animation: {
        blink: "blink 1s infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "pulse-soft": "pulse-soft 2s ease infinite",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 1.8s ease infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "-100% 0" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
