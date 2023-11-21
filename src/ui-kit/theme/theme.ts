import { createTheme } from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";


export let MuiTheme = createTheme({
  spacing: 4,
  palette,
  shape: { borderRadius: 0 },
});

MuiTheme = createTheme(MuiTheme, {
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
    htmlFontSize: 16,
    ...typography(MuiTheme),
  },
});
