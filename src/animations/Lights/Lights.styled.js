import styled, { keyframes } from "styled-components";

const sway = ({ moveAt, skew }) => keyframes`
  0% {
    transform: skew(0deg);
  }
  ${moveAt}% {
    transform: skew(${skew}deg);
  }
  100% {
    transform: skew(0deg);
  }
`;

export const LightWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Light = styled.div`
  position: absolute;
  top: 0;
  left: ${({ left }) => left}%;
  z-index: 1;
  animation: ${sway} ${({ duration }) => duration}s ease-in-out
    ${({ delay }) => delay}s infinite;
`;
