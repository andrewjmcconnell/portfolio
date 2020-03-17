import React, { Fragment } from "react";
import { BoxWrapper } from "./Box.styled";

/*
  Box component to create generic boxes
  Supply padding, border, background, and color values
*/

const Box = ({
  position = "relative",
  padding = "1rem",
  borderSize = "0px",
  borderColor = "transparent",
  borderRadius,
  boxShadow = "none",
  background,
  color,
  minHeight,
  width,
  height,
  minWidth,
  borderWidthOverride,
  border,
  textAlign,
  hoverStyles,
  focusStyles,
  activeStyles,
  disabledStyles,
  variant,
  as,
  onClick,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onTouchEnd,
  theme,
  hiddenStyles,
  extraStyles,
  dataQa,
  boxRef,
  children
}) => (
  <BoxWrapper
    padding={padding}
    borderSize={borderSize}
    borderColor={borderColor}
    boxShadow={boxShadow}
    color={color}
    minHeight={minHeight}
    width={width}
    height={height}
    minWidth={minWidth}
    background={background}
    borderRadius={borderRadius}
    borderWidthOverride={borderWidthOverride}
    border={border}
    hoverStyles={hoverStyles}
    focusStyles={focusStyles}
    activeStyles={activeStyles}
    disabledStyles={disabledStyles}
    variant={variant}
    as={as}
    onClick={onClick}
    hiddenStyles={hiddenStyles}
    onKeyDown={onKeyDown}
    extraStyles={extraStyles}
    theme={theme}
    textAlign={textAlign}
    data-qa={dataQa}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onFocus={onFocus}
    onBlur={onBlur}
    onTouchEnd={onTouchEnd}
    ref={boxRef}
  >
    {children ? children : <Fragment />}
  </BoxWrapper>
);

export default Box;