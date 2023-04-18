import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleFounder from "./SingleFounder/SingleFounder";

const AboutFounder = () => {
    const [founders, setFounders] = useState([]);

    useEffect(() =>{
        fetch('/founder.json')
        .then(res => res.json())
        .then(data => setFounders(data))
    },[])
  return (
    <div style={{ paddingBottom: "60px" }}>
      <Container>
        <h2>⛱ Founder</h2>
        <p style={{fontSize: '20px'}}>
          We’re impartial and independent, and every day we create <br></br>{" "}
          distinctive, world-class programmes and content
        </p>

        <Row className="mt-4">
            {
                founders.map(founder => <SingleFounder key={founder.id} founder={founder} />)
            }
        </Row>
      </Container>
    </div>
  );
};

export default AboutFounder;
