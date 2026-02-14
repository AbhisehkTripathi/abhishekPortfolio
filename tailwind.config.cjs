/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#EAE0CF",
          light: "#EAE0CF",
        },
        secondary: {
          DEFAULT: "#94B4C1",
          light: "#94B4C1",
        },
        accent: {
          DEFAULT: "#7a9ca8",
          light: "#7a9ca8",
        },
        accent2: {
          DEFAULT: "#6b8f9a",
          light: "#6b8f9a",
        },
        accent3: {
          DEFAULT: "#a8c4ce",
          light: "#a8c4ce",
        },
        dimWhite: "rgba(0, 0, 0, 0.7)",
        dimBlue: "rgba(148, 180, 193, 0.15)",
        pastelBlue: "#a8c4ce",
        pastelPink: "#c9b8a8",
        pastelPurple: "#b8a8c4",
        pastelYellow: "#e8dcc8",
        textPrimary: {
          DEFAULT: "#2d3436",
          light: "#2d3436",
        },
        textSecondary: {
          DEFAULT: "#5c6468",
          light: "#5c6468",
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
        'sunburst': 'sunburst 4s ease-in-out infinite',
        'sunburst-bright': 'sunburstBright 3s ease-in-out infinite',
        'node-pulse': 'nodePulse 2s ease-in-out infinite',
        'tree-flow': 'treeFlow 3s linear infinite',
        'leaf-sway': 'leafSway 4s ease-in-out infinite',
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
          '0%': { boxShadow: '0 0 5px rgba(148, 180, 193, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(148, 180, 193, 0.6), 0 0 30px rgba(148, 180, 193, 0.4)' },
        },
        sunburst: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        sunburstBright: {
          '0%, 100%': { opacity: '0.95' },
          '50%': { opacity: '1' },
        },
        nodePulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.35)' },
          '50%': { boxShadow: '0 0 0 10px rgba(34, 197, 94, 0)' },
        },
        treeFlow: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
        leafSway: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateX(3px) rotate(2deg)' },
          '75%': { transform: 'translateX(-3px) rotate(-2deg)' },
        },
        lineDraw: {
          '0%': { scaleY: '0', opacity: '0' },
          '100%': { scaleY: '1', opacity: '1' },
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