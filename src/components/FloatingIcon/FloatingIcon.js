import React from "react";

import { Container, Template } from "./FloatingIcon.styled";

const FloatingIcon = ({ children }) => (
  <Container>
    <Template>{children}</Template>
  </Container>
);

export default FloatingIcon;
