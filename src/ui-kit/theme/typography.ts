import { Theme } from "@mui/material";

const typography = (theme: Theme) => ({
  h1: {
    fontSize: 56,
    lineHeight: 1.4,
    fontWeight: 700,
    marginBottom: 40,

    [theme.breakpoints.down("lg")]: {
      fontSize: 48,
      marginBottom: 32,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
      marginBottom: 24,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 36,
      marginBottom: 18,
    },
  },
  h2: {
    fontSize: 36,
    lineHeight: 1.7,
    fontWeight: 600,

    [theme.breakpoints.down("lg")]: {
      fontSize: 32,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 28,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
  },
  h3: {
    fontSize: 24,
    lineHeight: 1.4,
    fontWeight: 600,
    marginBottom: 24,

    [theme.breakpoints.down("lg")]: {
      fontSize: 20,
      marginBottom: 20,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
      marginBottom: 16,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      marginBottom: 12,
    },
  },
  body1: {
    fontSize: 18,
    lineHeight: 1.6,
    fontWeight: 400,

    [theme.breakpoints.down("lg")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  body2: {
    fontSize: 16,
    lineHeight: 1.5,
    fontWeight: 400,

    [theme.breakpoints.down("lg")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
});

export default typography;
