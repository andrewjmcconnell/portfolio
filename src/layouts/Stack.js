import React, { Fragment } from "react";
import { StackWrapper } from "./Stack.styled";

/*
  Component to impose margin-top between a list of child elements
  Useful for things like sidebars and button lists
  Avoids common pitfalls like having to manually adjust the margin
  on first/last children
  For more information and diagrams:
  https://every-layout.dev/layouts/stack/
*/

const Stack = ({
  childGap = "1rem",
  bottomItem,
  fullHeight = false,
  children,
  direction = "column"
}) => (
  <StackWrapper
    childGap={childGap}
    bottomItem={bottomItem}
    fullHeight={fullHeight}
    direction={direction}
  >
    {children ? children : <Fragment />}
  </StackWrapper>
);

export default Stack;