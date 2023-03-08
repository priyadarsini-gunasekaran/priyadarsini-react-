import React from "react";
import "./CSS/About.css"
import { Container, Row, Col } from "react-bootstrap";
import SkillSet from "../Images/front-end-skills.png"

import Footer from "../Components/Footer"




const About = () => {
    return <div>

      {/* Hero Section */}
      <section className="HeroSection">
        <Container>
          <Row>
            <Col sm={6} className="AboutImageSection">
              <img src={SkillSet} alt="About Skills"/>
            </Col>
            <Col sm={6} className="AboutContent">
              <h4>About Me</h4>
              <h2>Web Front-End Developer</h2>
              <p>Self-motivated Web Developer would like to working on projects. Passionate and hardworking with a penchant for meeting deadlines. Interested in a role with a company promoting best practices and offering diverse customer projects.</p>
             
              
              <h5><span>Let's talk with me:</span> <br /> <a href="mailto:priyasatish1626@gmail.com" target="_blank" rel="noreferrer">priyasatish1626@gmail.com</a></h5>
            </Col>
          </Row>
        </Container>
      </section>






      <Footer />

    </div>
  };
  
  export default About;