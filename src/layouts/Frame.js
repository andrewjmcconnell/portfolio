import React, { Fragment } from "react";
import { FrameOuterContainer } from "./Frame.styled";

/*
  The Frame component is used for cropping content to a specific aspect ratio.
  The aspect ratio is supplied by the numerator and denominator props.
  (The numerator is the left-hand number and denominator the right-hand number
  in class aspect-ratio notation, e.g., 16:9 or 4:3).
  This component should mostly be used with images or video content.
  However, the CSS makes it possible to use with _any_ type of element.
  This is useful for a situation where your child may be an image, or may be
  a different type of element. A good example is having textual fallback
  content when an image is not available.
*/

const Frame = ({ numerator = 1, denominator = 1, children }) => (
  <FrameOuterContainer numerator={numerator} denominator={denominator}>
    {children ? children : <Fragment />}
  </FrameOuterContainer>
);

export default Frame;