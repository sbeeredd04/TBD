// tailwind.config.js
/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  mode: 'jit', // Enable JIT mode
  darkMode: 'class', // Enables dark mode based on a class
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#007BFF', // Common blue color for both themes
      },
      boxShadow: {
        light: '0 4px 12px rgba(0, 0, 0, 0.1)',
        dark: '0 4px 12px rgba(255, 255, 255, 0.1)',
      },
      gradientColorStops: {
        lightStart: '#f0f4ff',
        lightEnd: '#dce5ff',
        darkStart: '#1e1e2d',
        darkEnd: '#121214',
      },
    },
  },
  plugins: [],
};
