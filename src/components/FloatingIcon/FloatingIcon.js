import React, { useState } from "react";

import Tooltip from "./Tooltip";
import { Container, Template, Icon } from "./FloatingIcon.styled";

const FloatingIcon = ({ content }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Container
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Template>
        <Icon src={content.img} alt={content.alt} />
      </Template>
      <Tooltip display={showTooltip} content={content.tooltipContent} />
    </Container>
  );
};

export default FloatingIcon;
