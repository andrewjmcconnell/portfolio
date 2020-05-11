import React, { Fragment, useContext } from "react";
import { ThemeContext } from "styled-components";
import { getRandomInt, Img, Background } from "../../utils/common";

import UnderwaterLight from "./light/underwater.svg";
import UnderwaterDark from "./dark/underwater_dark.svg";

const Underwater = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return isDarkMode ? (
    <Fragment>
      <Background src={UnderwaterDark} width="100%" height="auto" />
    </Fragment>
  ) : (
    <Fragment>
      <Background src={UnderwaterLight} width="100%" height="auto" />
    </Fragment>
  );
};

export default Underwater;
