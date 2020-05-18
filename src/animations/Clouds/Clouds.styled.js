import styled, { keyframes } from "styled-components";

const CloudMove = ({ width }) => keyframes`
  0% {
    transform: translateX(-${width}vw);
  } 
  100% {
    transform: translateX(calc(100vw + ${width}vw));
  }
`;

export const CloudWrapper = styled.div`
  position: absolute;
  will-change: transform;
  top: ${({ top }) => top}vh;
  left: -${({ width }) => width}vw;
  animation: ${CloudMove}
    ${({ duration, delay }) => `${duration}s linear ${delay}s infinite`};
`;
