import React from "react";
import AboutBanner from "./AboutBanner/AboutBanner";
import { Container } from "react-bootstrap";
import AboutFounder from "./AboutFounder/AboutFounder";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import AboutFastFacts from "./AboutFastFacts/AboutFastFacts";

const About = () => {
  return (
    <div className="background-color">
      <AboutBanner />
      <AboutFounder />
      <AboutFastFacts />

      <Container>
        <NewsLetter />
      </Container>
    </div>
  );
};

export default About;
