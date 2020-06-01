import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Img, getRandomInt } from "../../utils/common";
import { Ocean, OuterFishWrapper, FishWrapper } from "./Fish.styled";

import BigFishOne from "./dark/BigFishOne.svg";
import BigFishTwo from "./dark/BigFishTwo.svg";
import SmallFishRight from "./dark/SmallFishRight.svg";
import SmallFishLeft from "./dark/SmallFishLeft.svg";

import FishOneLeft from "./light/FishOneLeft.svg";
import FishOneRight from "./light/FishOneRight.svg";
import FishTwoLeft from "./light/FishTwoLeft.svg";
import FishTwoRight from "./light/FishTwoRight.svg";
import FishThreeLeft from "./light/FishThreeLeft.svg";
import FishThreeRight from "./light/FishThreeRight.svg";
import FishFourLeft from "./light/FishFourLeft.svg";
import FishFourRight from "./light/FishFourRight.svg";
import FishFiveLeft from "./light/FishFiveLeft.svg";
import FishFiveRight from "./light/FishFiveRight.svg";

const FishDark = [
  { img: BigFishOne, start: "left" },
  { img: BigFishTwo, start: "left" },
  { img: SmallFishRight, start: "left" },
  { img: SmallFishLeft, start: "right" }
];

const FishLight = [
  { img: FishOneLeft, start: "left" },
  { img: FishTwoLeft, start: "left" },
  { img: FishThreeLeft, start: "left" },
  { img: FishFourLeft, start: "left" },
  { img: FishFiveLeft, start: "left" },
  { img: FishOneRight, start: "right" },
  { img: FishTwoRight, start: "right" },
  { img: FishThreeRight, start: "right" },
  { img: FishFourRight, start: "right" },
  { img: FishFiveRight, start: "right" },
];

const Fish = () => {
  const numFish = 15;
  const { isDarkMode } = useContext(ThemeContext);
  const fishArray = isDarkMode ? FishDark : FishLight;
  return (
    <Ocean>
      {[...new Array(numFish).keys()].map(fish => {
        const fishType = getRandomInt(isDarkMode ? 4 : 10);
        const duration = getRandomInt(30) + 40;
        const delayOuter = getRandomInt(10);
        const delay = getRandomInt(30);
        const width = getRandomInt(10) + 5;
        const top = getRandomInt(100 - width, 0);
        return (
          <OuterFishWrapper key={fish} delay={delayOuter}>
            <FishWrapper
              key={fish}
              top={top}
              width={width}
              left={fishArray[fishType].start === "left"}
              duration={duration}
              delay={delay}
            >
              <Img src={fishArray[fishType].img} width={width} z={1} />
            </FishWrapper>
          </OuterFishWrapper>
        );
      })}
    </Ocean>
  );
};

export default Fish;
