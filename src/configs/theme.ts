import { extendTheme } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface PalettePrimaryOverrides {
    background: true;
    gray1: true;
  }
  interface PaletteBackgroundOverrides {
    body: false;
  }
}

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: { background: "#EEE", gray1: "#666" },
      },
    },
    dark: {
      palette: {
        primary: { background: "#EEE" },
      },
    },
  },
});

export default theme;
