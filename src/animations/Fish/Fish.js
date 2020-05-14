import React from "react";

import { Img, getRandomInt } from "../../utils/common";
import { Ocean, OuterFishWrapper, FishWrapper } from "./Fish.styled";

import BigFishOne from "./dark/BigFishOne.svg";
import BigFishTwo from "./dark/BigFishTwo.svg";
import SmallFishRight from "./dark/SmallFishRight.svg";
import SmallFishLeft from "./dark/SmallFishLeft.svg";

const FishDark = [
  { img: BigFishOne, start: "left" },
  { img: BigFishTwo, start: "left" },
  { img: SmallFishRight, start: "left" },
  { img: SmallFishLeft, start: "right" }
];

const Fish = () => {
  const numFish = 15;
  return (
    <Ocean>
      {[...new Array(numFish).keys()].map(fish => {
        const fishType = getRandomInt(4);
        const duration = getRandomInt(30) + 40;
        const delayOuter = getRandomInt(10);
        const delay = getRandomInt(10);
        const width = getRandomInt(10) + 5;
        const top = getRandomInt(100 - width, 0);
        return (
          <OuterFishWrapper delay={delayOuter}>
            <FishWrapper
              key={fish}
              top={top}
              width={width}
              left={FishDark[fishType].start === "left"}
              duration={duration}
              delay={delay}
            >
              <Img src={FishDark[fishType].img} width={width} z={1} />
            </FishWrapper>
          </OuterFishWrapper>
        );
      })}
    </Ocean>
  );
};

export default Fish;
