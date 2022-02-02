import { createTheme } from "@mui/material";

export const theme = {
  colors: {
    mainColor: "#0c4095",
    contrastColor: "#4fb6ae",
    offwhite: "#F8F8F8",
    white: "#ffffff",
    white20: "#e4e4e4",
    whiteOpacity: "rgba(229, 229, 229, 1)",
  },
  fonts: { Poppins: "Poppins, sans-serif" },

  spacings: {},
};

export const MuiTheme = createTheme({
  palette: { mode: "light" },
});

export default theme;
