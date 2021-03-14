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
          <Techstack iconName="fab fa-java" />
          <Techstack iconName="fab fa-python" />
          <Techstack iconName="fab fa-js" />          
          <Techstack iconName="fab fa-bootstrap" />
          <Techstack iconName="fab fa-git-alt" />                    
          <Techstack iconName="fab fa-react" />
          <Techstack iconName="fab fa-node " />
          <Techstack iconName="fab fa-sass" />
          <Techstack iconName="fab fa-less" />               
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong>
        </h1>
        <Row style={{ justifyContent: "center", padding: "50px" }}>
          <Techstack iconName="fab fa-ubuntu" />
          <Techstack iconName="fab fa-windows" />
          <Techstack iconName="fab fa-aws" />
          <Techstack iconName="fab fa-docker" />
          <Techstack iconName="fab fa-github " />
          <Techstack iconName="fab fa-bitbucket" /> 
          <Techstack iconName="fab fa-confluence" />
          <Techstack iconName="fab fa-jira" />
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
