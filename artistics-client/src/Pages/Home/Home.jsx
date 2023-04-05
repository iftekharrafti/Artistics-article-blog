import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner/Banner";
import TrendingTopics from "./TrendingTopics/TrendingTopics";


const Home = () => {
  return (
    <div className="background-color">
      <Container>
        <Banner />
        <TrendingTopics />
      </Container>
    </div>
  );
};

export default Home;
