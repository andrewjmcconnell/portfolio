import React from "react";

import { RainWrapper, Raindrop } from "./Rain.styled";
import { getRandomInt } from "../../utils/common";

const Rain = () => {
  const raindrops = 5;
  return (
    <RainWrapper>
      {[...new Array(raindrops).keys()].map(id => (
        <Raindrop
          key={`raindrop-${id}`}
          duration={getRandomInt(2) + 2}
          delay={getRandomInt(30)}
          left={getRandomInt(100)}
          opacity={(getRandomInt(30) + 30) * 0.01}
        />
      ))}
    </RainWrapper>
  );
};

export default Rain;
