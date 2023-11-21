import React from "react";
import { Typography } from "@mui/material";
import bannerImage from "assets/unsplash_77JACslA8G0.png";
import { Wrapper } from "./styles";
import { Container } from "ui-kit";

export const Banner = () => {
  return (
    <Container>
      <Wrapper>
        <Typography variant="h1" textAlign="center">
          Minimalist Room
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          maxWidth={["90%", "60%", "50%", 520]}
          mb={[8, 10, 13]}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Typography>
        <img
          src={bannerImage}
          alt="dananz_banner"
          loading="lazy"
          height="513px"
        />
      </Wrapper>
    </Container>
  );
};
