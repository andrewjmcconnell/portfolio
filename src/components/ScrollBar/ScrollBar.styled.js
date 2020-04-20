import styled from "styled-components";

export const ScrollButton = styled.button`
  opacity: ${({ fade }) => (fade ? 0 : 1)};
  border: none;
  background-color: transparent;
  outline: none;
  transition: opacity 0.3s ease-in-out;
  position: fixed;
  z-index: 1;
  ${({ theme }) =>
    theme.isMobile ? "right: 1vw;" : "transform: translateX(-50%); left: 50%;"}

  ${({ position }) => {
    switch (position) {
      case "top":
        return "top: 2vh;";
      case "bottom":
        return "bottom: 2vh;";
      default:
        break;
    }
  }}
`;

export const ButtonLabel = styled.div`
  height: 0;
  opacity: 0;
`;