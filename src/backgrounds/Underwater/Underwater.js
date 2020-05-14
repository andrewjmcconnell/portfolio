import React, { Fragment, useContext } from "react";
import styled, { ThemeContext, keyframes } from "styled-components";
import { getRandomInt, Img, Background } from "../../utils/common";

import Fish from "../../animations/Fish";
import Bubbles from "../../animations/Bubbles";

import UnderwaterLight from "./light/underwater.svg";

import WaterDarkForeground from "./dark/WaterDarkForeground.svg";
import LightOne from "./dark/LightOne.svg";
import LightTwo from "./dark/LightTwo.svg";
import LightThree from "./dark/LightThree.svg";
import WaterDarkEmpty from "./dark/WaterDarkEmpty.svg";

const sway = ({ moveAt, skew }) => keyframes`
  0% {
    transform: skew(0deg);
  }
  ${moveAt}% {
    transform: skew(${skew}deg);
  }
  100% {
    transform: skew(0deg);
  }
`;

const LightWrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${({ left }) => left}%;
  z-index: 1;
  animation: ${sway} ${({ duration }) => duration}s ease-in-out
    ${({ delay }) => delay}s infinite;
`;

const Underwater = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return isDarkMode ? (
    <Fragment>
      <Background src={WaterDarkEmpty} width="100%" height="auto" />
      <LightWrapper
        left={getRandomInt(100)}
        duration={getRandomInt(10, 5)}
        delay={getRandomInt(10)}
        moveAt={getRandomInt(75, 25)}
        skew={getRandomInt(-8, 5)}
      >
        <Img src={LightOne} z={1} width={getRandomInt(50, 10)} />
      </LightWrapper>
      <LightWrapper
        left={getRandomInt(100)}
        duration={getRandomInt(10, 5)}
        delay={getRandomInt(10)}
        moveAt={getRandomInt(75, 25)}
        skew={getRandomInt(-8, 5)}
      >
        <Img src={LightTwo} z={1} width={getRandomInt(50, 10)} />
      </LightWrapper>
      <LightWrapper
        left={getRandomInt(100)}
        duration={getRandomInt(10, 5)}
        delay={getRandomInt(10)}
        moveAt={getRandomInt(75, 25)}
        skew={getRandomInt(-8, 5)}
      >
        <Img src={LightThree} z={1} width={getRandomInt(70, 20)} />
      </LightWrapper>
      <Fish />
      <Bubbles />
      <Img
        src={WaterDarkForeground}
        width="100"
        z={2}
        extraStyles="bottom: 0; left: 0; right: 0;"
      />
    </Fragment>
  ) : (
    <Fragment>
      <Background src={UnderwaterLight} width="100%" height="auto" />
      <Fish />
      <Bubbles />
    </Fragment>
  );
};

export default Underwater;
