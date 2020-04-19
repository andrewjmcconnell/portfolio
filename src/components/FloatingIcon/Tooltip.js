import React from "react";

import {
  TooltipWrapper,
  TooltipArrow,
  TooltipText
} from "./FloatingIcon.styled";

const Tooltip = ({ display, content }) => (
  <TooltipWrapper show={display}>
    <TooltipArrow />
    <TooltipText>{content}</TooltipText>
  </TooltipWrapper>
);

export default Tooltip;
