import styled, { keyframes, css } from "styled-components";

const OpenRight = keyframes`
  25% { stroke-dasharray: 100 150; }
  60% { stroke-dasharray: 100 150; }
  100% { stroke-dasharray: 150 150; }
`;
const OpenLeft = keyframes`
  25% { stroke-dashoffset: -50px; }
  60% { stroke-dashoffset: -50px; }
  100% { stroke-dashoffset: 0; }
`;

export const Container = styled.div`
  display: inline-block;
  position: relative;

  svg {
    left: -13px;
    position: absolute;
    top: -11px;
    transition: transform 500ms;
    width: 46px;

    ${({ selected }) =>
      selected === 0
        ? "transform: translateX(0);"
        : selected === 1
        ? "transform: translateX(50px);"
        : selected === 2
        ? "transform: translateX(102px);"
        : selected === 3
        ? "transform: translateX(154px);"
        : "transform: translateX(206px);"}
  }

  path {
    fill: none;
    stroke: #2fb468;
    stroke-dasharray: 150 150;
    stroke-width: 15;

    ${({ flip, open }) =>
      open &&
      !flip &&
      css`
        animation: ${OpenRight} 0.5s;
      `}

    ${({ flip, open }) =>
      open &&
      flip &&
      css`
        animation: ${OpenLeft} 0.5s;
      `}
  }
`;

export const Index = styled.div`
  cursor: pointer;
  display: inline;
  margin-right: 30px;
  padding: 5px;
  user-select: none;

  &:last-child {
    margin: 0;
  }
`;
