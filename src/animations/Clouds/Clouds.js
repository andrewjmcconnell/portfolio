import React from "react";

import { CloudWrapper } from "./Clouds.styled";

import CloudOne from "./sprites/CloudOne.svg";
import CloudTwo from "./sprites/CloudTwo.svg";
import CloudThree from "./sprites/CloudThree.svg";
import CloudFour from "./sprites/CloudFour.svg";
import CloudFive from "./sprites/CloudFive.svg";
import CloudSix from "./sprites/CloudSix.svg";
import CloudSeven from "./sprites/CloudSeven.svg";
import { getRandomInt, Img } from "../../utils/common";

const cloudTypes = [
  CloudOne,
  CloudTwo,
  CloudThree,
  CloudFour,
  CloudFive,
  CloudSix,
  CloudSeven
];

const Clouds = ({ clouds, bottom = 0 }) =>
  [...new Array(clouds).keys()].map(cloud => {
    const cloudType = getRandomInt(7);
    const duration = getRandomInt(15) + 60;
    const delay = getRandomInt(75);
    const width = getRandomInt(10) + 5;
    const top = getRandomInt(100 - bottom - width, 0);
    return (
      <CloudWrapper
        key={cloud}
        top={top}
        width={width}
        duration={duration}
        delay={delay}
      >
        <Img src={cloudTypes[cloudType]} width={width} z={1} />
      </CloudWrapper>
    );
  });

export default Clouds;
