import React, { Fragment, useContext } from "react";
import { ThemeContext } from "styled-components";
import { Background } from "../../utils/common";

import SkyLight from "./light/Sky.svg";

import SkyDark from "./dark/SkyNight.svg";

import Stars from "../../animations/Stars";
import Clouds from "../../animations/Clouds";

const Sky = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const clouds = 5;
  return isDarkMode ? (
    <Fragment>
      <Stars count={100} />
      <Background src={SkyDark} width="100%" height="auto" />
    </Fragment>
  ) : (
    <Fragment>
      <Background src={SkyLight} width="100%" height="auto" />
      <Clouds clouds={clouds} />
    </Fragment>
  );
};

export default Sky;
