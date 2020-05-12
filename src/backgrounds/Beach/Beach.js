import React, { Fragment, useContext } from "react";
import styled, { ThemeContext, keyframes } from "styled-components";
import { getRandomInt, Img, Background } from "../../utils/common";

import BeachLight from "./light/beach.svg";

import SkyNight from "./dark/SkyNight.svg";
import WaterNight from "./dark/WaterNight.svg";
import WavesNight from "./dark/WavesNight.svg";
import BeachNightForeground from "./dark/BeachNightForeground.svg";

import Fireflies from "../../animations/Fireflies";

const slide = keyframes`
  0% {
    transform: translate(100%);
  }
  100% {
    transform: translateX(-100%); 
  }
`;

const WaterWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  overflow: hidden;
  animation: ${slide} 45s linear infinite;
`;

const Beach = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return isDarkMode ? (
    <Fragment>
      <Img
        src={SkyNight}
        width="100"
        height="100"
        z={1}
        extraStyles="top: 0; left: 0; right: 0; object-fit: cover;"
      />
      <WaterWrapper>
        <Img
          src={WavesNight}
          width="100"
          height="40"
          z={2}
          extraStyles="object-fit: cover; bottom: 0;"
        />
      </WaterWrapper>
      <Img
        src={WaterNight}
        width="100"
        height="40"
        z={1}
        extraStyles="left: 0; right: 0; bottom: 0; object-fit: cover;"
      />
      <Img
        src={BeachNightForeground}
        width="100"
        height="100"
        z={3}
        extraStyles="bottom: 0; left: 0; right: 0; object-fit: cover;"
      />
      <Fireflies z={2} />
    </Fragment>
  ) : (
    <Fragment>
      <Background src={BeachLight} width="100%" height="auto" />
    </Fragment>
  );
};

export default Beach;
