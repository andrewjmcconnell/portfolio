import React from "react";

import { WavesWrapper, Wave, Foam } from "./Waves.styled";

const Waves = ({ top, bottom }) => (
  <WavesWrapper top={top} bottom={bottom}>
    <Foam />
    <Wave />
  </WavesWrapper>
);

export default Waves;
