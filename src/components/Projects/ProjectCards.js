import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" >
      <Row className="project-card" style={{ justifyContent: "center", padding: "10px" }}>
        <Col>
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title><strong className="purple">{props.client}</strong> - {props.title}</Card.Title>
            <br></br>
            <Card.Subtitle><strong className="purple">Role: </strong>{props.role}</Card.Subtitle> <br></br>
            <Card.Subtitle><strong className="purple">Time: </strong>{props.role}</Card.Subtitle> <br></br>   
            <Card.Text style={{ textAlign: "justify" }}>
              <li>{props.description1}</li>            
            </Card.Text>
            <Card.Text style={{ textAlign: "justify" }}>
              <li>{props.description2}</li>
            </Card.Text>
            <Card.Text style={{ textAlign: "justify" }}> 
                <li>{props.description3}</li>               
            </Card.Text>          
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
export default ProjectCards;
