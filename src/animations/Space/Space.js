import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";

import Astronaut from "./Astronaut.svg";
import Planet from "./Planet.svg";
import SpaceDark from "./SpaceDark.svg";
import Meteor from "./Meteor.svg";

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

const MeteorWrapper = styled.div`
  position: absolute;
  animation: ${raining} ${({ duration }) => duration}s linear
    ${({ delay }) => delay}s infinite;
`;

const Background = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
`;

const Img = styled.img`
  position: absolute;
  height: ${({ height }) => height}vh;
  width: ${({ width }) => width}vw;
  ${({ z }) => z && `z-index: ${z};`}
  ${({ extraStyles }) => extraStyles}
`;

const Space = () => {
  const meteors = 15;
  const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Space;
