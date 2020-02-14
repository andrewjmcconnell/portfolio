import React, { Fragment, useRef } from "react";
import styled from "styled-components";

import ScrollBar from "../../components/ScrollBar";

const Blue = styled.div`
  background-color: blue;
  height: 100vh;
  width: 100vw;
`;
const Yellow = styled.div`
  background-color: yellow;
  height: 100vh;
  width: 100vw;
`;
const Red = styled.div`
  background-color: red;
  height: 100vh;
  width: 100vw;
`;

const LandingPage = () => {
  const blueRef = useRef(null);
  const yellowRef = useRef(null);
  const redRef = useRef(null);
  return (
    <Fragment>
      <ScrollBar refs={[blueRef, yellowRef, redRef]} />
      <Blue ref={blueRef} />
      <Yellow ref={yellowRef} />
      <Red ref={redRef} />
    </Fragment>
  );
};
export default LandingPage;
