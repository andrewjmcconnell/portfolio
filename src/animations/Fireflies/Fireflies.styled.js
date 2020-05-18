import styled, { keyframes } from "styled-components";

const move = ({ steps, random }) => keyframes`
  ${[...new Array(steps).keys()].map(
    step =>
      `${step * (100 / steps)}% {
    transform: translateX(${random(100)}vw) translateY(${random(
        100
      )}vh) scale(${random(75) / 100 + 0.25});
  }}`
  )}
`;

const drift = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const flash = keyframes`
  0%, 30%, 100% {
    opacity: 0;
    box-shadow: 0 0 0vw 0vw yellow;
  }
  5% {
    opacity: 1;
    box-shadow: 0 0 2vw 0.4vw yellow;
  }
`;

export const FirefliesWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: ${({ top }) => top}00vh;
  overflow: hidden;
  background-color: transparent;
`;

export const Firefly = styled.i`
  position: absolute;
  z-index: ${({ z }) => z};
  width: 0.4vw;
  height: 0.4vw;
  margin: -0.2vw 0 0 9.8vw;
  animation: ${move} ease 200s alternate infinite;
  pointer-events: none;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform-origin: -10vw;
  }

  &:before {
    background: black;
    opacity: 0.4;
    animation: ${drift} ease alternate infinite;
    animation-duration: ${({ rotationSpeed }) => rotationSpeed}s;
  }

  &:after {
    background: white;
    opacity: 0;
    box-shadow: 0 0 0vw 0vw yellow;
    animation: ${drift} ease alternate infinite,
      ${flash} ease alternate infinite;
    animation-duration: ${({ rotationSpeed }) => rotationSpeed}s,
      ${({ duration }) => duration}ms;
    animation-delay: ${({ delay }) => delay}ms;
  }
`;
