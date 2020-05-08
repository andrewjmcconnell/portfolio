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
    left: -${width}vw;
  } 
  100% {
    left: calc(100vw + ${width}vw);
  }
`;

const CloudWrapper = styled.div`
  top: ${({ top }) => top}%;
  left: ${({ width }) => width}vw;
  animation: ${CloudMove}
    ${({ duration, delay }) => `${duration}s linear infinite ${delay}s`};
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
      {[...new Array(clouds).keys()].map(cloud => {
        const cloudType = getRandomInt(7);
        const top = getRandomInt(100);
        const duration = getRandomInt(30);
        const delay = getRandomInt(30);
        return (
          <CloudWrapper
            key={cloud}
            width={10}
            top={top}
            duration={duration}
            delay={delay}
          >
            <Img src={cloudTypes[cloudType]} width="10" z={1} />
          </CloudWrapper>
        );
      })}
      <Background src={SkyLight} width="100%" height="auto" />
    </Fragment>
  );
};

export default Sky;
