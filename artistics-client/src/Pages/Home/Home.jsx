import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner/Banner";
import TrendingTopics from "./TrendingTopics/TrendingTopics";
import GreatStories from "./GreatStories/GreatStories";
import NewsLetter from "./NewsLetter/NewsLetter";


const Home = () => {
  return (
    <div className="background-color">
      <Container>
        <Banner />
        <TrendingTopics />
        <GreatStories />
        <NewsLetter />
      </Container>
    </div>
  );
};

export default Home;
