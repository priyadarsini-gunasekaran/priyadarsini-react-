import React from 'react'
import { Container } from 'react-bootstrap'
import "./CSS/Experience.css"
import Footer from "../Components/Footer"

export default function Experience() {
  return (
    <div>
    <section className='ExpSection'>
      <Container>
      <h2 className='h2Title'>Experience</h2>
      <p className='Ptext'>As for my future, I hope to one day work as a Full-stack developer and work with a diverse development team.</p>
      <div className="timeline">
      <div className="containe left">
        <div className="content">
          <h6>Sep 2020 - Jul 2022 (22 Months)</h6>
          <h5>SDS CAP SME</h5>
          <h6 className='company'>AMAZON DEVELOPMENT CENTRE (INDIA) PRIVATE LIMITED </h6>
          <p>As a CAP SME, I was responsible for auditing, conducting training for new joiners and assiting new joiners in their day to day work activities.</p>
        </div>
      </div>
      <div className="containe right">
        <div className="content">
          <h6>Aug 2011 - Aug 2013 (2 Years)</h6>
          <h5>Customer Service Officer </h5>
          <h6 className='company'>Computer Age Management Services Pvt. Ltd.</h6>
          <p>Responsible for preparing score cards, daily & monthly reports and reporting it to Deputy Manager and Responding to all Investors inquiries & complaints through Telecom & Mail Communications.</p>
        </div>
      </div>
      </div>
      </Container>
    </section>

    <Footer />
    
    </div>
  )
}
