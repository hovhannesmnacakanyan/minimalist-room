import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { MuiTheme, MyGlobalStyles } from "ui-kit";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={MuiTheme}>
    <App />
    <MyGlobalStyles />
  </ThemeProvider>
);
