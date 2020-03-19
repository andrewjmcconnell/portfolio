import React, { Fragment } from "react";
import { ClusterWrapper, ClusterInnerWrapper } from "./Cluster.styled";

/*
  Cluster components suit any groups of elements that differ in
  length and are liable to wrap. Buttons that appear together at the
  end of forms are ideal candidates, as well as lists of tags
  keywords, or other meta information. Use the Cluster to align any
  groups of horizontally laid out elements to the left or right, or
  in the center.
*/

const Cluster = ({
  justify,
  align,
  childGap,
  minHeight,
  overflow = false,
  children
}) => (
  <ClusterWrapper overflow={overflow}>
    <ClusterInnerWrapper
      justify={justify}
      align={align}
      childGap={childGap}
      minHeight={minHeight}
    >
      {children ? children : <Fragment />}
    </ClusterInnerWrapper>
  </ClusterWrapper>
);

export default Cluster;