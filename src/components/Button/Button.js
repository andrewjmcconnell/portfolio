import React from "react";

import { ButtonWrapper } from "./Button.styled";

const Button = ({ onClick, disabled, label }) => (
  <ButtonWrapper onClick={onClick} disabled={disabled}>
    {label}
  </ButtonWrapper>
);

export default Button;