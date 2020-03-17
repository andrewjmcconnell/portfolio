import React, { Fragment } from "react";
import { CenterWrapper } from "./Center.styled";

/*
  Component to horizontally center itself (with auto right and left margins)
  Use intrinsic prop if you want its children that are narrower than the max-width
  to also be centered within the center wrapper itself
*/

const Center = ({ maxWidth, gutters, intrinsic = false, children }) => (
  <CenterWrapper maxWidth={maxWidth} gutters={gutters} intrinsic={intrinsic}>
    {children ? children : <Fragment />}
  </CenterWrapper>
);

export default Center;