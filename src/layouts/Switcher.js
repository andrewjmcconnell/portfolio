import React, { Fragment } from "react";
import {
  SwitcherOuterContainer,
  SwitcherInnerContainer
} from "./Switcher.styled";

/*
  The Switcher is a component that is used to toggle between wide and narrow
  layouts based on the size of the surrounding container. In the wide layout,
  the children of the Switcher will be sized to the value specified by childSize.
  The point at which the layout switches is specified by the breakpoint prop.
  The space between child elements is specified with 
  In the wide layout, it is possible to specify that a particular child take up
  more space than its siblings. The largeChild prop takes a child number and
  applies the largeChildSize to its flex-grow property.
  This component also accepts an optional maxChildren prop. This prop specifies the max
  number of children allowed before the component toggles to a vertical list
  layout.
  In the narrow layout, the children of the Switcher will render as a vertical list
  of width: 100%. This component is best used for scenarios when you want to bypass
  intermediate layouts where children may size differently depending on the number of
  children present in a given row.
  Use cases for this component include any situation "in which each child element
  should be considered equal, or part of a continuum. E.g., card components listing
  products/services should share the same width no matter the orientation, otherwise
  one or more cards could be perceived as highlighted or featured in some way. Or
  a set of numbered steps in, for example, a list of items to complete or tasks to do."
*/

const Switcher = ({
  breakpoint = "30rem",
  childGap = "1rem",
  largeChild,
  largeChildSize,
  maxChildren,
  maxChildrenOnly = false,
  children
}) => (
  <SwitcherOuterContainer>
    <SwitcherInnerContainer
      breakpoint={breakpoint}
      childGap={childGap}
      largeChild={largeChild}
      largeChildSize={largeChildSize}
      maxChildren={maxChildren}
      maxChildrenOnly={maxChildrenOnly}
    >
      {children ? children : <Fragment />}
    </SwitcherInnerContainer>
  </SwitcherOuterContainer>
);

export default Switcher;