import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { getRandomInt, Img, Background } from "../../utils/common";

import CaveLight from "./light/cave.svg";
import CaveDark from "./dark/cave_dark.svg";

const Cave = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return isDarkMode ? (
    <Background src={CaveDark} width="100%" height="auto" />
  ) : (
    <Background src={CaveLight} width="100%" height="auto" />
  );
};

export default Cave;
