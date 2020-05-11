import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { getRandomInt, Img, Background } from "../../utils/common";

import BeachLight from "./light/beach.svg";
import BeachDark from "./dark/beach_night.svg";

const Beach = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return isDarkMode ? (
    <Background src={BeachDark} width="100%" height="auto" />
  ) : (
    <Background src={BeachLight} width="100%" height="auto" />
  );
};

export default Beach;
