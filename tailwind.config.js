// filename: portfolio-prasad/tailwind.config.js

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2C3E50',      // Deep Navy
        secondary: '#16A085',    // Teal
        accent: '#3498DB',       // Sky Blue
        highlight: '#E67E22',    // Coral Orange
        light: '#ECF0F1',        // Light Gray
        dark: '#34495E',         // Charcoal
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};