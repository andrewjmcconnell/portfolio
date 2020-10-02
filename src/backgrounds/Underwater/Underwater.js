import React, { Fragment, useContext } from "react";
import { ThemeContext } from "styled-components";
import { Img, Background } from "../../utils/common";

import Fish from "../../animations/Fish";
import Bubbles from "../../animations/Bubbles";
import Lights from "../../animations/Lights";

import UnderwaterLight from "./light/WaterLight.svg";

import WaterDarkForeground from "./dark/WaterDarkForeground.svg";
import WaterDarkEmpty from "./dark/WaterDarkEmpty.svg";


const Underwater = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return isDarkMode ? (
    <Fragment>
      <Background src={WaterDarkEmpty} width="100%" height="auto" />
      <Fish />
      <Bubbles />
      <Lights />
      <Img
        src={WaterDarkForeground}
        width="100"
        z={2}
        extraStyles="left: 0; right: 0; bottom: 0; object-fit: cover;"
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
