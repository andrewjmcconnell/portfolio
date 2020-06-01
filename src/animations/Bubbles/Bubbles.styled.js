import styled, { keyframes } from "styled-components";

const weave = keyframes`
    to { transform: translateX(2vw); }
`;

const rise = ({ width }) => keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(calc(-100vw - ${width}vw));
    }
`;

export const Ocean = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const OuterBubbleWrapper = styled.div`
  will-change: transform;
  animation: ${weave} 1.5s alternate infinite ${({ delay }) => delay}s
    ease-in-out;
`;

export const BubbleWrapper = styled.div`
  position: absolute;
  will-change: transform;
  width: ${({ width }) => width}vmax;
  top: 100vh;
  left: ${({ left }) => left}vw;
  animation: ${rise} ${({ duration }) => duration}s linear
    ${({ delay }) => delay}s infinite;
`;
