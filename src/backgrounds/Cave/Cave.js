import React, { Fragment, useContext } from "react";
import { ThemeContext } from "styled-components";
import { Img, Background } from "../../utils/common";

import CaveLightBackground from "./light/CaveBackground.svg";
import CaveLightForeground from "./light/CaveLightForeground.svg";

import CaveDarkBackground from "./dark/CaveDarkBackground.svg";
import CaveDarkForeground from "./dark/CaveDarkForeground.svg";

import Rain from "../../animations/Rain/Rain";

const Cave = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return isDarkMode ? (
    <Fragment>
      <Background src={CaveDarkBackground} width="100%" height="auto" />
      <Rain />
      <Img
        src={CaveDarkForeground}
        width="100"
        height="100"
        z={2}
        extraStyles="top: 0; left: 0; right: 0; bottom: 0; object-fit: cover;"
      />
    </Fragment>
  ) : (
    <Fragment>
      <Background src={CaveLightBackground} width="100%" height="auto" />
      <Rain />
      <Img
        src={CaveLightForeground}
        width="100"
        height="100"
        z={2}
        extraStyles="top: 0; left: 0; right: 0; bottom: 0; object-fit: cover;"
      />
    </Fragment>
  );
};

export default Cave;
