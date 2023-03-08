import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CSS/Home.css"
import Sagar from "../Images/36.jpg"
import Linkedin from "../Images/Social Media/linkedin.png"
import github from "../Images/Social Media/github.png"

import Footer from "../Components/Footer";
import Contact from "./Contact";




const Home = () => {
    function OpenCV(){
      window.open(
        "https://drive.google.com/file/d/1Fc0TDatDtzyVnyAFClRYz6CY-GjSez_t/view?usp=share_link", "_blank");
      }

    return <div>
            {/*Hero Section */}
            <Container>
              <Row className="Hero">
                <Col sm={12} md={6}>
                  <img className="ProfileImage" src={Sagar} alt="Priya's profile"/>
                </Col>
                <Col sm={12} md={6} className="HeroContent">
                  <h6>I'm <span style={{color:"#084AF3"}}>Priyadarsini G</span></h6>
                 
                  <p>A Front-End Web Developer passionate about creating interactive applications and experiences on the web </p>
                  <p> I love creating pages where I'm able to actually create enjoyable interactions and experiences for everyone!</p>
                    <div className="btngrp"> 
                    <Link to="/About">
                    <button className="primary" 
                    style={{marginRight:"10px"}}
                    >About Me
                    </button>
                  </Link>
                  <button className="secondary"
                    onClick={OpenCV}>
                    Download CV
                  </button>
                    </div>
                </Col>
              </Row>
            </Container>

            {/*About Section */}
            <section className="About">
            <Container>
            <Row>
              <Col sm={10} xs={12} md={8} lg={9} xl={10} className="AboutContent">
                <div className="d-flex pt-1">
                  <div className="SocialIcon">
                    <a href="https://www.linkedin.com/in/priyadarsini-gunasekaran-83a430157/" target="_blank" rel="noreferrer">
                      <img src={Linkedin} alt="Linkedin" />
                    </a>
                  </div>
                  <div className="SocialIcon">
                    <a href="https://github.com/priyadarsini-gunasekaran" target="_blank" rel="noreferrer">
                    <img src={github} alt="github" />
                    </a>
                  </div>
                  
                 
                  
                </div>
              
              </Col>
              <Col sm={2} md={4} lg={3} xl={2}>
              </Col>
              
            </Row>
            </Container>
            </section>


            {/*Contact Section */}
            <Contact />
            
            <Footer />
            
          </div>
  };
  
  export default Home;