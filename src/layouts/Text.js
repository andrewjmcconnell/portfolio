import React from "react";
import { TextSpan } from "./Text.styled";

const Text = ({
  fontSize = "1rem",
  fontWeight = "400",
  fontFamily,
  color = "black",
  lineHeight = "1.5rem",
  textAlign,
  extraStyles = ``,
  hoverStyles,
  beforeStyles,
  onClick,
  children
}) => {
  return (
    <TextSpan
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      fontColor={color}
      lineHeight={lineHeight}
      textAlign={textAlign}
      extraStyles={extraStyles}
      hoverStyles={hoverStyles}
      beforeStyles={beforeStyles}
      onClick={onClick}
    >
      {children ? children : <span />}
    </TextSpan>
  );
};

export default Text;
