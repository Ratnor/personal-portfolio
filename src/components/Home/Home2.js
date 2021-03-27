import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/itsme.mp4";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      
        <Row>        
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> MYSELF </span> 
            </h1>
            <p className="home-about-body">
              I fell in love with programming at the age of <b><span className="purple">15 </span></b>
              and I have learned ever since!
              <br />
              <br />I have experience working on classics like <b className="purple">Python </b> 
                which i picked up in high school and still find myself using.
                Other languages like <b className="purple"> Java</b>, which I was first 
                exposed to at my first co-op placement at <b className="purple">CIBC</b> as an 
                <b className="purple"> Intermediate Software Developer</b>. 
                <br />
                <br />At <b className="purple">CGI</b>, as part of the new grad program, 
                I had the earliest opportunity to work on a Connected Retail project
                as an <b className="purple">IoT Developer</b>.                                
              <br />
              <br />
              More recently, as a <b className="purple">Consultant</b> I have begun exploring other roles, including 
              Test Engineer, Project Manager & Business System Analyst. I have been exposed to various tools and 
              methodologies during this accelerated learning period. My latest work as a 
              <b className="purple"> Front-end Developer</b> involve using 
              <b className="purple"> HTML/CSS/Javascript, JQuery</b> and other Web Development tools.
              My current focus is to become proficient at  
              <b className="purple"> Full Stack Development </b>             
              <br />
              <br />
              Whenever I get a chance, I attempt solving open source issues, and apply my passion for developing products
              with
              
                <b className="purple"> Modern Javascript Frameworks </b>
              
              such as
              
                <b className="purple"> <i className="fab fa-react" > </i> and <i className="fab fa-node-js" > </i></b>
              
            </p>
          </Col>   
          <Col md={5} className="myAvtar">          
            <Tilt className="tilt">
              <video width="auto" height="425" loop="true" autoplay="true">
                <source src={myImg} type="video/mp4" />
              </video>              
            </Tilt>

          </Col>       
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            
            <p className="home-about-connect">
              Feel free to <span className="purple">connect </span>with me on
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ratnor"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ratnaemani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ratnaemoney/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>          
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
