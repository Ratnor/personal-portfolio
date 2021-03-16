import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import pdf from "../../Assets/Resume-Ratna-Jan_2021.pdf";

function Resume() {  
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
                title="CGI - CONSULTANT"
                client="Client: The Source"
                date="Mar 2020 - PRESENT"
                content={[
                  "Supported as a project lead on a Performance Testing Project for Black Friday",
                  "Collaborated with various teams and, analyzed, reported & proposed recommendedaction(s) based on the various testing/tuning cycles performed.",
                  "We used various tools such as BlazeMeter, DynaTrace, Hybris Admin Console, JMeter& Google Analytics, to test & monitor performance improvements."
                ]}
              />
            <Resumecontent
                title="CGI - IoT DEVELOPER"
                client="Client: Bell"
                date="Sep 2019 - Mar 2020"
                content={[
                  "Conducted design thinking sessions with many stakeholders, to define a solutionarchitecture of a “Connected Retail 360” to bring online shopping experience toin-store,  based on Azure IoT Best Practices.",
                  "Built using ESLs, Ultrasonic Sensors & Raspberry Pi 4/IoT Dev Kit to serve as an Edgedevice that communicates telemetry to the IoT Hub",
                  "Pitched the Connected Retail Experience as part of the Bell BU IoT CoE Team."
                ]}
              />
            <Resumecontent
                title="MC Master of Ceremony — ​CIO"              
                date="Nov 2019 - Oct 2020"
                content={[
                  "My tasks involved making decisions in the architecture design of the technical stackthrough R&D, on-boarding & management of the team members, engaging daily withteam developers, in a part-time capacity.",
                  "Using Agile methodology the application was developed on AWS, using themicro-services architecture, we used React Native to develop the mobile app, andReact for the web application front-end and used Lambda functions (Node.js) for theback-end with both DynamoDB and SQL DBs."
                ]}
              />
            <Resumecontent
              title="CGI — RPA DEVELOPER (CO-OP) "              
              date="May 2017 - Oct 2017"
              content={[
                "Performed acceptance testing of various RPA applications and tools to identify &assess the tradeoffs.",
                "Participated in various discussions with RPA Vendors (i.e. Blue Prism, UiPath &WorkFusion)."
              ]}
            />
          <Resumecontent
            title="CIBC — INTERMEDIATE APPLICATION DEV (CO-OP) "              
            date="May 2016 - Apr 2017"
            content={[
              "Using the BRD and the team lead’s guidance, implemented full stack modifications toRich client application tools (i.e. Client Notebook & Investment Planning) in Java",
              "In the final phases of the project life cycle, worked closely with the QC & DTS teamsduring SIT & UAT cycles."
            ]}
          />
          <Resumecontent
            title="CIBC — INTERMEDIATE APPLICATION DEV (CO-OP) "              
            date="May 2016 - Apr 2017"
            content={[
              "First experience working in an enterprise software development environment.Implemented minor front-end modifications on a legacy application using Java.",
              "Participated in code reviews, and used HP ALM to track issues during DIT/SIT."
            ]}
          />         
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Other Projects</h3>
            <Resumecontent
              title="NSS Canada - WordPress Web Developer"
              date="APR 2020 - JUL 2020"
              content={[
                 "Redesign & redevelopment of a WordPress website with new features such asaccepting donations using PayPal (& Visa).",
                "Custom back-end plugin modifications using PHP & MySQL.",
                "Custom front-end modifications made using JS, JQuery & CSS."
              ]}
            />
            <Resumecontent
              title="VApp - Capstone Project"
              content={[
                "Design a web application to retrieve (with permission) & assess (give a score) thestate of the user’s privacy settings.",
                "Front-end on Vue.js & back-end using Node.js & MySQL server."
              ]}
            />
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="McMaster University - Hamilton, Ontario"
              date="2018 - Present"
              content={["Bachelor of Engineering - Software"]}
            />
            <Resumecontent
              title="The Hong Kong University of Science & Technology, Coursera (Online)"
              date="SEP 2020 - PRESENT"
              content={["Full-Stack Web Development with React Specialization"]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
