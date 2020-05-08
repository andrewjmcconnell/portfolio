import React, { Fragment, useContext } from "react";
import styled, { keyframes, ThemeContext } from "styled-components";
import { getRandomInt, Img, Background } from "../../utils/common";

import SkyLight from "./light/Sky.svg";
import CloudOne from "./light/CloudOne.svg";
import CloudTwo from "./light/CloudTwo.svg";
import CloudThree from "./light/CloudThree.svg";
import CloudFour from "./light/CloudFour.svg";
import CloudFive from "./light/CloudFive.svg";
import CloudSix from "./light/CloudSix.svg";
import CloudSeven from "./light/CloudSeven.svg";

import SkyDark from "./dark/sky_night.jpg";

const cloudTypes = [
  CloudOne,
  CloudTwo,
  CloudThree,
  CloudFour,
  CloudFive,
  CloudSix,
  CloudSeven
];

const CloudMove = ({ width }) => keyframes`
  0% {
    transform: translateX(-${width}vw);
  } 
  100% {
    transform: translateX(calc(100vw + ${width}vw));
  }
`;

const CloudWrapper = styled.div`
  position: absolute;
  will-change: transform;
  top: ${({ top }) => top}vh;
  left: -${({ width }) => width}vw;
  animation: ${CloudMove}
    ${({ duration, delay }) => `${duration}s linear ${delay}s infinite`};
`;

const Sky = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const clouds = 5;
  return isDarkMode ? (
    <Fragment>
      <Background src={SkyDark} width="100%" height="auto" />
    </Fragment>
  ) : (
    <Fragment>
      <Background src={SkyLight} width="100%" height="auto" />
      {[...new Array(clouds).keys()].map(cloud => {
        const cloudType = getRandomInt(7);
        const duration = getRandomInt(15) + 60;
        const delay = getRandomInt(45);
        const width = getRandomInt(10) + 5;
        const top = getRandomInt(100 - width, 0);
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
      })}
    </Fragment>
  );
};

export default Sky;
