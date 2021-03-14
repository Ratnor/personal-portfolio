import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            I am <span className="purple">Ratna Emani </span>
            from <span className="purple"> Ontario, Canada.</span>
            <br />I graduated from McMaster University with Bachelor of Engineering (Software) in 2019. 
            <br />
            <br />
            Apart from coding, some other activities that I enjoy to do!
          </p>
          <ul>
            <li className="about-activity">
            <i class="fas fa-film"></i> Watching Movies & TV shows
            </li>
            <li className="about-activity">
            <i class="fas fa-music"></i> Listening to Music
            </li>
            <li className="about-activity">
            <i class="fas fa-book-reader"></i> Reading Books & Articles
            </li>
            <li className="about-activity">
            <i class="fas fa-map-marked-alt"></i> Travelling
            </li>
            <li className="about-activity">
            <i class="fas fa-utensils"></i> Cooking & Eating
            </li>
            <li className="about-activity">
            <i class="fas fa-guitar"></i> Playing my Guitar
            </li>
          </ul>

          <p className="blockquote-quote">
            "It's not a bug, it's a feature"
          </p>          
            <footer className="blockquote-footer">anon</footer>
           
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
