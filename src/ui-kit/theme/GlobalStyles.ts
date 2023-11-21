import { alpha } from "@mui/material";
import { createGlobalStyle } from "styled-components";

import { MuiTheme as theme } from "./theme";

export const MyGlobalStyles = createGlobalStyle`
  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
  }

  *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${alpha(theme.palette.primary.main, 0.3)};
    border-radius: ${theme.shape.borderRadius}px;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;

    margin: 0;
  }

  span {
    user-select: none;
  }

  img, picture, video, canvas {
    display: block;
    object-fit: cover;
    width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root {
    isolation: isolate;
  }
`;
