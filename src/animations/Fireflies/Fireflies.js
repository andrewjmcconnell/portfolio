import React from "react";

import { FirefliesWrapper, Firefly } from "./Fireflies.styled";
import { getRandomInt } from "../../utils/common";

const Fireflies = ({ z }) => {
  const fireflies = 20;
  return (
    <FirefliesWrapper>
      {[...new Array(fireflies).keys()].map(id => (
        <Firefly
          n={id}
          z={z}
          key={`firefly-${id}`}
          steps={getRandomInt(12) + 16}
          rotationSpeed={getRandomInt(10) + 8}
          duration={getRandomInt(6000) + 5000}
          delay={getRandomInt(8000) + 500}
          random={getRandomInt}
        />
      ))}
    </FirefliesWrapper>
  );
};

export default Fireflies;