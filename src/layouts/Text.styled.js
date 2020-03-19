import styled, { css } from "styled-components";

export const TextSpan = styled.span`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ fontColor }) => fontColor};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ textAlign }) => textAlign};

  &:hover {
    ${({ hoverStyles }) =>
      css`
        ${hoverStyles}
      `}
  }

  &:before {
    ${({ beforeStyles }) =>
      css`
        ${beforeStyles}
      `}
  }

  ${({ disabled, disabledStyles }) =>
    disabled &&
    css`
      ${disabledStyles}
    `}

  ${({ extraStyles }) =>
    css`
      ${extraStyles}
    `}
`;
