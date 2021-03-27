import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#FFFFFF",
    grade4: "#1F87FF",
    grade3: "#3E98FF",
    grade2: "#5CA8FF",
    grade1: "#9BC4FD",
    grade0: "#C5D6FC",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
       The few times I <strong className="purple">Contributed</strong>
      </h1>
      <GitHubCalendar
        username="Ratnor"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={15}
      />
    </Row>
  );
}

export default Github;
