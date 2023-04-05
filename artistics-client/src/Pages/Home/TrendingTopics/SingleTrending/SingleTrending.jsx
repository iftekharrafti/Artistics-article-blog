import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleTrending = ({ topic }) => {
  return (
    <Col
      md={3}
      sm={6}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div style={{ background: "#fff", padding: '40px 80px', marginBottom: '30px', textAlign: 'center', borderRadius: '25px' }}>
        <Image
          src={topic.img}
          style={{ width: "80px", height: "80px", borderRadius: "50%" }}
        />
        <h5 className="mt-2">{topic.title}</h5>
        <p>{topic.article}</p>
      </div>
    </Col>
  );
};

export default SingleTrending;
