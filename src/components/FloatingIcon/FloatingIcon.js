import React, { useState } from "react";

import Tooltip from "./Tooltip";
import { Container, Template, Icon } from "./FloatingIcon.styled";

const FloatingIcon = ({ src, tooltipContent }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Container
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Template>
        <Icon src={src} />
      </Template>
      <Tooltip display={showTooltip} content={tooltipContent} />
    </Container>
  );
};

export default FloatingIcon;
