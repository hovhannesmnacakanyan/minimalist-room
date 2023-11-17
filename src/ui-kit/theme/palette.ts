export type IPalette = {
  [key: string]: {
    [key: string]: string;
  };
};

const palette = {
  primary: {
    main: "#2C3878",
    dark: "#1C3878",
    light: "#0C3878",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#FFFFFF",
    dark: "#FFFFFF",
    light: "#FFFFFF",
    contrastText: "#333333",
  },
  text: {
    primary: "#333333",
    secondary: "#9C9C9C",
    disabled: "#D9D9D9",
  },
};

export default palette;
