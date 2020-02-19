import styled from "styled-components";

export const Scroll = styled.div`
  height: 75vh;
  background: transparent;
  width: 8px;
  position: fixed;
  right: 20px;
  z-index: 1;
  top: 12.5vh;
  bottom: 12.5vh;
`;

export const ScrollFill = styled.div.attrs(({ height }) => ({
  style: {
    height: `${height}%`
  }
}))`
  background-color: green;
`;

export const ScrollButton = styled.button`
  opacity: ${({ fade }) => fade ? 0 : 1};
  transition: opacity .3s ease-in-out;
  position: fixed;
  z-index: 1;
  right: 20px;
  ${({ position }) => {
    switch (position) {
      case "top":
        return "top: 10vh;";
      case "bottom":
        return "bottom: 10vh;";
      default:
        break;
    }
  }}
`;