import React from 'react';
import { Col, Image } from 'react-bootstrap';

const SingleFounder = ({founder}) => {
    const {name, img, designation} = founder;
    return (
        <Col md={3} sm={12}>
            <Image src={img} className='img-fluid' style={{borderRadius: '20px'}} />
            <h4 className="mt-2 mb-0" style={{fontSize: '22px', fontWeight: 'bold'}}>{name}</h4>
            <p>{designation}</p>
        </Col>
    );
};

export default SingleFounder;