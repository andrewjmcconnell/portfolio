import React from "react";
import styled, { css } from "styled-components";

/*
  The child span selector on hover styles targets the text inside of buttons when a button is hovered,
  as long as the box wrapper has an "as" prop equal to "button"

  The extracting of props and the disabling of the eslint rule is to stop React from complaining about
  unrecognized DOM attributes.
*/

/* eslint-disable no-unused-vars */
export const BoxWrapper = styled(
  ({
    position,
    activeStyles,
    focusStyles,
    hoverStyles,
    disabledStyles,
    extraStyles,
    borderSize,
    borderColor,
    borderWidthOverride,
    borderRadius,
    textAlign,
    boxShadow,
    minHeight,
    minWidth,
    hiddenStyles,
    ...props
  }) => <div {...props} />
)`
  position: ${({ position }) => position};
  box-sizing: border-box;
  padding: ${({ padding }) => padding};
  border: ${({ borderSize, borderColor }) =>
    `${borderSize} solid ${borderColor}`};
  box-shadow: ${({ boxShadow }) => boxShadow};
  background-color: ${({ background }) => background};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-width: ${({ borderWidthOverride, borderSize }) =>
    borderWidthOverride ? borderWidthOverride : borderSize};
  border: ${({ border }) => border};
  text-align: ${({ textAlign }) => textAlign};

  &:hover {
    ${({ hoverStyles, as }) =>
      css`
        ${hoverStyles}
        ${as === "button"
          ? `> * > span {
          ${hoverStyles}
          border: none;
          outline: none;
          box-shadow: none;
        }`
          : ``}
      `}
  }

  &:focus {
    ${({ focusStyles, as }) =>
      css`
        ${focusStyles}
        ${as === "button"
          ? `> * > span {
          ${focusStyles}
          border: none;
          outline: none;
          box-shadow: none;
        }`
          : ``}
      `}
  }

  &:active {
    ${({ activeStyles, as }) =>
      css`
        ${activeStyles}
        ${as === "button"
          ? `        > * > span {
          ${activeStyles}
          border: none;
          outline: none;
          box-shadow: none;
        }`
          : ``}
      `}
  }

  &:disabled {
    ${({ disabledStyles, as }) =>
      css`
        ${disabledStyles}
        ${as === "button"
          ? `        > * > span {
          ${disabledStyles}
          border: none;
          outline: none;
          box-shadow: none;
        }`
          : ``}
      `}
  }

  & * {
    color: ${({ color }) => color};
  }

  ${({ hiddenStyles }) =>
    hiddenStyles &&
    css`
      display: none;
    `}
  ${({ extraStyles }) =>
    css`
      ${extraStyles}
    `}

  ${({ hiddenStyles }) =>
    hiddenStyles &&
    css`
      display: none;
    `}
`;
/* eslint-enable no-unused-vars */