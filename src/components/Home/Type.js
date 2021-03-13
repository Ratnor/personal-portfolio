import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A Developer",
          "A Software Engineer",
          "An IoT Developer",
          "A Project Manager",
          "A Performance Tester",
          "A Consultant",
          "A Front-End Developer",
          "A Chief Operating Officer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
    />
  );
}

export default Type;
