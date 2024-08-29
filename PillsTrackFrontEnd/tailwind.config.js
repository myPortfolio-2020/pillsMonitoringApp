/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors:{
        primary:'#1BB9E6',
      },
      fontFamily:{
        fThinItalic: ["Inter_18pt-ThinItalic", "sans-serif"],
        fThinItalic: ["Inter_18pt-MediumItalic", "sans-serif"],
        fThinItalic: ["Inter_18pt-Light", "sans-serif"],
        fThinItalic: ["Inter_18pt-Italic", "sans-serif"],
        fThinItalic: ["Inter_18pt-ExtraBoldItalic", "sans-serif"],
        fThinItalic: ["Inter_18pt-BoldItalic", "sans-serif"],
        fThinItalic: ["Inter_18pt-BlackItalic", "sans-serif"],
      }
    },
  },
  plugins: [],
}

