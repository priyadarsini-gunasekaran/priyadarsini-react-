import React from 'react'
import Project1 from "../Images/Projects/Rpersonify.jpg"
import Project2 from "../Images/Projects/Dynamics Agiluty.jpg"
import Project3 from "../Images/Projects/counselorjyoti.jpg"
import Project4 from "../Images/Projects/Car Galaxy.jpg"
import Project5 from "../Images/Projects/Evo Design.jpg"
import { Container, Row, Col } from "react-bootstrap";
import "./CSS/Projects.css"
import Footer from '../Components/Footer';


export default function Projects() {
  return (
    <div>
      {/* Portfolio Section */}
      <section className="PortfolioSection">
      <Container>
          <h2>Recent Projects</h2>
          <p>I design and code beautifully simple things, and I love what I do.</p>
        <Row className="ProjectsList">
        <Col sm="4" className="Project">                 
          <img src={Project1} alt="rpersonify" /> 
          <h4 class="project-title">Password Generator</h4>
          <a href="https://priyadarsini-gunasekaran.github.io/Module-5-Challenge/starter/index.html" rel="noreferrer" class="project-link">Check-out GitHub Link</a>
        </Col>
        <Col sm="4" className="Project">                 
          <img src={Project2} alt="Dynamics Agilty" />
          <h4 class="project-title">Console and Finances</h4>
          <a href="https://priyadarsini-gunasekaran.github.io/Console-Finances/starter/index.html" rel="noreferrer" class="project-link">Check-out GitHub Link</a>
        </Col> 
        <Col sm="4" className="Project">                
          <img src={Project5} alt="Evo Design Studio" />
          <h4 class="project-title">Code Quiz</h4>
          <a href="https://priyadarsini-gunasekaran.github.io/Code-Quiz/starter/index.html" rel="noreferrer" class="project-link">Check-out GitHub Link</a> 
        </Col>       
        </Row>
        <Row className='pt-4'>
        <Col sm="4" className="Project">    
          <img src={Project3} alt="counselor jyoti" />
          <h4 class="project-title">Daily Planner</h4>
          <a href="https://priyadarsini-gunasekaran.github.io/Daily-Planner/starter/index.html" rel="noreferrer" class="project-link">Check-out GitHub Link</a>
      </Col>
      <Col sm="4" className="Project">                
          <img src={Project4} alt="Car Galaxy" />
          <h4 class="project-title">5 Day Weather Forecast</h4>
          <a href="https://priyadarsini-gunasekaran.github.io/5-Day-Weather-Forecast-API/starter/index.html" rel="noreferrer" class="project-link">Check-out GitHub Link</a>
      </Col>
      <Col sm="4" className="Project">                
          <img src={Project5} alt="Evo Design Studio" />
          <h4 class="project-title">ReadMe Generator</h4>
          <a href="https://github.com/priyadarsini-gunasekaran/ReadMe-Generator" rel="noreferrer" class="project-link">Check-out GitHub Link</a>  
      </Col>
        </Row>
      </Container>
    </section>

    <Footer />
    </div>
  )
}
