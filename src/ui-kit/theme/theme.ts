import { createTheme } from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";

export const MuiTheme = createTheme({
  spacing: 4,
  palette,
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
    htmlFontSize: 16,
    ...typography,
  },
});
