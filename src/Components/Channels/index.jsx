import React from 'react';
import './styles.css';
import Col from 'react-bootstrap/Col';

const Channels = ({ src, alt, title, tagline, width }) => {
    return (
        <Col md={4} className="text-center">
            <img width={width} src={src} alt={alt} />
            <h3 className="title">{title}</h3>
            <p className="tagline">{tagline}</p>
        </Col>
    )
}

export default Channels;