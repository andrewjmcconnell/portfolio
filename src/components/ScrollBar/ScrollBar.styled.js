import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    transform: scale(1.0);
  }

  50% {
    transform: scale(1.3);
  }
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
  transform: translateX(-50%);

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
  height: 60px;
  width: 60px;

  &:hover {
    cursor: pointer;
    animation: ${bounce} 0.5s ease-out;
  }
`;
