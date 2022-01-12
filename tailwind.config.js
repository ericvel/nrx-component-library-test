module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nrxLightGray: "#ededed",
        nrxGray: "#e0e0e0",
        nrxRed: "#d42b1e",
      },
      textUnderlineOffset: {
        30: "300px",
      },
    },
    screens: {
      tablet: "640px",
      desktop: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
