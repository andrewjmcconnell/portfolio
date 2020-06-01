import React from "react";

import { Ocean, OuterBubbleWrapper, BubbleWrapper } from "./Bubbles.styled";
import Bubble from "./Bubble.svg";
import { getRandomInt, Img } from "../../utils/common";

const Bubbles = () => {
  const bubbles = 15;
  return (
    <Ocean>
      {[...new Array(bubbles).keys()].map(bubble => {
        const duration = getRandomInt(30) + 40;
        const delay = getRandomInt(50);
        const delayOuter = getRandomInt(10);
        const width = getRandomInt(4) + 1;
        const left = getRandomInt(100);
        return (
          <OuterBubbleWrapper key={bubble} delay={delayOuter}>
            <BubbleWrapper
              key={bubble}
              left={left}
              width={width}
              duration={duration}
              delay={delay}
            >
              <Img src={Bubble} width={width} z={1} />
            </BubbleWrapper>
          </OuterBubbleWrapper>
        );
      })}
    </Ocean>
  );
};

export default Bubbles;
