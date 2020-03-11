import React, { Fragment, useRef } from "react";
import styled from "styled-components";

import ScrollBar from "../../components/ScrollBar";

import Space from "../../img/space.svg";
import Sky from "../../img/sky.jpg";
import Beach from "../../img/beach.svg";
import Underwater from "../../img/underwater.svg";

const Blue = styled.div`
  background-image: url(${({ img }) => img});
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;
const Yellow = styled.div`
  background-image: url(${({ img }) => img});
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;
const Red = styled.div`
  background-image: url(${({ img }) => img});
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;
const Purple = styled.div`
  background-image: url(${({ img }) => img});
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const LandingPage = () => {
  const blueRef = useRef(null);
  const yellowRef = useRef(null);
  const redRef = useRef(null);
  const purpleRef = useRef(null);
  return (
    <Fragment>
      <ScrollBar refs={[blueRef, yellowRef, redRef, purpleRef]} />
      <Blue ref={blueRef} img={Space} />
      <Yellow ref={yellowRef} img={Sky} />
      <Red ref={redRef} img={Beach} />
      <Purple ref={purpleRef} img={Underwater} />
    </Fragment>
  );
};
export default LandingPage;
