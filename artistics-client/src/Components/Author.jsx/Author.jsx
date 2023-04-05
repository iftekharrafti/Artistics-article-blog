import React from "react";
import { Image } from "react-bootstrap";

const Author = ({ author }) => {
  const { name, img, cover_img } = author;
  return (
    <div className="py-0 px-3">
      <div>
        <Image src={cover_img} className="img-fluid"  />
      </div>
      <div className="d-flex justify-content-center">
        <Image src={img} className="img-fluid" style={{width: '80px', height: '80px', borderRadius: '50%', margin: '-40px'}} />
      </div>

      <div style={{textAlign: 'center', marginTop: '40px'}}>
        <h5>{name}</h5>
        <p>@Author Job</p>
      </div>
    </div>
  );
};

export default Author;
