import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/itsMe.gif";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home2() {
  let currentTime = new Date();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      
        <Row>        
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming at the age of <b><span className="purple">15 </span></b>
              and I've been learning ever since!
              <br />
              <br />I have experience working in classics like
              
                <b className="purple"> Java, Python and HTML/CSS/Javascript. </b>
              
              <br />
              <br />
              My current focus is on Learning&nbsp;              
              <b className="purple">
               Full Stack Development {/* Try adding animated icons */}               
              </b> (& few other things 😋)              
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
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>       
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            
            <p>
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
