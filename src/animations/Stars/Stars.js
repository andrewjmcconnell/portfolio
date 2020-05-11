import React from "react";

import { Star } from "./Stars.styled";

import { getRandomInt } from "../../utils/common";

const Stars = ({ count }) =>
  [...new Array(count).keys()].map(star => {
    const left = getRandomInt(100);
    const top = getRandomInt(100);
    const duration = getRandomInt(5) + 5;
    const delay = getRandomInt(5) + 5;
    return (
      <Star
        key={star}
        left={left}
        top={top}
        duration={duration}
        delay={delay}
      />
    );
  });

export default Stars;
