import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { Container } from "ui-kit";

export const Content = () => {
  return (
    <Container>
      <Grid container direction={{ xs: "column", md: "row" }} spacing={8}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="text.primary">
            Project Overview
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            mb={[6, 8, 10, 12]}
          >
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere. Online learning
            with us does not interfere with your daily life. because learning
            can be done anytime and anywhere. Online learning with us does not
            interfere with your daily life. because learning can be done anytime
            and anywhere.
          </Typography>
          <Box display="flex" gap={[10, 15, 20]}>
            <Typography variant="body1" color="text.secondary">
              July 22 - 2022
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Interior Design - Furnitur
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="text.primary">
            Design Process
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={[2, 4, 6, 8]}>
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere. Online learning
            with us does not interfere with your daily life. because learning
            can be done anytime and anywhere.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Online learning with us does not interfere with your daily life.
            because learning can be done anytime and anywhere. Online learning
            with us does not interfere with your daily life. because learning
            can be done anytime and anywhere.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
