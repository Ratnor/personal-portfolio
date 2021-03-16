import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import nss from "../../Assets/Projects/nss-can.png";
import iot from "../../Assets/Projects/connected-retail.png";
import vapp from "../../Assets/Projects/vapp.PNG";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nss}
              isLink={true}              
              title="NSS Canada"
              description="Redesign & redevelopment of a WordPress website with new features such as accepting donations using PayPal (& Visa). Made custom back-end plugin modifications using PHP & MySQL and front-end modifications made using JS, JQuery & CSS"
              link="https://nsscanada.org/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vapp}
              isLink={true}             
              title="Vulnerability App (VApp)"
              description="Design a web application to retrieve (with permission) & assess (give a score) thestate of the user’s privacy settings. Front-end on Vue.js & back-end using Node.js & MySQL server."
              link="https://github.com/Ratnor/VApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot}
              isLink={false}              
              title="Bell - Connected Retail"
              description="Reviewed our architecture with Azure Architects to plan & develop a smart retail prototype. Built using ESLs, Ultrasonic Sensors & Raspberry Pi 4/IoT Dev Kit to serve as an Edge device that communicates telemetry to the IoT Hub."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;