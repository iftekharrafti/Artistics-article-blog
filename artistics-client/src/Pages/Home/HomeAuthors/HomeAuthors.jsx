import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Author from "../../../Components/Author.jsx/Author";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", color: '#000', background: "#4F46E5", width: '35px', height: '35px', justifyContent:'center', alignItems: 'center', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "flex", color: '#000', background: "#4F46E5", width: '35px', height: '35px', justifyContent:'center', alignItems: 'center', borderRadius: '50%' }}
        onClick={onClick}
      />
    );
  }

const HomeAuthors = () => {
  const [authors, setAuthors] = useState([]);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    fetch("/authors.json")
      .then((res) => res.json())
      .then((data) => setAuthors(data));
  }, []);
  return (
    <div style={{ padding: "60px 0" }}>
      <div className="text-center mb-4">
        <h2>Newest authors</h2>
        <p style={{ fontSize: "22px" }}>
          Say hello to future creator potentials
        </p>
      </div>
      <Container>
        <Slider {...settings}>
          {authors.map((author) => (
            <Author key={author.id} author={author} />
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default HomeAuthors;
