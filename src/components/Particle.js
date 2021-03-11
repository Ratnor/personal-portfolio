import React from "react";
import Particles from "react-particles-js";

function Particle() {
  return (
    <Particles 
    params={{
      particles: {
        line_linked: {
          shadow: {
            enable: true,
            color: "#3CA9D1",
            blur: 5
          }
        }
      }
    }}
    style={{
      width: '100%',
      backgroundImage: `..\Assets\logo.png` 
    }}
  />
);
}


export default Particle;
