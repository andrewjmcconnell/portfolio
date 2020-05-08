import React, { useContext } from "react";
import styled, { keyframes, ThemeContext } from "styled-components";

import Astronaut from "./dark/Astronaut.svg";
import Planet from "./dark/Planet.svg";
import SpaceDark from "./dark/SpaceDark.svg";
import Meteor from "./dark/Meteor.svg";

import SpaceLight from "./light/SpaceLight.svg";

import { getRandomInt, Img, Background } from "../../utils/common";

const raining = ({ leftStart, leftEnd, height }) => keyframes`
  0% {
    left: ${leftStart}%;
    top: calc(0% - ${height}vh)
  }
  100% {
    left: ${leftEnd}%;
    top: 150%;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const MeteorWrapper = styled.div`
  position: absolute;
  animation: ${raining} ${({ duration }) => duration}s linear
    ${({ delay }) => delay}s infinite;
`;

const Space = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const meteors = 15;


  return isDarkMode ? (
    <Wrapper>
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
        const leftEnd = leftStart - 100;
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
            <Img src={Meteor} z={1} width={width} height={height} extraStyles={`top: ${0 - height}vh;`} />
          </MeteorWrapper>
        );
      })}
      <Background src={SpaceDark} width="100%" height="auto" />
    </Wrapper>
  ) : <Wrapper>
      <Background src={SpaceLight} width="100%" height="auto" />
  </Wrapper>;
};

export default Space;
