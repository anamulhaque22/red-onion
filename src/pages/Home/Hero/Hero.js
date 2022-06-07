import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Hero.css'
const Hero = () => {
    return (
        <div className='hero'>
            <Container className='h-100'>
                <Row className='align-items-center h-100'>
                    <Col md={12}>
                        <div className="hero-content">
                        <h1>Best Food Waiting For Your Belly</h1>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search Food Items" aria-label="Search Food Items" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn" type="button">Button</button>
                                </div>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;