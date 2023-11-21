import React from "react";
import { Grid } from "@mui/material";
import galleryImage1 from "assets/unsplash_2_BZuGgkP4k.png";
import galleryImage2 from "assets/unsplash_7tFlUFGa7Dk.png";
import galleryImage3 from "assets/unsplash_JIUjvqe2ZHg.png";
import galleryImage4 from "assets/unsplash_dO3qTKxwik0.png";
import galleryImage5 from "assets/unsplash_sdRZrK4lVCk.png";
import { Container } from "ui-kit";

export const Gallery = () => {
  return (
    <Container>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <img
            src={galleryImage1}
            alt="gallery_image_1"
            loading="lazy"
            height="513px"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={galleryImage2}
            alt="gallery_image_2"
            loading="lazy"
            height="513px"
          />
        </Grid>
        <Grid item width={1}>
          <img
            src={galleryImage3}
            alt="gallery_image_3"
            loading="lazy"
            height="513px"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={galleryImage4}
            alt="gallery_image_4"
            loading="lazy"
            height="513px"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={galleryImage5}
            alt="gallery_image_5"
            loading="lazy"
            height="513px"
          />
        </Grid>
      </Grid>
    </Container>
  );
};
