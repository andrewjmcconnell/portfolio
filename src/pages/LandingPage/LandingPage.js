import React, { Fragment, useRef, Suspense } from "react";
import styled from "styled-components";

import Intro from "../Intro";

import ScrollBar from "../../components/ScrollBar";

const LandscapeDiv = styled.div`
  background-image: url(${({ img, theme }) => theme.images[img]});
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
      <Landscape passRef={space} img={"space"}>
        <Intro />
      </Landscape>
      <Landscape passRef={sky} img={"sky"} />
      <Landscape passRef={beach} img={"beach"} />
      <Landscape passRef={underwater} img={"underwater"} />
      <Landscape passRef={cave} img={"cave"} />
    </Fragment>
  );
};
export default LandingPage;
