import styled, { keyframes } from "styled-components";

const twinkle = keyframes`
  0% {
    transform: scale(1, 1);
    background: rgba(255,255,255,0.0);
    // animation-timing-function: ease-in;
  }
  60% {
    transform: scale(0.8, 0.8);
    background: rgba(255,255,255,1);
    // animation-timing-function: ease-out;
  }
  80% {
    background: rgba(255,255,255,0.00);
    transform: scale(1, 1);
  }
  100% {
    background: rgba(255,255,255,0.0);
    transform: scale(1, 1);
  }
`;

export const Star = styled.div`
  position: absolute;
  will-change: transform, background;
  width: 0.5vmin;
  height: 0.5vmin;
  background: rgba(255, 255, 255, 0);
  border-radius: 0.5vmin;
  z-index: 1;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  animation: ${twinkle}
    ${({ duration, delay }) => `${duration}s linear ${delay}s infinite;`};
`;