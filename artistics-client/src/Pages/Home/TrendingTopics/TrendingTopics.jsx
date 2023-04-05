import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SingleTrending from "./SingleTrending/SingleTrending";

const TrendingTopics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("/trending.json")
      .then((res) => res.json())
      .then((data) => setTopics(data));
  }, []);

  return (
    <div style={{padding: '60px 0'}}>
      <h1>Top trending topics</h1>
      <h4>Discover over 100 topics</h4>

      <Row className="mt-5">
        {topics.map((topic) => (
          <SingleTrending key={topic.id} topic={topic} />
        ))}
      </Row>
    </div>
  );
};

export default TrendingTopics;
