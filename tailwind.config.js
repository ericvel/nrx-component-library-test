module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //Primary
        nrxRed: "#D52B1E",

        //Secondary
        nrxOrange: "#EA5A2A",
        nrxRust: "#96171A",
        nrxDirt: "#710000",
        nrxPink: "#F16670",

        //Supplementary
        nrxOcean: "#355770",
        nrxSky: "#7FA7B7",
        nrxFrost: "#CDDDE7",
        nrxJungle: "#6C733E",
        nrxSeaweed: "#B4B07D",
        nrxFog: "#E3E3CF",
        nrxLightGray: "#ededed",
        nrxLightPink: "#FEF1F1",

        //Gray tones
        nrxBlack: "#1E1E1E",
        nrxGray: "#e0e0e0",
        nrxGray100: "#121619",
        nrxGray90: "#21272A",
        nrxGray80: "#343A3F",
        nrxGray70: "#4D5358",
        nrxGray60: "#697077",
        nrxGray50: "#878D96",
        nrxGray40: "#A2A9B0",
        nrxGray30: "#E1E1E1",
        nrxGray20: "#EFEFEF",
        nrxGray10: "#F8F8F8",
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
