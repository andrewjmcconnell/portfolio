import React from "react";

import { RainWrapper, Raindrop } from "./Rain.styled";

const Rain = ({ screenIndex }) => {
  const raindrops = 50;

  const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

  return (
    <RainWrapper screenIndex={screenIndex}>
      {[...new Array(raindrops).keys()].map(id => (
        <Raindrop
          key={`raindrop-${id}`}
          duration={getRandomInt(10) + 6}
          delay={getRandomInt(30)}
          left={getRandomInt(100)}
          opacity={(getRandomInt(30) + 30) * 0.01}
        />
      ))}
    </RainWrapper>
  );
};

export default Rain;
