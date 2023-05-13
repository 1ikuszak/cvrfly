/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: '#FFFFFE',
        dark: '#1E1E1E',
        primary: '#FF702F',
        secondary: '#F2F6FF',
      },
    },
  },
  plugins: [],
};
