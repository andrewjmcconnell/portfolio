import styled, { keyframes } from "styled-components";

const shiftIn = keyframes`
  0% {
    transform: translateX(30vw);
    opacity: 1.0;
  }

  100% {
    transform: translateX(110vw);
    opacity: 0.0;
  }
`;

const shiftOut = keyframes`
  0% {
    transform: translateX(110vw);
    opacity: 0.0;
  }

  100% {
    transform: translateX(30vw);
    opacity: 1.0;
  }
`;

export const Background = styled.img`
  position: absolute;
  z-index: -1;
  animation: ${({ animate }) => (!!animate ? shiftOut : shiftIn)} 1s
    forwards;
`;