import React from "react";
import { useTheme, Typography, Grid } from "@mui/material";
import { Button, Container } from "ui-kit";

export const ContentSection = () => {
  const theme = useTheme();

  return (
    <Container py={9} bgcolor={theme.palette.primary.main} width={1}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={5}
      >
        <Grid item xs={12} md={6} lg={6}>
          <Typography variant="h2" color="primary.contrastText">
            let's discuss making your interior like a dream place!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="body1" color="text.disabled" mb={5}>
            Contact us below to work together to build your amazing interior
          </Typography>
          <Button variant="contained" color="secondary">
            Contact Us
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
