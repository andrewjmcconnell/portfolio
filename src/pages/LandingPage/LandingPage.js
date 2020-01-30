import React, { Fragment } from "react";

import styled from "styled-components";

const Blue = styled.div`
  background-color: blue;
  height: 200px;
`;
const Yellow = styled.div`
  background-color: yellow;
  height: 200px;
`;
const Red = styled.div`
  background-color: red;
  height: 200px;
`;

const LandingPage = () => (
  <Fragment>
    <Blue />
    <Yellow />
    <Red />
  </Fragment>
);
export default LandingPage;
