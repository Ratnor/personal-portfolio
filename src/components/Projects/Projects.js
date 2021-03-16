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
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={nss}
              isLink={true}              
              title="NSS Canada"
              description="Redesign & develop a WordPress website with new features (i.e. PayPal donations). Plugin modifications using PHP & MySQL and front-end modifications made using JS, JQuery & CSS."
              link="https://nsscanada.org/"
            />
          </Col>


          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={vapp}
              isLink={true}             
              title="Vulnerability App (VApp)"
              description="Design a web application to retrieve (with permission) & assess (give a score) thestate of the user’s privacy settings. Front-end on Vue.js & back-end using Node.js & MySQL server."
              link="https://github.com/Ratnor/VApp"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={iot}
              isLink={false}              
              title="CGI - Connected Retail"
              description="Planned & developed a smart retail prototype; built using ESLs, Ultrasonic Sensors & Raspberry Pi 4/IoT Dev Kit to serve as an Edge device that communicates telemetry to the IoT Hub."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;