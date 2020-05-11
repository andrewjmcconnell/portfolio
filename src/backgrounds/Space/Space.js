import React, { Fragment, useContext } from "react";
import styled, { keyframes, ThemeContext } from "styled-components";

import Astronaut from "./dark/Astronaut.svg";
import Planet from "./dark/Planet.svg";
import SpaceDark from "./dark/SpaceDark.svg";
import Meteor from "./dark/Meteor.svg";

import SpaceLightBck from "./light/SpaceLightBck.svg";
import PlanetOne from "./light/PlanetOne.svg";
import PlanetTwo from "./light/PlanetTwo.svg";
import PlanetThree from "./light/PlanetThree.svg";

import Stars from "../../animations/Stars";

import { getRandomInt, Img, Background } from "../../utils/common";

const raining = ({ leftStart, leftEnd, height }) => keyframes`
  0% {
    transform: translate(${leftStart}vmax, -${height}vh);
  }
  100% {
    transform: translate(${leftEnd}vmax, 100vh);
  }
`;

const MeteorWrapper = styled.div`
  position: absolute;
  will-change: transform;
  animation: ${raining} ${({ duration }) => duration}s linear
    ${({ delay }) => delay}s infinite;
`;

const twinkle = keyframes`
  0% {
    transform: scale(1, 1);
    background: rgba(255,255,255,0.0);
    animation-timing-function: ease-in;
  }
  60% {
    transform: scale(0.8, 0.8);
    background: rgba(255,255,255,1);
    animation-timing-function: ease-out;
  }
  80% {
    background: rgba(255,255,255,0.00);
    transform: scale(1, 1);
  }
  100% {
    background: rgba(255,255,255,0.0);
    transform: scale(1, 1);
  }
`;

const Space = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const meteors = 15;
  const stars = 100;

  return isDarkMode ? (
    <Fragment>
      <Background src={SpaceDark} width="100%" height="auto" />
      <Img
        src={Astronaut}
        height="30"
        width="100"
        z={3}
        extraStyles="bottom: 0; left: 50%; transform: translateX(-50%);"
      />
      <Img
        src={Planet}
        width="100"
        z={2}
        extraStyles="bottom: 0; left: 0; right: 0;"
      />
      {[...new Array(meteors).keys()].map(meteor => {
        const width = getRandomInt(20);
        const height = getRandomInt(20);
        const leftStart = getRandomInt(150 - width);
        const leftEnd = leftStart - 75;
        return (
          <MeteorWrapper
            key={meteor}
            duration={getRandomInt(10) + 6}
            delay={getRandomInt(30)}
            height={height}
            leftStart={leftStart}
            leftEnd={leftEnd}
            opacity={(getRandomInt(30) + 30) * 0.01}
          >
            <Img
              src={Meteor}
              z={1}
              width={width}
              height={height}
              extraStyles={`top: ${0 - height}vh;`}
            />
          </MeteorWrapper>
        );
      })}
    </Fragment>
  ) : (
    <Fragment>
      <Background src={SpaceLightBck} width="100%" height="auto" />
      <Img
        src={PlanetOne}
        width="40"
        z={4}
        extraStyles="top: 40vh; left: 10vw;"
      />
      <Img
        src={PlanetTwo}
        width="20"
        z={3}
        extraStyles="right: 5vw; bottom: 50vh;"
      />
      <Img
        src={PlanetThree}
        width="10"
        z={2}
        extraStyles="top: 5vh; left: 40vw;"
      />
      <Stars count={stars} />
    </Fragment>
  );
};

export default Space;
