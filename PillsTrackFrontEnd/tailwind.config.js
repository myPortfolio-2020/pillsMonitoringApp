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
        fMediumItalic: ["Inter_18pt-MediumItalic", "sans-serif"],
        fLight: ["Inter_18pt-Light", "sans-serif"],
        fItalic: ["Inter_18pt-Italic", "sans-serif"],
        fExtraBoldItalic: ["Inter_18pt-ExtraBoldItalic", "sans-serif"],
        fBoldItalic: ["Inter_18pt-BoldItalic", "sans-serif"],
        fBlackItalic: ["Inter_18pt-BlackItalic", "sans-serif"],
      }
    },
  },
  plugins: [],
}

