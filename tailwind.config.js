module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      regular: ["hind-siliguri-regular", "Arial"],
      light: ["hind-siliguri-light", "Arial"],
      medium: ["hind-siliguri-medium", "Arial"],
      semibold: ["hind-siliguri-semi-bold"],
      bold: ["hind-siliguri-bold"],
    },
    screens: {
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#0891B2",
    },
    spacing: {
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      8: "8px",
      16: "16px",
      24: "24px",
      32: "32px",
    },
    fontSize: {
      12: "12px",
      14: "14px",
      16: "16px",
      20: "20px",
      24: "24px",
      28: "28px",
      32: "32px",
      40: "40px",
      48: "48px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
