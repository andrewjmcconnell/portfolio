import React from "react";

import LightOne from "./sprites/LightOne.svg";
import LightTwo from "./sprites/LightTwo.svg";
import LightThree from "./sprites/LightThree.svg";

import { LightWrapper, Light } from "./Lights.styled";
import { getRandomInt, Img } from "../../utils/common";

const Lights = () => (
  <LightWrapper>
    <Light
      left={getRandomInt(100)}
      duration={getRandomInt(10, 5)}
      delay={getRandomInt(10)}
      moveAt={getRandomInt(75, 25)}
      skew={getRandomInt(-8, 5)}
    >
      <Img src={LightOne} z={1} width={getRandomInt(50, 10)} />
    </Light>
    <Light
      left={getRandomInt(100)}
      duration={getRandomInt(10, 5)}
      delay={getRandomInt(10)}
      moveAt={getRandomInt(75, 25)}
      skew={getRandomInt(-8, 5)}
    >
      <Img src={LightTwo} z={1} width={getRandomInt(50, 10)} />
    </Light>
    <Light
      left={getRandomInt(100)}
      duration={getRandomInt(10, 5)}
      delay={getRandomInt(10)}
      moveAt={getRandomInt(75, 25)}
      skew={getRandomInt(-8, 5)}
    >
      <Img src={LightThree} z={1} width={getRandomInt(70, 20)} />
    </Light>
  </LightWrapper>
);

export default Lights;
