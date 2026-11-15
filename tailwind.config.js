/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkest: "#000000",
        dark: "#1c1c1c",
        silver: "#dcdcdc",
        lightest: "#fafafa",
        brandBorder: "rgba(0, 0, 0, 0.08)",
        brandBorderDark: "rgba(255, 255, 255, 0.12)",
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        wider: '0.08em',
      }
    },
  },
  plugins: [],
};
