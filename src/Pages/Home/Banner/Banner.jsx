import "@fontsource/josefin-sans";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import doctorfinding from '../../../Images/doctorfinding.c2532ac3.png';
// import heroTeeth from '../../../Images/hero-theeth.54c2c4e9.png';
// import womanbrush from '../../../Images/woman-brush.c4158ac5.png';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../Images/animation-header.json';


import './Banner.css';
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  


const Banner = () => {
    return (
            <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} sm={12} lg={6}>
                            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
                                <h2>Better Life Through</h2>
                                <h1>Better Medical OCR</h1>
                                <p className="mb-xs-5">Join us to a fun and friendly dental environment. Our professionals are working so hard to see smile on your face that you deserve! We are dedicated about our duties.</p>
                                <div className="banner-btn m-sm-auto">
                                    <Link to="/login"><button className="theme-btn btn-fill">Appoinment</button></Link>
                                    <button className='theme-btn bth-blank'>Learn More</button>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} sm={12} lg={6} className="mt-sm-5">
                        <div className="ocr-mob">
                        <Lottie options={defaultOptions} height={500} width={400} />
                        
                        </div>

                        
                        
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default Banner;