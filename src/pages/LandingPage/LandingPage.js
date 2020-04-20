import React, { Fragment, useRef } from "react";
import styled from "styled-components";

import Intro from "../Intro";
import Technologies from "../Technologies";
import Companies from "../Companies";
import Projects from "../Projects";

import ScrollBar from "../../components/ScrollBar";

const LandscapeDiv = styled.div`
  background-image: url(${({ img, theme }) => theme.images[img]});
  transition: background-image 0.2s linear;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100vw;
`;

const Landscape = ({ passRef, img, children }) => (
  <LandscapeDiv ref={passRef} img={img}>
    {children ? children : <Fragment />}
  </LandscapeDiv>
);

const LandingPage = () => {
  const space = useRef(null);
  const sky = useRef(null);
  const beach = useRef(null);
  const underwater = useRef(null);
  const cave = useRef(null);
  return (
    <Fragment>
      <ScrollBar refs={[space, sky, beach, underwater, cave]} />
      <Landscape data-page="1" passRef={space} img={"space"}>
        <Intro />
      </Landscape>
      <Landscape data-page="2" passRef={sky} img={"sky"}>
        <Technologies />
      </Landscape>
      <Landscape data-page="3" passRef={beach} img={"beach"}>
        <Companies />
      </Landscape>
      <Landscape data-page="4" passRef={underwater} img={"underwater"}>
        <Projects />
      </Landscape>
      <Landscape data-page="5" passRef={cave} img={"cave"} />
    </Fragment>
  );
};
export default LandingPage;
