import styled, { css } from "styled-components";

export const TextSpan = styled.h2`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ theme }) => theme.colors.onBackground};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ textAlign }) => textAlign};
  margin: 0;

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
