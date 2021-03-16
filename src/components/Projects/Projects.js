import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import medhub from "../../Assets/Projects/medHub.png";
import eeg from "../../Assets/Projects/eeg.gif";
import suicide from "../../Assets/Projects/suicide.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work</strong> Experience
        </h1>
        <p style={{ color: "white" }}>
          Here are my work experinces (Work & Co-op).
        </p>      
          
        <ProjectCard                    
          imgPath={leaf}              
          title="Performance Testing"
          role="Consultant"
          client="The Source"
          description1="Supported as a project lead on a Performance Testing Project for Black Friday."
          description2="Collaborated with various teams and, analyzed, reported & proposed recommendedaction(s) based on the various testing/tuning cycles performed."
          description3="We used various tools such as BlazeMeter, DynaTrace, Hybris Admin Console, JMeter& Google Analytics, to test & monitor performance improvements."
        />
        <br></br>
        <br></br>
        <ProjectCard
          imgPath={leaf}              
          title="Connected Retail"
          role="IoT Developer"
          client="Bell"
          description1="Conducted design thinking sessions with many stakeholders, to define a solutionarchitecture of a “Connected Retail 360” to bring online shopping experience toin-store,  based on Azure IoT Best Practices."
          description2="Built using ESLs, Ultrasonic Sensors & Raspberry Pi 4/IoT Dev Kit to serve as an Edgedevice that communicates telemetry to the IoT Hub."
          description3="Pitched the Connected Retail Experience as part of the Bell BU IoT CoE Team."
        />
        <br></br>
        <br></br>
        <ProjectCard
          imgPath={leaf}              
          title="Social Media Startup"
          role="Chief Information Officer"
          client="MC Master of Ceremony"
          description1="Supported as a project lead on a Performance Testing Project for Black Friday."
          description2="Collaborated with various teams and, analyzed, reported & proposed recommendedaction(s) based on the various testing/tuning cycles performed."
          description3="We used various tools such as BlazeMeter, DynaTrace, Hybris Admin Console, JMeter& Google Analytics, to test & monitor performance improvements."
        />
      </Container>
    </Container>
  );
}

export default Projects;
