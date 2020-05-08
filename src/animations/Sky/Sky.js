import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { getRandomInt, Img, Background } from "../../utils/common";

import SkyLight from "./light/sky.jpg";
import SkyDark from "./dark/sky_night.jpg";

const Sky = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return isDarkMode ? (
    <Background src={SkyDark} width="100%" height="auto" />
  ) : (
    <Background src={SkyLight} width="100%" height="auto" />
  );
};

export default Sky;
