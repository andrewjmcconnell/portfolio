import React, { Fragment, useRef, Suspense } from "react";
import styled from "styled-components";

import Intro from "../Intro";

import ScrollBar from "../../components/ScrollBar";

import Space from "../../img/space.svg";
import Sky from "../../img/sky.jpg";
import Beach from "../../img/beach.svg";
import Underwater from "../../img/underwater.svg";
import Cave from "../../img/cave.svg";

const LandscapeDiv = styled.div`
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100vw;
`;

const Landscape = ({ passRef, img, children }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <LandscapeDiv ref={passRef} img={img}>
      {children ? children : <Fragment />}
    </LandscapeDiv>
  </Suspense>
)

const LandingPage = () => {
  const space = useRef(null);
  const sky = useRef(null);
  const beach = useRef(null);
  const underwater = useRef(null);
  const cave = useRef(null);
  return (
    <Fragment>
      <ScrollBar refs={[space, sky, beach, underwater, cave]} />
      <Landscape passRef={space} img={Space}>
        <Intro />
      </Landscape>
      <Landscape passRef={sky} img={Sky} />
      <Landscape passRef={beach} img={Beach} />
      <Landscape passRef={underwater} img={Underwater} />
      <Landscape passRef={cave} img={Cave} />
    </Fragment>
  );
};
export default LandingPage;
