import React from "react";
import { Banner } from "./Banner";
import { Wrapper } from "./styles";
import { Content } from "./Content";
import { Gallery } from "./Gallery";
import { ContentSection } from "./ContactSection";

export const Main = () => {
  return (
    <Wrapper>
      <Banner />
      <Content />
      <Gallery />
      <ContentSection />
    </Wrapper>
  );
};
