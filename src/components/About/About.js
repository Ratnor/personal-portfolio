import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              a little bit more about <strong className="purple">myself...</strong>
            </h1>
            <Aboutcard />
          </Col>          
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Tilt>
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Tilt>
          </Col>          
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Skills</strong>
        </h1>
        <Row style={{ justifyContent: "center", padding: "50px" }}>        
          <Techstack iconName="cib-java" /> 
          <Techstack iconName="cib-python" />
          <Techstack iconName="cib-html5" /> 
          <Techstack iconName="cib-js" />
          <Techstack iconName="cib-css3-shiled" />
          <Techstack iconName="cib-jquery" /> 
          <Techstack iconName="cib-bootstrap" />
          <Techstack iconName="cib-wordpress" />
          <Techstack iconName="cib-mysql" />
          <Techstack iconName="cib-git" />                    
          <Techstack iconName="cib-react" />
          <Techstack iconName="cib-node-js" />
          <Techstack iconName="cib-sass-alt" />
          <Techstack iconName="cib-less" />
          <Techstack iconName="cib-stylus" />           
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> & <strong className="purple">Frameworks</strong>
        </h1>
        <Row style={{ justifyContent: "center", padding: "50px" }}>
          <Techstack iconName="cib-ubuntu" />
          <Techstack iconName="cib-visual-studio-code"/>
          <Techstack iconName="cib-amazon-aws" />
          <Techstack iconName="cib-docker" />
          <Techstack iconName="cib-raspberry-pi" />
          <Techstack iconName="cib-npm" />
          <Techstack iconName="cib-github" />
          <Techstack iconName="cib-bitbucket" /> 
          <Techstack iconName="cib-confluence" />
          <Techstack iconName="cib-jira" />          
          <Techstack iconName="cib-cpanel" />
          <Techstack iconName="cib-redux" />
          <Techstack iconName="cib-postman" />
          <Techstack iconName="cib-intellijidea" />
          <Techstack iconName="cib-eclipseide" />
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
