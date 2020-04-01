import React from "react";

import {
  Container,
  Template,
  Icon,
} from "./FloatingIcon.styled";

const FloatingIcon = ({ src, tooltipContent }) => (
    <Container>
      <Template>
        <Icon src={src} />
      </Template>
    </Container>
  );

export default FloatingIcon;
