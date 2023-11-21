import React from "react";
import { Container } from "ui-kit";
import { ReactComponent as Logo } from "assets/dananz_logo.svg";
import { ReactComponent as Circle } from "assets/circle.svg";
import { ReactComponent as ArrowRight } from "assets/arrow_right.svg";
import { ReactComponent as Facebook } from "assets/facebook.svg";
import { ReactComponent as Tiktok } from "assets/tiktok.svg";
import { ReactComponent as Youtube } from "assets/youtube.svg";
import { ReactComponent as Instagram } from "assets/instagram.svg";
import { Typography, Grid, TextField, Box } from "@mui/material";
import { SocialMediasWrapper, Wrapper } from "./styles";

export const Footer = () => {
  return (
    <Container py={20}>
      <Wrapper>
        <Grid container spacing={5} justifyContent="space-between">
          <Grid item xs={12} md={6} lg={5}>
            <Logo />
            <Typography variant="h2" color="text.primary">
              One of the best furniture agency.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={4} mt={8}>
            <Box display="flex" gap={2} alignItems="center">
              <Circle />
              <Typography variant="body1" color="text.primary">
                Enter your email to get the latest news
              </Typography>
            </Box>
            <ArrowRight className="arrow-right" />
            <TextField label="Email Address" variant="standard" fullWidth />
            <Box mt={10} width="fit-content" ml="auto">
              <Typography variant="body1" color="text.primary">
                Follow us On
              </Typography>
              <SocialMediasWrapper>
                <Facebook />
                <Instagram />
                <Tiktok />
                <Youtube />
              </SocialMediasWrapper>
            </Box>
          </Grid>
        </Grid>
      </Wrapper>
    </Container>
  );
};
