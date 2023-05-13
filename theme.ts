import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF385C",
    },
    secondary: {
      main: "#222222",
    },
    grey: {
      "100": "#EBEBEB",
      "200": "#979797"
    },
    text: {
      primary: "#222222",
      secondary: "#717171",
    },
  },
});

export default theme;
