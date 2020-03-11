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
  opacity: ${({ fade }) => (fade ? 0 : 1)};
  border: none;
  background-color: transparent;
  outline: none;
  transition: opacity 0.3s ease-in-out;
  position: fixed;
  z-index: 1;
  left: 50%;
  right: 50%;
  ${({ position }) => {
    switch (position) {
      case "top":
        return "top: 5vh;";
      case "bottom":
        return "bottom: 5vh;";
      default:
        break;
    }
  }}
`;

export const ButtonImg = styled.img`
  src: url(${({ img }) => img});
  ${({ rotate }) => rotate && "transform: rotate(180deg);"}
  height: 60px;
  width: 60px;
`;
