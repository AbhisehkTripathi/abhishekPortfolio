/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#fafafa",
          light: "#fafafa",
          dark: "#0a0e27",
        },
        secondary: {
          DEFAULT: "#a8e6cf",
          light: "#a8e6cf",
          dark: "#00d9a5",
        },
        accent: {
          DEFAULT: "#ffd3b6",
          light: "#ffd3b6",
          dark: "#ff6b9d",
        },
        accent2: {
          DEFAULT: "#ffaaa5",
          light: "#ffaaa5",
          dark: "#ff4757",
        },
        accent3: {
          DEFAULT: "#dcedc8",
          light: "#dcedc8",
          dark: "#2ed573",
        },
        dimWhite: "rgba(0, 0, 0, 0.7)",
        dimBlue: "rgba(168, 230, 207, 0.1)",
        pastelBlue: "#b8e0d2",
        pastelPink: "#f4c2c2",
        pastelPurple: "#d4c5f9",
        pastelYellow: "#ffeaa7",
        textPrimary: {
          DEFAULT: "#2d3436",
          light: "#2d3436",
          dark: "#f1f2f6",
        },
        textSecondary: {
          DEFAULT: "#636e72",
          light: "#636e72",
          dark: "#a4b0be",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(168, 230, 207, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(168, 230, 207, 0.8), 0 0 30px rgba(168, 230, 207, 0.6)' },
        },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};