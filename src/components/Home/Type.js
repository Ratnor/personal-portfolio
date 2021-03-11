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
          "A Performance Test Team Lead",
          "A Consultant",
          "A Front-End Developer",
          "A Cheif Operations Officer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
    />
  );
}

export default Type;
