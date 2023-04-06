import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner/Banner";
import TrendingTopics from "./TrendingTopics/TrendingTopics";
import GreatStories from "./GreatStories/GreatStories";
import NewsLetter from "./NewsLetter/NewsLetter";
import HomeAuthors from "./HomeAuthors/HomeAuthors";
import EditorsPick from "./EditorsPick/EditorsPick";

const Home = () => {
  return (
    <div className="background-color">
      <Container>
        <Banner />
        <TrendingTopics />
      </Container>
      <EditorsPick />
      <Container>
        <GreatStories />
      </Container>
      <HomeAuthors />
      <Container>
        <NewsLetter />
      </Container>
    </div>
  );
};

export default Home;
