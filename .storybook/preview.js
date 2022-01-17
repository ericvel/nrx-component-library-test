import "../src/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // layout: "centered",
  backgrounds: {
    default: "nrx",
    values: [
      {
        name: "nrx",
        value: "#ededed",
      },
      {
        name: "white",
        value: "#ffffff",
      },
      {
        name: "black",
        value: "#000000",
      },
    ],
  },
};
