import React from "react";

import {
  TooltipWrapper,
  TooltipArrow,
  TooltipText
} from "./FloatingIcon.styled";

const Tooltip = ({ display, content }) => (
  <TooltipWrapper display={display}>
    <TooltipArrow />
    <TooltipText>{content}</TooltipText>
  </TooltipWrapper>
);

export default Tooltip;
