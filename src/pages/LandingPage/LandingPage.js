import React, { Fragment, useRef } from "react";
import styled from "styled-components";

import Intro from "../Intro";
import Technologies from "../Technologies";
import Companies from "../Companies";
import Projects from "../Projects";
import Contact from "../Contact";

import Space from "../../animations/Space";
import Sky from "../../animations/Sky";
import Beach from "../../animations/Beach";
import Underwater from "../../animations/Underwater";
import Cave from "../../animations/Cave";

import ScrollBar from "../../components/ScrollBar";

const LandscapeDiv = styled.div`
  background-size: cover;
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
      <Landscape data-page="1" passRef={space}>
        <Space />
        <Intro screen={0} />
      </Landscape>
      <Landscape data-page="2" passRef={sky}>
        <Sky />
        <Technologies screen={1} />
      </Landscape>
      <Landscape data-page="3" passRef={beach}>
        <Beach />
        <Companies screen={2} />
      </Landscape>
      <Landscape data-page="4" passRef={underwater}>
        <Underwater />
        <Projects screen={3} />
      </Landscape>
      <Landscape data-page="5" passRef={cave}>
        <Cave />
        <Contact screen={4} />
      </Landscape>
    </Fragment>
  );
};
export default LandingPage;
