import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Orbitron, Arial, sans-serif",
    h1: {
      fontSize: "48px",
      lineHeight: "60px",
      fontWeight: 500,
      color: "#fff",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#17D9B1",
          color: "#212121",
          fontFamily: "Work Sans, Arial, sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          padding: "8px 16px",
          borderRadius: "8px",
          textTransform: "none",
        },
      },
    },
  },
  palette: {
    textSecondary: "#33353F",
  },
});
